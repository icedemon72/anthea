import { NextFunction, Request, Response } from 'express';
import { validationResult, matchedData, param } from 'express-validator';

export const validator = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);

	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	req.body = matchedData(req, {
		locations: ['body'],
		includeOptionals: false,
	});

	next();
}

export const paramValidator = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);

	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	req.params = matchedData(req, {
		locations: ['params'],
		includeOptionals: false,
	});

	next();
}

/**
 * @param {string} parameters 
 * Parameters that are to be validated, the function is making sure they are
 * not undefined, are int, and are converted to integer value
 * @returns {Array} validated array
 */

export const validateParams = (...parameters: string[]) => {
	const params = parameters.map((parameter: string) => 
		param(parameter, `Greška prilikom unosa parametara!`)
			.notEmpty()
			.isInt()
			.toInt(),
	);

	return (params.length) 
		? [ ...params, paramValidator ]
		: [];

} 