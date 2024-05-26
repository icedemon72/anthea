import express from 'express';
import { handleUserDelete, handleUserIndex, handleUserProfile, handleUserShow, handleUserUpdate } from '../controllers/user.controller';
import { auth } from '../middleware/routeGuard';

const router = express.Router({mergeParams: true});

router.get('/', handleUserIndex);
router.get('/profile', handleUserProfile);
router.get('/:user', handleUserShow);
router.patch('/:user', handleUserUpdate);
router.delete('/:user', handleUserDelete);


export { router as userRouter };