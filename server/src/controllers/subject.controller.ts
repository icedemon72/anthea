import { Request, Response } from "express";
import { subjectStore } from "../services/subject.service";

// Logged in users
export const handleSubjectIndex = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

// Only admin
export const handleSubjectStore = async (req: Request, res: Response) => {
	try {
		const data = req.body;

		const resp = await subjectStore(data);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

// Only admin
export const handleSubjectUpdate = async (req: Request, res: Response) => {
	try {

	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admin
export const handleSubjectDelete = async (req: Request, res: Response) => {
	try {

	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}
