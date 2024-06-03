import { Injectable } from "@angular/core";
import { User } from "../models/user";


const TOKEN_KEY = 'auth-token';
const REFRESH_KEY = 'auth-refresh';
const USER_KEY = 'auth-user';


@Injectable({
	providedIn: 'root'
})

export class TokenStorageService {

	signOut(): void {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(REFRESH_KEY);
		localStorage.removeItem(USER_KEY);

	}

	public setToken(token: string): void {
		localStorage.setItem(TOKEN_KEY, token);
	}

	public getToken(): string | null {
		return localStorage.getItem(TOKEN_KEY);
	}

	public setRefresh(refresh: string): void {
		localStorage.setItem(REFRESH_KEY, refresh);
	}

	public getRefresh(): string | null {
		return localStorage.getItem(REFRESH_KEY);
	}

	public setUser(user: User): void {
		localStorage.setItem(USER_KEY, JSON.stringify(user));
	}

	public getUser(): User | null {
		const user = localStorage.getItem(USER_KEY);
		if (user) {
			return JSON.parse(user);
		}
		return null;
	}

	public loggedIn(): boolean {
		return !!localStorage.getItem(USER_KEY);
	}

	public getRoles(): Array<string> | null {
		let user = this.getUser();
		if (!user) return null;
		return user.roles!
	}
}