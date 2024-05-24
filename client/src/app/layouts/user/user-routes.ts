import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { DepartmentCreate } from '../../pages/department/create/create.component';
import { SubjectCreate } from '../../pages/subject/create/create.component';
import { ClassroomCreate } from '../../pages/classroom/create/create.component';
import { ClassroomJoin } from '../../pages/classroom/join/join.component';

export const userRoutes: Routes = [
	{ path: 'departments/create', component: DepartmentCreate },
	{ path: 'subjects/create', component: SubjectCreate },
	{ path: 'classrooms/create', component: ClassroomCreate },
	{ path: 'classrooms/join', component: ClassroomJoin },
	{ path: '', component: HomeComponent },
];


export class UserLayoutRoutingModule {}
