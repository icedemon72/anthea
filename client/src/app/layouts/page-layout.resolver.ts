import {PageLayout} from "./PageLayout";
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {PageLayoutService} from "./page-layout.service";

export const setLayout = (inputLayout: PageLayout): ResolveFn<void> => {
	return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): any => {
		inject(PageLayoutService).setLayout(inputLayout);
	}
}
