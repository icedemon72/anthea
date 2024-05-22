import { body } from 'express-validator';
import { validator } from './validator';

export const subjectBody = {
	name: 
		body('name', 'Greška prilikom unosa naziva predmeta')
			.notEmpty()
			.trim(),
		
	semester: 
		body('semester', 'Greška prilikom unosa semestra')
			.isInt({ min: 1, max: 16 }).withMessage('Semestar mora biti tipa int i veći od 1'),

	departmentId: 
		body('departmentId', 'Greška prilikom unosa odseka')
			.isInt()
}

export const validateSubject = [
	subjectBody.name,
	subjectBody.semester,
	subjectBody.departmentId,

	validator
];