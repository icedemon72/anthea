import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {
	heroHome,
	heroArrowLeftStartOnRectangle,
	heroUserCircle,
	heroSquaresPlus, 
	heroSquares2x2, 
	heroArchiveBox,
	heroBuildingLibrary,
	heroAcademicCap,
	heroRectangleGroup,
	heroChartPie,
	heroUserGroup,
	heroBriefcase,
	heroShieldCheck
} from "@ng-icons/heroicons/outline";
import { UserComponent } from './layouts/user/user.component';
import { GuestComponent } from './layouts/guest/guest.component';
import {AsyncPipe, NgSwitch, NgSwitchCase} from "@angular/common";
import {PageLayout} from "./layouts/PageLayout";
import {PageLayoutService} from "./layouts/page-layout.service";
import { AdminComponent } from './layouts/admin/admin.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, UserComponent, GuestComponent, AdminComponent, NgIconComponent, NgSwitch, AsyncPipe, NgSwitchCase],
	providers: [provideIcons(
{
		heroHome,
		heroArrowLeftStartOnRectangle,
		heroUserCircle,
		heroSquares2x2,
		heroSquaresPlus,
		heroArchiveBox,
		heroBuildingLibrary,
		heroAcademicCap,
		heroRectangleGroup,
		heroChartPie,
		heroUserGroup,
		heroBriefcase,
		heroShieldCheck
	})],
	templateUrl: './app.component.html',
})
export class AppComponent {
	readonly PageLayout = PageLayout;
	public pageLayoutService = inject(PageLayoutService);
}
