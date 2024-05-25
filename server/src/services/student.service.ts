import prisma from "../../prisma/client";
import { newError } from "../utils";

export const getStudentByUser = async (id: any) => {
	
	const student = await prisma.student.findFirst({
		where: {
			user: {
				id
			}
		}
	});

	console.log(student);


	if(!student) throw newError(404, 'Nije pronadjen student');
	
	return student;
}	