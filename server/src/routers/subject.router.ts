import express from 'express';
import { handleSubjectDelete, handleSubjectIndex, handleSubjectStore, handleSubjectUpdate } from '../controllers/subject.controller';
import { validateSubject } from '../validators/subject.validator';
import { validateParams } from '../validators/validator';

const router = express.Router({mergeParams: true});

// Subject store
router.post(
	'/', 
	validateSubject,
	handleSubjectStore
);

// Subject index
router.get('/', handleSubjectIndex);

// Subject update
router.patch(
	'/:subject', 
	validateParams('subject'),
	validateSubject,
	handleSubjectUpdate
);

// Subject delete
router.delete(
	'/:subject', 
	validateParams('subject'),
	handleSubjectDelete
);

export { router as subjectRouter };