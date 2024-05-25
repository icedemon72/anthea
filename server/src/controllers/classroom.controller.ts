import { Request, Response } from "express";
import { changeCode, classroomDelete, classroomIndex, classroomJoin, classroomLeave, classroomProfessorJoin, classroomShow, classroomStore, classroomUpdate } from "../services/classroom.service";
import { getProfessorByUser } from "../services/professor.service";
import { getStudentByUser } from "../services/student.service";


// Admin should see this one, returns every classroom there is
export const handleClassroomIndex = async (req: Request, res: Response) => {
	try {
		const resp = await classroomIndex();
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only those in the classroom or admin
export const handleClassroomShow = async (req: Request, res: Response) => {
	try {
		const { classroom } = req.params;
		
		const resp = await classroomShow(parseInt(classroom));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professors
export const handleClassroomStore = async (req: Request, res: Response) => {
	try {
		const data = req.body;

		const professor = await getProfessorByUser(req?.user?.id! as unknown as number);
		const resp = await classroomStore(data, professor.id);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the classroom or admin
export const handleClassroomUpdate = async (req: Request, res: Response) => {
	try {
		const data = req.body
		const { classroom } = req.params;

		const resp = await classroomUpdate(data, parseInt(classroom));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only professor that have created the classroom or admin
export const handleClassroomDelete = async (req: Request, res: Response) => {
	try {
		const { classroom } = req.params;

		const resp = await classroomDelete(parseInt(classroom));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only logged in users
export const handleClassroomJoin = async (req: Request, res: Response) => {
	try {
		const { code } = req.body;

		const student = await getStudentByUser(req.user?.id! as number);

		const resp = await classroomJoin(code, student.id);
		
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admin or super professor
export const handleClassroomProfessorsJoin = async (req: Request, res: Response) => {
	try {
		const { professors } = req.body; // array
		const { classroom } = req.params;

		const resp = await classroomProfessorJoin(parseInt(classroom), professors);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

export const handleClassroomLeave = async (req: Request, res: Response) => {
	try {
		let { role } = req.body; 
		const { classroom } = req.params;

		if(!role) {
			role = 'student';
		}

		let user = 2;
		const resp = await classroomLeave(parseInt(classroom), user, role);
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}

// Only admins and professors 
export const handleChangeCode = async (req: Request, res: Response) => {
	try {
		const { classroom } = req.params;
		
		const resp = await changeCode(parseInt(classroom));
		return res.send(resp);
	} catch (e: any) {
		return res.status(e.status || 500).send(e || 'Internal Server Error');
	}
}
