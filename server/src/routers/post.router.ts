import express from 'express';
import { handlePostDelete, handlePostShow, handlePostStore, handlePostUpdate } from '../controllers/post.controller';

const router = express.Router({mergeParams: true});

router.post('/posts', handlePostStore);
router.get('/posts/:post', handlePostShow);
router.patch('/posts/:post', handlePostUpdate);
router.delete('/posts/:post', handlePostDelete);

export { router as postRouter };