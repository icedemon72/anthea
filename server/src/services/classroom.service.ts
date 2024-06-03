import { randomBytes } from "crypto";
import prisma from "../../prisma/client";
import { newError } from "../utils";
import { getStudentByUser } from "./student.service";
import { getProfessorByUser } from "./professor.service";
import { CLASSROOM_SELECT, USER_SELECT } from '../../prisma/selects';

// Admin
export const classroomIndex = async () => {
	const classrooms = await prisma.classroom.findMany();

	return classrooms;
}

export const classroomShow = async (id: number, select: any = {}) => {
	const classroom = await prisma.classroom.findFirst({
		where: {
			id
		},	
		select: {
			...select,
			...CLASSROOM_SELECT,
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

export const classroomJoin = async (code: string, student: number) => {

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
					id: student
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
					id: student
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

export const classroomJoined = async (id: number, all: boolean = false, select: any = {}) => {
	let student = await getStudentByUser(id, false);
	let professor = await getProfessorByUser(id, false);

	let classrooms = await prisma.classroom.findMany({
		where: {
			OR: [
				{
					students: {
						some: {
							id: student?.id || 0
						}
					},
				},
				{
					professors: {
						some: {
							id: professor?.id || 0
						},						
					}
				}
			]
		},
		select: {
			...select,
			professor: {
				select: {
					id: true,
					user: {
						select: USER_SELECT
					}
				}
			},
			professors: true,
			students: true,
			...CLASSROOM_SELECT
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	classrooms.forEach((classroom: any) => {
    // Check if the professor exists in the classroom's professors array
    const isProfessorInClassroom = classroom.professors.some((professorInClassroom: any) => professorInClassroom.id === professor?.id);

    // If the professor is found in the classroom, add isProfessor: true to the classroom object
    if (isProfessorInClassroom) {
			classroom.role = (classroom.professor.id === professor?.id && all) ? 'SP' : 'P';
    } else {
			classroom.role = 'S';
		}
		
		delete classroom['professors'];
		delete classroom['students'];
});

	return classrooms;
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