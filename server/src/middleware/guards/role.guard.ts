import { Request } from "express";
import { getProfessorByUser } from "../../services/professor.service";
import { getStudentByUser } from "../../services/student.service";
import { getAdminByUser } from "../../services/user.service";

export const isProfessor = async (req: Request) => {
	const userId: string = req.user!.id! as any;
	const professor = await getProfessorByUser(parseInt(userId), false);

	if(!professor) return false;

	return true;
}

export const isStudent = async (req: Request) => {
	const userId: string = req.user!.id! as any;
	const student = await getStudentByUser(parseInt(userId), false);

	if(!student) return false;

	return true;
}

export const isAdmin = async (req: Request) => {
	const userId: string = req.user!.id! as any;
	const admin = await getAdminByUser(parseInt(userId), false);

	if(!admin) return false;

	return true;
}

export const isUserRequested = async (req: Request) => {
	return req.user!.id! === req.params.user;
}