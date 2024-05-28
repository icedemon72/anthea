import express from 'express';
import { handleChangeCode, handleClassroomDelete, handleClassroomIndex, handleClassroomJoin, handleClassroomJoined, handleClassroomLeave, handleClassroomProfessorsJoin, handleClassroomShow, handleClassroomStore, handleClassroomUpdate } from '../controllers/classroom.controller';
import { validateParams } from '../validators/validator';
import { validateClassroomJoin, validateClassroomLeave, validateClassroomStore, validateClassroomUpdate, validateProfessorJoin } from '../validators/classroom.validator';
import { auth, AuthGuard } from '../middleware/routeGuard';
import { isInClassroom, isProfessorInClassroom, isSuperProfessorInClassroom } from '../middleware/guards/classroom.guard';
import { isProfessor } from '../middleware/guards/role.guard';

const router = express.Router({mergeParams: true});

// Classroom store
router.post('/',
	validateClassroomStore,
	AuthGuard([{
		role: 'professor',
		when: isProfessor
	}]),
	handleClassroomStore
);

// Classroom index
router.get(
	'/',
	AuthGuard([{
		role: '*',
		when: isInClassroom
	}]),
	handleClassroomIndex
);

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
	AuthGuard([{
		role: '*',
		when: isInClassroom
	}]),
	validateParams('classroom'),
	handleClassroomShow
);

// Classroom delete
router.delete(
	'/:classrom',
	AuthGuard([{
		role: 'professor',
		when: isSuperProfessorInClassroom
	}]),
	validateParams('classroom'),
	handleClassroomDelete
);

// Classroom change code
router.patch(
	'/:classroom/code', 
	AuthGuard([{
		role: 'professor',
		when: isProfessorInClassroom
	}]),
	validateParams('classroom'),
	handleChangeCode
);

// Classroom add professors
router.post(
	'/:classroom/professors',
	validateParams('classroom'),
	validateProfessorJoin,
	AuthGuard([{
		role: 'professor',
		when: isSuperProfessorInClassroom
	}]),
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