import prisma from "../../prisma/client";
import { newError } from "../utils";

export const getStudentByUser = async (id: number) => {
	const student = await prisma.student.findFirst({
		where: {
			userId: id
		}
	});

	if(!student) throw newError(404, 'Nije pronadjen student');
	
	return student;
}