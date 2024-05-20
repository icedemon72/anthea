import prisma from "../../prisma/client";

export const subjectStore = async (data: any) => {
	
	const subject = await prisma.subject.create({
		data: {
			name: data.name,
			semester: data.semester,
			department: {
				connect: {
					id: data.department_id
				}
			}
		}
	});

	return subject;
}

export const subjectUpdate = async (subject_id: number, data: any) => {

}

export const subjectDelete = async (subject_id: number) => {
	
}