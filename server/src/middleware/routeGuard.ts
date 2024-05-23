import { Request, Response, NextFunction } from "express";
import { newError } from "../utils";
import jwt from 'jsonwebtoken';
import { UserToken } from "./UserRequest";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
			const authHeader = req.headers['authorization'];
			if(!authHeader) throw newError(403, 'Authorization heder je obavezan');

			const token = authHeader.split(' ')[1];
			if(!token) throw newError(403, 'Token je obavezan');

			jwt.verify(token, process.env.AUTH_ACCESS_TOKEN_SECRET as string, (err, user) => {
					if(err) return res.status(401).send(newError(401, 'Token je istekao'));
					req.user = user as UserToken;

					next();
			});

	} catch (e: any) {
			return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}
