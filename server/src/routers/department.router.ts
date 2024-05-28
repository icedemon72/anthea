import express from 'express';
import { handleDepartmentDelete, handleDepartmentIndex, handleDepartmentShow, handleDepartmentStore, handleDepartmentUpdate } from '../controllers/department.controller';
import { validateDepartment } from '../validators/department.validator';
import { validateParams } from '../validators/validator';
import { AuthGuard } from '../middleware/routeGuard';
import { isAdmin } from '../middleware/guards/role.guard';

const router = express.Router({mergeParams: true});

// Department store
router.post(
	'/', 
	validateDepartment,
	AuthGuard([{
		role: 'admin',
		when: isAdmin
	}]),
	handleDepartmentStore
);

// Department index
router.get('/', handleDepartmentIndex);

// Department show
router.get('/:department', handleDepartmentShow);

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