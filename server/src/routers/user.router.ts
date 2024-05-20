import express from 'express';
import { handleUserDelete, handleUserIndex, handleUserShow, handleUserUpdate } from '../controllers/user.controller';

const router = express.Router({mergeParams: true});

router.get('/', handleUserIndex);
router.get('/:user', handleUserShow);
router.patch('/:user', handleUserUpdate);
router.delete('/:user', handleUserDelete);

export { router as userRouter };