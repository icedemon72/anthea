import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ClassroomCreate } from '../../pages/classroom/create/create.component';
import { ClassroomJoin } from '../../pages/classroom/join/join.component';
import { ClassroomEdit } from '../../pages/classroom/edit/edit.component';
import { ClassroomShow } from '../../pages/classroom/show/show.component';
import { ProfileComponent } from '../../pages/user/profile/profile.component';
import { PostCreate } from '../../pages/post/create/create.component';
import { PostShow } from '../../pages/post/show/show.component';
import { ClassroomParticipants } from '../../pages/classroom/participants/participants.component';
import { ArchiveIndex } from '../../pages/archive/index/index.component';

export const userRoutes: Routes = [
	// { path: 'departments/create', component: DepartmentCreate, canActivate: [RoleGuard],  data: { roles: ['admin'] }, title: 'Novi odsek | Anthea' },
	{ path: 'classrooms/create', component: ClassroomCreate, title: 'Nova učionica | Anthea' },
	{ path: 'classrooms/join', component: ClassroomJoin, title: 'Pridruži se učionici | Anthea' },
	{ path: 'classrooms/:id', component: ClassroomShow },
	{ path: 'classrooms/:id/edit', component: ClassroomEdit },
	{ path: 'classrooms/:id/participants', component: ClassroomParticipants },

	{ path: 'classrooms/:classroom/posts/create', component: PostCreate, title: 'Nova objava | Anthea' },
	{ path: 'classrooms/:classroom/posts/:id', component: PostShow },

	{ path: 'profile', component: ProfileComponent, title: 'Moj profil | Anthea' },

	{ path: 'archive', component: ArchiveIndex, title: 'Arhiva | Anthea' },

	{ path: '', component: HomeComponent, title: 'Anthea' },
];


export class UserLayoutRoutingModule {}
