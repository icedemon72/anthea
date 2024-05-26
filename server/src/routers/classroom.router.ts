import express from 'express';
import { handleChangeCode, handleClassroomDelete, handleClassroomIndex, handleClassroomJoin, handleClassroomJoined, handleClassroomLeave, handleClassroomProfessorsJoin, handleClassroomShow, handleClassroomStore, handleClassroomUpdate } from '../controllers/classroom.controller';
import { validateParams } from '../validators/validator';
import { validateClassroomJoin, validateClassroomLeave, validateClassroomStore, validateClassroomUpdate, validateProfessorJoin } from '../validators/classroom.validator';

const router = express.Router({mergeParams: true});

// Classroom store
router.post('/',
	validateClassroomStore,
	handleClassroomStore
);

// Classroom index
router.get('/', handleClassroomIndex);

// Classroom join
router.post(
	'/join', 
	validateClassroomJoin,	
	handleClassroomJoin
);

router.get(
	'/joined',
	handleClassroomJoined
);


// Classroom update
router.patch(
	'/:classroom', 
	validateParams('classroom'), 
	validateClassroomUpdate,
	handleClassroomUpdate
);

// Classroom show
router.get(
	'/:classroom', 
	validateParams('classroom'),
	handleClassroomShow
);

// Classroom delete
router.delete(
	'/:classrom',
	validateParams('classroom'),
	handleClassroomDelete
);

// Classroom change code
router.patch(
	'/:classroom/code', 
	validateParams('classroom'),
	handleChangeCode
);

// Classroom add professors
router.post(
	'/:classroom/professors',
	validateParams('classroom'),
	validateProfessorJoin,
	handleClassroomProfessorsJoin
);

// Leave classroom as {ROLE}
router.post(
	'/:classroom/leave',
	validateParams('classroom'),
	validateClassroomLeave,
	handleClassroomLeave
);

export { router as classroomRouter };