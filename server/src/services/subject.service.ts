import prisma from "../../prisma/client";
import { newError } from "../utils";

export const subjectIndex = async () => {
	const subjects = await prisma.subject.findMany();

	return subjects;
}

export const subjectStore = async (data: any) => {
	const alreadyExists = await prisma.subject.findFirst({
		where: {
			name: data.name,
			department: {
				is: data.departmentId
			}
		}
	});

	if(alreadyExists) throw newError(400, 'Predmet već postoji na ovom odseku');
	
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

export const subjectShow = async(id: number) => {
	const subject = await prisma.subject.findFirst({
		where: {
			id
		}
	});

	if(!subject) throw newError(404, 'Ne postoji predmet sa time ID-em');

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