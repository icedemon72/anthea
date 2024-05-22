import { body } from 'express-validator';
import { validator } from './validator';

export const postBody = {
	title: 
		body('title', 'Greška prilikom unosa naslova')
			.notEmpty().withMessage('Naslov mora postojati'),
	
	body: 
		body('body')
			.optional({ values: 'null' }),
	
	professorId: 
		body('professorId', 'GreŠka prilikom unosa profesora')
			.isInt(),
			
	type: 
		body('type')
			.isIn(['text', 'file', 'announcement']).withMessage('Unet je nevalidan tip'),
}

export const validatePostStore = [
	postBody.title,
	postBody.body,
	postBody.professorId,
	postBody.type,

	validator
];

export const validatePostUpdate = [
	postBody.title,
	postBody.body,
	postBody.type,

	validator
];