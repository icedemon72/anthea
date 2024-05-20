import express from 'express';
import { handleSubjectDelete, handleSubjectIndex, handleSubjectStore, handleSubjectUpdate } from '../controllers/subject.controller';

const router = express.Router({mergeParams: true});

router.post('/', handleSubjectStore);
router.get('/', handleSubjectIndex);
router.patch('/:subject', handleSubjectUpdate);
router.delete('/:subject', handleSubjectDelete);

export { router as subjectRouter };