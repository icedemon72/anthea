import { Request, Response, NextFunction } from "express";
import { newError } from "../utils";
import jwt from 'jsonwebtoken';
import { UserToken } from "./UserRequest";
import { getAdminByUser } from "../services/user.service";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers['authorization'];
		if (!authHeader) throw newError(403, 'Authorization header je obavezan');

		const token = authHeader.split(' ')[1];
		if (!token) throw newError(403, 'Token je obavezan');

		jwt.verify(token, process.env.AUTH_ACCESS_TOKEN_SECRET as string, (err, user) => {
			if (err) return res.status(401).send(newError(401, 'Token je istekao'));
			req.user = user as UserToken;

			next();
		});

	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

type TRoleWithCondition = {
	role: string;
	when?: (req: Request, ...args: any[]) => Promise<boolean>;
};

export const AuthGuard = (rolesWithCondition: TRoleWithCondition[], dynamicArgs?: any[][]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			if (!req.user) return res.status(401).send(newError(401, 'Unauthorized'));

			if(req?.user.roles.includes('admin')) {
				const admin = await getAdminByUser(req.user!.id! as number, false);

				if(admin) {
					return next();
				}
			}

			const hasPermission = await Promise.all(rolesWithCondition.map(async ({ role, when }, index) => {
				let argsForWhen = [];
				if (dynamicArgs) {
					argsForWhen = dynamicArgs[index] || [];
				}

				if(role === '*') {
					return await when!(req, ...argsForWhen);
				}

				return req.user!.roles.includes(role!) && await when!(req, ...argsForWhen);	
			}));

			if (!hasPermission.some(permission => permission)) {
				return res.status(404).send(newError(404, 'Stranica ne postoji'));
			}
			
			next();
		} catch (error) {
			return res.status(500).send(newError(500, 'Internal Server Error'));
		}
	};
}