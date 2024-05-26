import { Subject } from './subject';

export interface Classroom {
	id: number;
	name: string;
	subjectId: number;
	createdAt: string;
	createdBy: number;
	code: string;
	role?: string; // P or S

	posts?: any[];
	students?: any[];
	professors?: any[];
	professor?: any;
	subject?: Subject;

}