import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarAdminComponent } from '../../components/sidebar-admin/sidebar-admin.component';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
		RouterOutlet,
		LoaderComponent,
		SidebarAdminComponent
	],
  templateUrl: './admin.component.html',
})

export class AdminComponent {
	@Input() loading: boolean = false;
}
