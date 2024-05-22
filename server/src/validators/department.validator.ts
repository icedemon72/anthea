import { body } from 'express-validator';
import { validator } from "./validator";

export const departmentBody = {
	name: 
		body('name', 'Greška prilikom unosa naziva!')
			.notEmpty().withMessage('Naziv ne sme biti prazan')
			.isString().withMessage('Naziv mora biti tipa string'),

	type:
		body('type', 'Greška prilikom unosa stepena studija!')
			.isIn(['OAS', 'MAS', 'DAS']).withMessage('Unešena je nedozvoljena vrednost, dozvoljene su: OAS, MAS i DAS')
}

export const validateDepartment = [
	departmentBody.name,
	departmentBody.type,

	validator
];

