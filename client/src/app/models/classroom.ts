import { Subject } from './subject';

export interface Classroom {
	id: number;
	name: string;
	subjectId: number;
	createdAt: string;
	createdBy: number;
	code: string;
	role?: string; // SP, P or S
	color: string;
	joinable: boolean;
	archived: boolean;

	posts?: any[];
	students?: any[];
	professors?: any[];
	professor?: any;
	subject?: Subject;

}