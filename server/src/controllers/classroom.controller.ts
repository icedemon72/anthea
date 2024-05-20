import { Request, Response } from "express";
import { classroomStore } from "../services/classroom.service";


// Admin should see this one, returns every classroom there is
export const handleClassroomIndex = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only those in the classroom or admin
export const handleClassroomShow = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professors
export const handleClassroomStore = async (req: Request, res: Response) => {
	try {
		const data = req.body;

		// implement data from JWT here
		const resp = await classroomStore(data, 1);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the classroom or admin
export const handleClassroomUpdate = async (req: Request, res: Response) => {
	try {
		
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the classroom or admin
export const handleClassroomDelete = async (req: Request, res: Response) => {
	try {
		// Implement me
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}