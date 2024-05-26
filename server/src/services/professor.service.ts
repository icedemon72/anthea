import prisma from "../../prisma/client";
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