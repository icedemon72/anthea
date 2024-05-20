import { Request, Response } from "express";
import { postStore } from "../services/post.service";

// Admin
export const handlePostIndex = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Must be in the classroom
export const handlePostShow = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor in said classroom
export const handlePostStore = async (req: Request, res: Response) => {
	try {
		const { classroom } = req.params;
		const data = req.body;

		const resp = await postStore(data, parseInt(classroom));

		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the post or admin
export const handlePostUpdate = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the post or admin
export const handlePostDelete = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}