import bcrypt from 'bcrypt';
import prisma from "../../prisma/client";
import { USER_SELECT } from "../../prisma/selects";
import { newError } from '../utils';

export const register = async (data: any) => {
	data.password = await bcrypt.hash(data.password, 10);

	const user = await prisma.user.create({ data, select: USER_SELECT });

	await prisma.student.create({
		data: {
			user: {
				connect: {
					id: user.id
				}
			}
		}
	});

	
	return { 
		status: 200,
		message: 'Uspešna registracija!',
		user
	}
} 


export const userIndex = async () => {
	const users = await prisma.user.findMany({
		select: USER_SELECT
	});

	return users;
}

export const userShow = async (id: number) => {
	const user = await prisma.user.findFirst({
		where: {
			id
		},
		select: USER_SELECT
	});

	if(!user) throw newError(404, 'Korisnik ne postoji');

	return user;
}

export const userUpdate = async (data: any, id: number) => {
	const user = await prisma.user.update({
		where: {
			id
		},
		data,
		select: USER_SELECT
	});

	return user;
}

export const userDelete = async (id: number) => {
	const user = await prisma.user.delete({
		where: {
			id
		}
	});

	return { message: 'Korisnik uspešno obrisan!' };
}

export const getAdminByUser = async (id: number, returnError: boolean = true) => {
	const admin = await prisma.admin.findFirst({
		where: {
			userId: id
		}
	});

	if(!admin && returnError) throw newError(404, 'Nije pronadjen administrator');

	return admin;
}