import prisma from "../../prisma/client";
import { newError } from "../utils";

export const postIndex = async () => {
	const posts = await prisma.post.findMany();
	
	return posts;
}

export const postShow = async (id: number) => {
	const post = await prisma.post.findFirst({
		where: {
			id
		}
	});

	if(!post) throw newError(404, 'Objava ne postoji');

	return post;
}

export const postStore = async (data: any, classroom: number) => {
	let professor = 1; // TODO: remove this, use middleware...
	
	const post = await prisma.post.create({
		data: {
			type: data.type,
			title: data.title,
			body: data.body,

			classroom: {
				connect: {
					id: classroom
				}
			},

			professor: {
				connect: {
					id: professor
				}
			},

			// files: { TODO: IMPLEMENT THIS
			// 	create: {
					
			// 	}
			// }
		},
	});

	return post;
}

export const postUpdate = async (data: any, id: number) => {
	const post = await prisma.post.update({
		where: {
			id
		},
		data
	});

	return post;
}

export const postDelete = async (id: number) => {
	const post = await prisma.post.delete({
		where: {
			id
		}
	});

	return { message: 'Objava je uspešno obrisana' };
}
