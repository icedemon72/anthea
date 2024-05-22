import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {
	heroHome,
	heroArrowLeftStartOnRectangle,
	heroUserCircle,
	heroSquaresPlus, heroSquares2x2, heroArchiveBox
} from "@ng-icons/heroicons/outline";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, SidebarComponent, NgIconComponent],
	providers: [provideIcons(
{
		heroHome,
		heroArrowLeftStartOnRectangle,
		heroUserCircle,
		heroSquares2x2,
		heroSquaresPlus,
		heroArchiveBox
	})],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'client';
}
