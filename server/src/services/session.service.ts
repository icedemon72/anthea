import prisma from "../../prisma/client";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { newError } from "../utils";

export const loginUser = async (email: string, password: string, userAgent: string) => {
	let user = await prisma.user.findUnique({
		where: { email },
	});

	// const expiresIn = process.env.TOKEN_EXPIRE as string;
	if (!user) throw { status: 400, message: 'Korisnik ne postoji' }

	let matchingPass = await bcrypt.compare(password, user.password);
	if (!matchingPass) throw { status: 401, message: 'Pogrešna email adresa ili lozinka' }

	const roles = await getRoles(user.id);
	
	const accessToken = jwt.sign({ id: user.id, email: user.email, roles },
		process.env.AUTH_ACCESS_TOKEN_SECRET as string, { expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY });
	
	const refreshToken = jwt.sign({ id: user.id, email: user.email, roles },
		process.env.AUTH_REFRESH_TOKEN_SECRET as string, { expiresIn: process.env.AUTH_REFRESH_TOKEN_EXPIRY });

	const session = {
		userId: user.id,
		refreshToken: refreshToken,
		active: true,
		userAgent: userAgent
	}

	await prisma.session.create({
		data: session
	});

	// @ts-ignore
	delete user.password;

	return {
		accessToken,
		refreshToken,
		user: {
			...user,
			roles
		}
	}
}

export const logoutUser = async (refreshToken: string, userAgent: string) => {
	let session = await prisma.session.findFirst({
		where: {
			refreshToken, userAgent
		}
	});

	if (!session) throw { status: 401, message: 'Korisnik nije ulogovan' }

	session.active = false;

	await prisma.session.update({
		where: { 
			id: session.id 
		},
		data: {
			active: false
		}
	});

	return { 'message': 'Uspešno ste se izlogovali!' };

}

export const refreshAccessToken = async (refreshToken: string, userAgent: string) => {
	let session = await prisma.session.findFirst({
		where: { refreshToken, userAgent }
	});

	if(!session) throw newError(498, 'Sesija ne postoji!');
	
	let decoded: any;

	try {
		decoded = jwt.verify(refreshToken, process.env.AUTH_REFRESH_TOKEN_SECRET as string);
	} catch (e: any) {
		throw newError(498, 'Refresh token je istekao!');
	}
	

	let user = await prisma.user.findUnique({
		where: {
			// @ts-ignore
			email: decoded.email
		}
	});

	if (!user) throw newError(404, 'Korisnik ne postoji!');
	
	const accessToken = jwt.sign({ id: user.id, email: user.email }, process.env.AUTH_ACCESS_TOKEN_SECRET as string, { expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY });

	return { accessToken };

}

const getRoles = async(id: number) => {
	let roles = [];

	const student = await prisma.student.findFirst({
		where: {
			userId: id
		}
	});

	const professor = await prisma.professor.findFirst({
		where: {
			userId: id
		}
	});

	const admin = await prisma.admin.findFirst({
		where: {
			userId: id
		}
	});

	if(student) roles.push('student');
	if(professor) roles.push('professor');
	if(admin) roles.push('admin');

	return roles;
}