import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from "@ng-icons/core";
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
	heroShieldCheck,
	heroBars3,
	heroXMark,
	heroPlus,
	heroPencil,
	heroTrash,
	heroCog6Tooth,
	heroCloudArrowUp,
	heroMegaphone,
	heroChatBubbleBottomCenter,
	heroDocumentDuplicate,
} from "@ng-icons/heroicons/outline";

import { UserComponent } from './layouts/user/user.component';
import { GuestComponent } from './layouts/guest/guest.component';
import {AsyncPipe, NgSwitch, NgSwitchCase} from "@angular/common";
import {PageLayout} from "./layouts/PageLayout";
import {PageLayoutService} from "./layouts/page-layout.service";
import { AdminComponent } from './layouts/admin/admin.component';
import { LoadingService } from './services/loading.service';
import { delay } from 'rxjs';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, UserComponent, GuestComponent, AdminComponent, NgIconComponent, NgSwitch, AsyncPipe, NgSwitchCase],
	providers: [provideIcons({
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
		heroShieldCheck,
		heroBars3,
		heroXMark,
		heroPlus,
		heroPencil,
		heroTrash,
		heroCog6Tooth,
		heroCloudArrowUp,
		heroMegaphone,
		heroChatBubbleBottomCenter,
		heroDocumentDuplicate
	})],
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	loading: boolean = false;
	
	readonly PageLayout = PageLayout;
	public pageLayoutService = inject(PageLayoutService);
	private loadingService = inject(LoadingService);


	ngOnInit(): void {
		this.listenToLoading();
	}

	listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
