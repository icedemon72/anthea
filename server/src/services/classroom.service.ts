import { randomBytes } from "crypto";
import prisma from "../../prisma/client";
import { getStudentByUser } from "./student.service";
import { USER_SELECT } from "../../prisma/selects";
import { newError } from "../utils";

// Admin
export const classroomIndex = async () => {
	const classrooms = await prisma.classroom.findMany();

	return classrooms;
}

export const classroomShow = async (id: number) => {
	const classroom = await prisma.classroom.findFirst({
		where: {
			id
		}
	});

	if(!classroom) throw newError(404, 'Učionica ne postoji');

	return classroom;
}

export const classroomStore = async (data: any, professorId: number) => {
	let code = await generateUniqueCode();

	if(data.professors.indexOf(professorId) === -1) {
		data.professors.push(professorId);
	}

	const classroom = await prisma.classroom.create({
		data: {
			name: data.name, 
			code,
			professor: {
				connect: {
					id: professorId
				}
			},
			subject: {
				connect: {
					id: data.subjectId
				}
			},
			professors: {
				connect: data.professors.map((professor: any) => ({ id: professor })) || [],
			},
		}
	});

	return classroom;
}

export const classroomUpdate = async (data: any, id: number) => {
	// Middleware needs to be added here, only admin and the professor
	// that created the classroom should have the access 

	const classroom = await prisma.classroom.update({
		where: {
			id
		},
		data
	});

	return classroom;
}

export const classroomDelete = async (id: number) => {
	const classroom = await prisma.classroom.delete({
		where: {
			id
		}
	});

	return { message: 'Uspešno brisanje iz baze' };
}

export const classroomJoin = async (code: string, user: number) => {
	const student = await getStudentByUser(user);

	const classroom = await prisma.classroom.findFirst({
		where: {
			code
		}
	});

	if(!classroom) throw newError(404, 'Unet je nevalidan kod!');

	const alreadyInClassroom = await prisma.classroom.findFirst({
		where: {
			id: classroom.id,
			students: {
				some: {
					id: user
				}	
			}
		}
	});

	if(alreadyInClassroom) throw newError(409, 'Već si u ovoj učionici');

	const joinedClassroom = await prisma.classroom.update({
		where: {
			id: classroom!.id
		},
		data: {
			students: {
				connect: {
					id: student.id
				}
			}
		}
	});

	return joinedClassroom;

}

export const classroomProfessorJoin = async (id: number, professorIds: number[]) => {
	const professors = await prisma.professor.findMany({
		where: {
			id: {
				in: professorIds
			}
		},
		select: {
			id: true
		}
	});
	

	if(professors.length !== professorIds.length) {
		// TODO: create custom throw function
		throw {
			message: 'Profesor/i ne postoji/e!',
			status: 400
		}
	}

	const classroomExists = await prisma.classroom.findFirst({
		where: {
			id
		}
	});

	if(!classroomExists) throw newError(404, 'Ne postoji učionica');

	const classroom = await prisma.classroom.update({
		where: {
			id
		},
		data: {
			professors: {
				connect: professors
			}
		},
		// add these later, for now it is not needed...
		// include: {
		// 	professor: {
		// 		include: {
		// 			user: {
		// 				select: USER_SELECT
		// 			}
		// 		}
		// 	},
		// 	professors: {
		// 		include: {
		// 			user: {
		// 				select: USER_SELECT
		// 			}
		// 		}
		// 	}
		// }
	});

	return classroom;	
}

export const classroomLeave = async (id: number, user: number, role: string = 'student') => {
	// TODO: fix me...	
	// const roleAware = (role === 'student') ? 
	// {
	// 	students: {
	// 		some: {
	// 			userId: user
	// 		}
	// 	}
	// }
	// : 
	// {
	// 	professors: {
	// 		some: {
	// 			userId: user
	// 		}
	// 	}
	// };

	// const classroom = await prisma.classroom.findFirst({
	// 	where: {
	// 		id,
	// 		...roleAware
	// 	}
	// });
	
	// if(!classroom) throw newError(404, `Nije pronadjena učionica sa ID-em ${id}`);
	
	return { message: "Implement me!" };
}

export const changeCode = async (id: number) => {
	let code = await generateUniqueCode();

	let classroom = await prisma.classroom.update({
		where: {
			id
		},
		data: {
			code
		}
	});

	return classroom;
}

// Recursive heaven :D
const generateUniqueCode = async () => {
	let code = randomBytes(3).toString('hex').toUpperCase();

	const classroomWithCode = await prisma.classroom.findFirst({
		where: {
			code
		}
	});

	if(classroomWithCode) {
		code = await generateUniqueCode();
	} 

	return code;
}