import { Request, Response } from "express";
import { professorIndex } from "../services/professor.service";

export const handleProfessorIndex = async (req: Request, res: Response) => {
	try {
		const resp = await professorIndex();
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}