import express from 'express';
import { handlePostClassroomIndex, handlePostDelete, handlePostShow, handlePostStore, handlePostUpdate } from '../controllers/post.controller';
import { validatePostStore, validatePostUpdate } from '../validators/posts.validator';
import { validateParams } from '../validators/validator';

const router = express.Router({mergeParams: true});

// Post store
// TODO: more secured shit needs to be implemented here, files needs to be validated in controller
router.post(
	'/posts', 
	validatePostStore,
	handlePostStore
);

router.get(
	'/posts',
	handlePostClassroomIndex
);

// Post show
router.get(
	'/posts/:post', 
	validateParams('post'),
	handlePostShow
);

// Post update
router.patch(
	'/posts/:post',
	validateParams('post'),
	validatePostUpdate,
	handlePostUpdate
);

// Post delete
router.delete(
	'/posts/:post', 
	validateParams('post'),
	handlePostDelete
);

export { router as postRouter };