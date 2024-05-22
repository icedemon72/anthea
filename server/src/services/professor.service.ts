import prisma from "../../prisma/client";
import { newError } from "../utils";

export const getProfessorByUser = async (id: number) => {
	const professor = await prisma.professor.findFirst({
		where: {
			userId: id
		}
	});

	if(!professor) throw newError(404, 'Nije pronadjen profesor');

	return professor;
}