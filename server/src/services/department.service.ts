import prisma from "../../prisma/client";

export const departmentIndex = async () => {
	const departments = await prisma.department.findMany({});

	return departments;
}

export const departmentStore = async (data: any) => {
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