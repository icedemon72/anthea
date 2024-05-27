import { Classroom } from "./classroom";

export interface Post {
	id: number;
	title: string;
	body: string;
	type: string;
	professorId: number;
	classroomId: number;
	createdAt: string;
	updatedAt: string;
	
	professor?: any;
	files?: any;
	classroom?: Classroom;
}