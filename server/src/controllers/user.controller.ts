import { Request, Response } from "express";
import { register, userDelete, userIndex, userShow, userUpdate } from "../services/user.service";
// Only guests
export async function handleRegister(req: Request, res: Response) {
	try {
  	//@ts-ignore
		let user = req.body;
		// check here for role! if admin -> can register new users with said role

		const resp = await register(user);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Admins
export const handleUserIndex = async (req: Request, res: Response) => {
	try {
		const resp = await userIndex();
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserShow = async (req: Request, res: Response) => {
	try {
		const { user } = req.params;

		const resp = userShow(parseInt(user));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserProfile = async (req: Request, res: Response) => {
	try {
		const user = req.user?.id;

		const resp = await userShow(parseInt(user as string));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserUpdate = async (req: Request, res: Response) => {
	try {
		const { user } = req.params;
		const data = req.body;

		const resp = await userUpdate(data, parseInt(user));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

export const handleUserDelete = async (req: Request, res: Response) => {
	try {
		const { user } = req.params;

		const resp = await userDelete(parseInt(user));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}