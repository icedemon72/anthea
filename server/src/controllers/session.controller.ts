import { Request, Response } from "express";
import { loginUser, logoutUser, refreshAccessToken } from "../services/session.service";

export const handleLogin = async (req: Request, res: Response) => {
	try {
		const email = req.body.email
		const password = req.body.password;
		const userAgent = req.headers['user-agent'];

		if(!userAgent || !email || !password ) { return res.status(400).send({message: 'Bad Request'}) };

		const session = await loginUser(email, password, userAgent);
		return res.send(session);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

export const handleRefresh = async (req: Request, res: Response) => {
	try {
		const refreshToken = req.body.refreshToken;
		const userAgent = req.headers['user-agent'];

		if(!userAgent) return res.status(400).send({message: 'User-agent je obavezan!'});

		const resp = await refreshAccessToken(refreshToken, userAgent);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

export const handleLogout = async (req: Request, res: Response) => {
	try {
		const refreshToken = req.body.refreshToken;
		const userAgent = req.headers['user-agent'];

		if(!userAgent) return res.status(400).send({message: 'User-agent je obavezan!'});
		if(!refreshToken) return res.status(400).send({message: 'Refresh Token je obavezan!'});

		const resp = await logoutUser(refreshToken, userAgent);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}
