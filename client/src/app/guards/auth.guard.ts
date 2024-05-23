import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { TokenStorageService } from "../services/token.service";

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
	const tokenService = inject(TokenStorageService);
  const router = inject(Router);

	if(!tokenService.loggedIn()) {
		router.navigate(['auth/login']);
	}

	return tokenService.loggedIn();
}

export const guestGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
	const tokenService = inject(TokenStorageService);
  const router = inject(Router);

	if(tokenService.loggedIn()) {
		router.navigate(['']);
	}

	return !tokenService.loggedIn();
}