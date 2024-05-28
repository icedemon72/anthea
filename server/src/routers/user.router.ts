import express from 'express';
import { handleUserDelete, handleUserIndex, handleUserProfile, handleUserShow, handleUserUpdate } from '../controllers/user.controller';
import { auth, AuthGuard } from '../middleware/routeGuard';
import { isUserRequested, isAdmin } from '../middleware/guards/role.guard';

const router = express.Router({mergeParams: true});

router.get('/', handleUserIndex);
router.get('/profile', handleUserProfile);
router.get('/:user', handleUserShow);

// User update
router.patch(
	'/:user', 
	AuthGuard([{
		role: '*',
		when: isUserRequested
	}]),
	handleUserUpdate
);

router.delete(
	'/:user', 
	AuthGuard([{
		role: 'admin',
		when: isAdmin
	}]),
	handleUserDelete
);


export { router as userRouter };