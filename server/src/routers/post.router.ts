import express from 'express';
import { handlePostClassroomIndex, handlePostDelete, handlePostShow, handlePostStore, handlePostUpdate } from '../controllers/post.controller';
import { validatePostStore, validatePostUpdate } from '../validators/posts.validator';
import { validateParams } from '../validators/validator';
import { AuthGuard } from '../middleware/routeGuard';
import { isInClassroom, isProfessorInClassroom } from '../middleware/guards/classroom.guard';

const router = express.Router({mergeParams: true});

// Post store
// TODO: more secured shit needs to be implemented here, files needs to be validated in controller
router.post(
	'/posts', 
	validatePostStore,
	AuthGuard([{
		role: 'professor',
		when: isProfessorInClassroom
	}]),
	handlePostStore
);

router.get(
	'/posts',
	AuthGuard([{
		role: '*',
		when: isInClassroom
	}]),
	handlePostClassroomIndex
);

// Post show
router.get(
	'/posts/:post',
	AuthGuard([{
		role: '*',
		when: isInClassroom
	}]),
	validateParams('post'),
	handlePostShow
);

// Post update
// TODO: add that only the one who posted it can edit it
router.patch(
	'/posts/:post',
	validateParams('post'),
	validatePostUpdate,
	AuthGuard([{
		role: 'professor',
		when: isProfessorInClassroom
	}]),
	handlePostUpdate
);

// Post delete
router.delete(
	'/posts/:post', 
	validateParams('post'),
	AuthGuard([{
		role: 'professor',
		when: isProfessorInClassroom
	}]),
	handlePostDelete
);

export { router as postRouter };