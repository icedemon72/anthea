import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { DepartmentCreate } from '../../pages/department/create/create.component';
import { SubjectCreate } from '../../pages/subject/create/create.component';
import { ClassroomCreate } from '../../pages/classroom/create/create.component';
import { ClassroomJoin } from '../../pages/classroom/join/join.component';
import { ClassroomEdit } from '../../pages/classroom/edit/edit.component';
import { ClassroomShow } from '../../pages/classroom/show/show.component';
import { DepartmentEdit } from '../../pages/department/edit/edit.component';
import { SubjectEdit } from '../../pages/subject/edit/edit.component';
import { ProfileComponent } from '../../pages/user/profile/profile.component';
import { PostCreate } from '../../pages/post/create/create.component';
import { PostShow } from '../../pages/post/show/show.component';

export const userRoutes: Routes = [
	{ path: 'departments/create', component: DepartmentCreate, title: 'Novi odsek | Anthea' },
	{ path: 'departments/:id/edit', component: DepartmentEdit },

	{ path: 'subjects/create', component: SubjectCreate, title: 'Novi predmet | Anthea' },
	{ path: 'subjects/:id/edit', component: SubjectEdit },
	
	{ path: 'classrooms/create', component: ClassroomCreate, title: 'Nova učionica | Anthea' },
	{ path: 'classrooms/join', component: ClassroomJoin, title: 'Pridruži se učionici | Anthea' },
	{ path: 'classrooms/:id', component: ClassroomShow },
	{ path: 'classrooms/:id/edit', component: ClassroomEdit },

	{ path: 'classrooms/:classroom/posts/create', component: PostCreate, title: 'Nova objava | Anthea' },
	{ path: 'classrooms/:classroom/posts/:id', component: PostShow },

	{ path: 'profile', component: ProfileComponent, title: 'Moj profil | Anthea' },

	{ path: '', component: HomeComponent, title: 'Anthea' },
];


export class UserLayoutRoutingModule {}
