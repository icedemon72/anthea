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

export const departmentUpdate = async (department_id: number, data: any) => {

}

export const departmentDelete = async (department_id: number) => {
	
}