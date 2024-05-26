import prisma from "../../prisma/client";
import { newError } from "../utils";

export const getStudentByUser = async (id: any, returnError: boolean = true) => {
	
	const student = await prisma.student.findFirst({
		where: {
			user: {
				id
			}
		}
	});

	if(!student && returnError) throw newError(404, 'Nije pronadjen student');
	
	return student;
}	