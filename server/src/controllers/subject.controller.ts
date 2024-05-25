import { Request, Response } from "express";
import { subjectDelete, subjectIndex, subjectShow, subjectStore, subjectUpdate } from "../services/subject.service";

// Logged in users
export const handleSubjectIndex = async (req: Request, res: Response) => {
	try {
		const resp = await subjectIndex();
		return res.send(resp);
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

export const handleSubjectShow = async (req: Request, res: Response) => {
	try {
		const { subject } = req.params;

		const resp = await subjectShow(parseInt(subject));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	} 
}

// Only admin
export const handleSubjectUpdate = async (req: Request, res: Response) => {
	try {
		const { subject } = req.params;
		const data = req.body;

		const resp = await subjectUpdate(data, parseInt(subject));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admin
export const handleSubjectDelete = async (req: Request, res: Response) => {
	try {
		const { subject } = req.params;

		const resp = await subjectDelete(parseInt(subject));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}
