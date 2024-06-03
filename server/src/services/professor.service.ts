import prisma from "../../prisma/client";
import { USER_SELECT } from "../../prisma/selects";
import { newError } from "../utils";

export const getProfessorByUser = async (id: number, returnError: boolean = true) => {
	const professor = await prisma.professor.findFirst({
		where: {
			userId: id
		}
	});

	if(!professor && returnError) throw newError(404, 'Nije pronadjen profesor');

	return professor;
}

export const professorIndex = async () => {
	const professors = await prisma.professor.findMany({
		select: {
			id: true,
			user: {
				select: USER_SELECT
			}
		}
	});

	return professors;
}