import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../services/token.service';
import { inject } from '@angular/core';

export const RoleGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot, 
	state: RouterStateSnapshot
) => {
	const storageService = inject(TokenStorageService);
	const router = inject(Router);

	let logged = storageService.getRoles();
	const allowed = route.data['roles'] as Array<string>;

	if(logged) {
		if(hasPermissions(logged, allowed)) return true;
			
			router.navigate(['**'], { skipLocationChange: true });
			return false;
	}
	
	router.navigate(['auth/login']);
	return false;
};


const hasPermissions = (userRoles: Array<string>, requiredRoles: Array<string>) => {
	if (userRoles.includes('admin')) {
		return true; // Admin can access all the routes
	}

	if (userRoles.includes('professor')) {
		return requiredRoles.every(role => userRoles.includes(role) && role !== 'professor'); 
	}
	
	if (userRoles.includes('student')) {
		return requiredRoles.every(role => userRoles.includes(role) && role === 'student');
	}
	
	return false; 
}