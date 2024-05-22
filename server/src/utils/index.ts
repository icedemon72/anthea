export const newError = (status?: number, message?: string, options?: any) => {
	return {
			status: status || 500,
			message: message || 'Internal Server Error',
			...options
	}
}