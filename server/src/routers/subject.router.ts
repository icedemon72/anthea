import express from 'express';
import { handleSubjectDelete, handleSubjectIndex, handleSubjectShow, handleSubjectStore, handleSubjectUpdate } from '../controllers/subject.controller';
import { validateSubject } from '../validators/subject.validator';
import { validateParams } from '../validators/validator';
import { AuthGuard } from '../middleware/routeGuard';
import { isAdmin } from '../middleware/guards/role.guard';

const router = express.Router({mergeParams: true});

// Subject store
router.post(
	'/', 
	validateSubject,
	AuthGuard([{
		role: 'admin',
		when: isAdmin
	}]),
	handleSubjectStore
);

// Subject index
router.get('/', handleSubjectIndex);

// Subject show 
router.get(
	'/:subject',
	validateParams('subject'),
	handleSubjectShow
);

// Subject update
router.patch(
	'/:subject', 
	validateParams('subject'),
	validateSubject,
	AuthGuard([{
		role: 'admin',
		when: isAdmin
	}]),
	handleSubjectUpdate
);

// Subject delete
router.delete(
	'/:subject', 
	validateParams('subject'),
	AuthGuard([{
		role: 'admin',
		when: isAdmin
	}]),
	handleSubjectDelete
);

export { router as subjectRouter };