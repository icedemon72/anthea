export interface DepartmentStore {
	name: string;
	type: string;
}

export interface Department {
	id: number;
	name: string;
	type: string;
	subjects?: any[]
}