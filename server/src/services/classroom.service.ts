import prisma from "../../prisma/client";

// Admin
export const classroomIndex = async () => {
	const classrooms = await prisma.classroom.findMany();

	return classrooms;
}

export const classroomShow = async (id: number) => {
	const classroom = await prisma.classroom.findFirstOrThrow({
		where: {
			id
		}
	});

	return classroom;
}

export const classroomStore = async (data: any, professor_id: number) => {
	const classroom = await prisma.classroom.create({
		data: {
			name: data.name, 
			professor: {
				connect: {
					id: professor_id
				}
			},
			subject: {
				connect: {
					id: data.subject_id
				}
			}
		}
	});

	return classroom;
}

export const classroomUpdate = async () => {
	// Implement me
}

export const classroomDelete = async () => {
	// Implement me
}


