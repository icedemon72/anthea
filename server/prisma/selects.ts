import { Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"

export const USER_SELECT = {
	id: true,
	avatar:true,
	email: true,
	name: true,
}

export const CLASSROOM_SELECT = {
	id: true,
	name: true,
	subjectId: true,
	createdAt: true,
	createdBy: true
}

export const POST_INCLUDE = {
	professor: {
		select: {
			user: {
				select: {
					name: true,
				}
			}
		}				
	}
}