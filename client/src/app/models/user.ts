export interface  UserResp {
	accessToken?: string;
	refreshToken?: string;
	user?: User;
}

export interface User {
	id: number;
	name: string;
	email: string;
	avatar: string;
	roles: string[];
}

export interface UserLogin {
	email: string;
	password: string;
}

export interface UserRegister {
	name: string;
	email: string;
	password: string;
}