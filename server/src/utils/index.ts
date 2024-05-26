import { Request } from "express"

export const newError = (status?: number, message?: string, options?: any) => {
	return {
			status: status || 500,
			message: message || 'Internal Server Error',
			...options
	}
}

// export const withQueryFormatter = (query: Request['query']) => {
// 	const keys = Object.keys(query);
// 	let result: any = {};
// 	// @ts-ignore
// 	keys.forEach((key) => (result[query[key]] = true ));

// 	return result;
// }