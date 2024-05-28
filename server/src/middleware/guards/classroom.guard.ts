import { Request } from "express";
import prisma from "../../../prisma/client";
import { getProfessorByUser } from "../../services/professor.service";

export const isInClassroom = async (req: Request) => {
	const classroomParam = parseInt(req.params.classroom);

	if(!req.params.classroom) return false;

	const userId: number = req.user!.id! as number;

	const classroom = await prisma.classroom.findFirst({
		where: {
			id: classroomParam,
			OR: [
				{
					professors: {
						some: {
							userId
						}
					}
				},
				{
					students: {
						some: {
							userId
						}
					}
				}
			]
		}
	});

	if(!classroom) return false;

	return true;
}

export const isProfessorInClassroom = async (req: Request) => {
	const classroomParam = parseInt(req.params.classroom);

	if(!req.params.classroom) {
		return false;
	}
	
	const userId: number = req.user!.id! as number;

	const professor = await getProfessorByUser(userId, false);

	if(!professor) return false;

	const classroom = await prisma.classroom.findFirst({
		where: {
			id: classroomParam,
			professors: {
				some: {
					id: professor.id
				}
			}
		},
	});

	if(!classroom) return false;

	return true;
}

export const isSuperProfessorInClassroom = async (req: Request) => {
	const classroomParam = parseInt(req.params.classroom);

	if(!req.params.classroom) {
		return false;
	}

	const userId: number = req.user!.id! as number;

	const professor = await getProfessorByUser(userId, false);

	if(!professor) return false;

	const classroom = await prisma.classroom.findFirst({
		where: {
			id: classroomParam,
			professor: {
				is: {
					id: professor.id
				}
			}
		},
	});

	if(!classroom) return false;

	return true;
}
