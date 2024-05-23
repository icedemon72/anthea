import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [SidebarComponent, RouterOutlet],
	templateUrl: './user.component.html'
})

export class UserComponent {

}
