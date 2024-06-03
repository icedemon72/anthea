import express from 'express';
import { handleUserDelete, handleUserIndex, handleUserProfile, handleUserShow, handleUserUpdate } from '../controllers/user.controller';
import { AuthGuard } from '../middleware/routeGuard';
import { isUserRequested, isAdmin, isProfessor } from '../middleware/guards/role.guard';
import { handleProfessorIndex } from '../controllers/professor.controller';

const router = express.Router({mergeParams: true});

router.get('/', handleUserIndex);
router.get('/profile', handleUserProfile);

router.get(
	'/professors', 
	AuthGuard([{
		role: 'professor',
		when: isProfessor
	}]),
	handleProfessorIndex
);


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