import { Classroom } from "./classroom";
import { Department } from "./department";

export interface Subject {
	id: number;
	name: string;
	semester: number;
	departmentId: number;
	department?: Department;
	classrooms?: Classroom[];
}