import prisma from "../../prisma/client";

export const postIndex = async () => {

}

export const postShow = async () => {
	
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

export const postUpdate = async () => {

}

export const postDelete = async () => {
	
}
