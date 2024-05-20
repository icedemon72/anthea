import express from 'express';
import { handleDepartmentDelete, handleDepartmentIndex, handleDepartmentStore, handleDepartmentUpdate } from '../controllers/department.controller';

const router = express.Router({mergeParams: true});

router.post('/', handleDepartmentStore);
router.get('/', handleDepartmentIndex);
router.patch('/:department', handleDepartmentUpdate);
router.delete('/:department', handleDepartmentDelete);

export { router as departmentRouter };