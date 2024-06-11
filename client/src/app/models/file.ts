export interface File {
	id: number;
	path?: string;
	filename: string;
	mimetype: string;
	destination?: string;
	originalname: string;
	size: number;
	postId?: number;
	createdAt?: string;
}