import prisma from "../../prisma/client";
import { newError } from "../utils";

export const departmentIndex = async () => {
	const departments = await prisma.department.findMany({});

	return departments;
}

export const departmentShow = async(id: number) => {
	const department = await prisma.department.findFirst({
		where: {
			id
		}
	});

	if(!department) throw newError(404, 'Ne postoji odsek sa tim ID-em!');

	return department;
}

export const departmentStore = async (data: any) => {
	const alreadyExists = await prisma.department.findFirst({
		where: {
			name: data.name,
			type: data.type
		}
	});

	if(alreadyExists) throw newError(400, 'Već postoji odsek sa ovim imenom na studijskom programu');

	const department = await prisma.department.create({
		data
	});
	
	return department;
}

export const departmentUpdate = async (data: any, id: number) => {
	const department = await prisma.department.update({
		where: {
			id
		},
		data
	});

	return department;
}

export const departmentDelete = async (id: number) => {
	const department = await prisma.department.delete({
		where: {
			id
		}
	});

	return { message: 'Odsek je uspešno obrisan' };
}