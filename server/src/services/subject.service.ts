import prisma from "../../prisma/client";

export const subjectIndex = async () => {
	const subjects = await prisma.subject.findMany();

	return subjects;
}

export const subjectStore = async (data: any) => {
	
	const subject = await prisma.subject.create({
		data: {
			name: data.name,
			semester: data.semester,
			department: {
				connect: {
					id: data.departmentId
				}
			}
		}
	});

	return subject;
}



export const subjectUpdate = async (data: any, id: number) => {
	const subject = await prisma.subject.update({
		where: {
			id
		},
		data
	});

	return subject;
}

export const subjectDelete = async (id: number) => {
	const subject = await prisma.subject.delete({
		where: {
			id
		}
	});

	return { message: 'Predmet je uspešno obrisan' };
}