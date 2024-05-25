import { Request, Response } from "express";
import { departmentDelete, departmentIndex, departmentShow, departmentStore, departmentUpdate } from "../services/department.service";

// Logged in users
export const handleDepartmentIndex = async (req: Request, res: Response) => {
	try {
		const resp = await departmentIndex();
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

export const handleDepartmentShow = async (req: Request, res: Response) => {
	try {
		const { department } = req.params;

		const resp = await departmentShow(parseInt(department));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admins
export const handleDepartmentStore = async (req: Request, res: Response) => {
	try {
		const data = req.body;

		const resp = await departmentStore(data);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admins
export const handleDepartmentUpdate = async (req: Request, res: Response) => {
	try {
		const { department } = req.params;
		const data = req.body;

		const resp = await departmentUpdate(data, parseInt(department));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admins
export const handleDepartmentDelete = async (req: Request, res: Response) => {
	try {
		const { department } = req.params; 

		const resp = await departmentDelete(parseInt(department));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}