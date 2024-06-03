import { Request, Response } from "express";
import { postClassroomIndex, postDelete, postIndex, postShow, postStore, postUpdate } from "../services/post.service";
import { getProfessorByUser } from "../services/professor.service";

// Admin
export const handlePostIndex = async (req: Request, res: Response) => {
	try {
		const resp = await postIndex();
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

export const handlePostClassroomIndex = async (req: Request, res: Response) => {
	try {
		const { classroom } = req.params;
		
		const resp = await postClassroomIndex(parseInt(classroom));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Must be in the classroom
export const handlePostShow = async (req: Request, res: Response) => {
	try {
		const { post } = req.params;

		const resp = await postShow(parseInt(post));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor in said classroom
export const handlePostStore = async (req: Request, res: Response) => {
	try {
		const { classroom } = req.params;
		const data = req.body;
		const professor = await getProfessorByUser(req.user!.id as number);
		console.log(req.files);
		// const resp = await postStore(data, parseInt(classroom), professor!.id);

		return res.send(req.files);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the post or admin
export const handlePostUpdate = async (req: Request, res: Response) => {
	try {
		const { post } = req.params;
		const data = req.body;

		const resp = await postUpdate(data, parseInt(post));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the post or admin
export const handlePostDelete = async (req: Request, res: Response) => {
	try {
		const { post } = req.params;

		const resp = await postDelete(parseInt(post));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}