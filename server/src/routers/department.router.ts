import express from 'express';
import { handleDepartmentDelete, handleDepartmentIndex, handleDepartmentStore, handleDepartmentUpdate } from '../controllers/department.controller';
import { validateDepartment } from '../validators/department.validator';
import { validateParams } from '../validators/validator';

const router = express.Router({mergeParams: true});

// Department store
router.post(
	'/', 
	validateDepartment,
	handleDepartmentStore
);

// Department index
router.get('/', handleDepartmentIndex);

// Department update
router.patch(
	'/:department',
	validateParams('department'),
	validateDepartment,
	handleDepartmentUpdate
);

// Department delete
router.delete(
	'/:department', 
	validateParams('departemnt'),
	handleDepartmentDelete
);

export { router as departmentRouter };