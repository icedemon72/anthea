import { body } from 'express-validator';
import { validator } from './validator';

export const userBody = {
	email: 
		body('email', 'Greška prilikom unosa e-adrese')
			.trim()
			.toLowerCase()
			.isEmail().withMessage('Nije unešena e-adresa...'),

	password:
		body('password', 'Greška prilikom unosa lozinke')
			.exists()
			.notEmpty(),
	
	name: 
		body('name', 'Greška prilikom unosa imena')
			.notEmpty()
			.trim(),
}


export const validateUserRegister = [ 
	userBody.email,
	userBody.password,
	userBody.name,

	validator
];

export const validateUserLogin = [
	userBody.email,
	userBody.password,
	
	validator
];

