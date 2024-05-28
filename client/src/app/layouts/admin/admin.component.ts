import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarAdminComponent } from '../../components/sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
		RouterOutlet,
		SidebarAdminComponent
	],
  templateUrl: './admin.component.html',
})

export class AdminComponent {

}
