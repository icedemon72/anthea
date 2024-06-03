import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [
		SidebarComponent, 
		LoaderComponent,
		RouterOutlet
	],
	templateUrl: './user.component.html'
})

export class UserComponent {
	@Input() loading: boolean = false;
}
