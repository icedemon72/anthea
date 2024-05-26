import { body, query } from 'express-validator';
import { validator } from "./validator";

export const classroomBody = {
	name: 
		body('name', 'Greška prilikom unosa naziva učionice')
			.notEmpty()
				.withMessage('Naziv mora postojati!')
			.isString()
				.withMessage('Naziv mora biti tipa string!'),
	
	subjectId: 
		body('subjectId', 'Greška prilikom unosa predmeta!')
			.isInt()
			.toInt(),

	professors: 
		body('professors', 'Greška prilikom unosa profesora!')
			.isArray(),

	code: 
		body('code', 'Greška prilikom unosa koda!')
			.notEmpty()
				.withMessage('Kod mora postojati!')
			.isLength({ min: 6, max: 6 })
				.withMessage('Kod mora biti dužine 6 karaktera!'),

	role: 
		body('role', 'Greška prilikom unosa permisije!')
			.isString()
			.isIn(['student', 'professor'])
}

// export const classroomQuery = {
// 	with: 
// 		query('with')
// 			.optional()
// 			.isIn(['posts'])
// }

export const validateClassroomStore = [
	classroomBody.name,
	classroomBody.subjectId,
	classroomBody.professors,
	validator
];

export const validateClassroomJoin = [
	classroomBody.code,
	validator
];

export const validateClassroomUpdate = [
	classroomBody.name,	
	validator
];

export const validateProfessorJoin = [
	classroomBody.professors,
	validator
];

export const validateClassroomLeave = [
	classroomBody.role,
	validator
];

// export const validateClassroomQueries = [
// 	classroomQuery.with,

// 	queryValidator
// ];