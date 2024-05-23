import { Classroom } from "./classroom";
import { Department } from "./department";

export interface Subject {
	name: string;
	semester: number;
	departmentId: number;
	department?: Department;
	classrooms?: Classroom[];
}