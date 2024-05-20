import express from 'express';
import { handleClassroomDelete, handleClassroomIndex, handleClassroomShow, handleClassroomStore, handleClassroomUpdate} from '../controllers/classroom.controller';

const router = express.Router({mergeParams: true});

router.post('/', handleClassroomStore);
router.get('/', handleClassroomIndex);
router.patch('/:classroom', handleClassroomUpdate);
router.get('/:classroom', handleClassroomShow);
router.delete('/:classrom', handleClassroomDelete);

export { router as classroomRouter };