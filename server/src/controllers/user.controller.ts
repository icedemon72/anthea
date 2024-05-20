import { Request, Response } from "express";
import { register } from "../services/user.service";

// Only guests
export async function handleRegister(req: Request, res: Response) {
	try {
  	//@ts-ignore
		let user = req.body;
		// check here for role! if admin -> can register new users with said role
		// otherwise - set it to 'user', just like below
		user.role = 'user';
		const resp = await register(user);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Admins
export const handleUserIndex = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserShow = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserUpdate = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserDelete = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}