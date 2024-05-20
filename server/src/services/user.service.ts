import prisma from "../../prisma/client";
import bcrypt from 'bcrypt';

export const register = async (data: any) => {
	data.password = await bcrypt.hash(data.password, 10);

	const user = await prisma.user.create({ data });
	
	await prisma.student.create({
		data: {
			userId: user.id
		}
	});

	return { 
		status: 200,
		message: 'Uspešna registracija!',
		user
	}
}

export const userIndex = async () => {

}

export const userShow = async () => {

}

export const userUpdate = async () => {

}

export const userDelete = async () => {
	
}