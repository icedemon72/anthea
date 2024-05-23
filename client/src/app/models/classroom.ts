import { Subject } from './subject';

export interface Classroom {
	name: string;
	subjectId: number;
	createdAt: string;
	createdBy: number;
	code: string;

	posts?: any[];
	students?: any[];
	professors?: any[];
	professor?: any;
	subject?: Subject;

}