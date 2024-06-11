import { Classroom } from "./classroom";
import { File } from "./file";

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
	files?: File[];
	classroom?: Classroom;
}