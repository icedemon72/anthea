import { Express, NextFunction, Request, Response } from 'express';
import { handleRegister } from './controllers/user.controller';
import { handleLogin, handleLogout } from './controllers/session.controller';
import { classroomRouter } from './routers/classroom.router';
import { departmentRouter } from './routers/department.router';
import { subjectRouter } from './routers/subject.router';
import { postRouter } from './routers/post.router';
import { userRouter } from './routers/user.router';
import { validateUserRegister, validateUserLogin } from './validators/user.validator';
import { validateParams } from './validators/validator';

export default function (app: Express) {
	app.use((err: any, req: Request, res: Response, next: NextFunction) => {
		// @ts-ignore
		if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
			const formattedError = {
				status: 400,
				message: err.message,
			};
			return res.status(400).json(formattedError);
		}
		next();
	});

	app.get('/thanks', async (req: Request, res: Response) => {
		 return res.status(200).send({ message: 'Hvala Vam puno što koristite naše usluge!' });
	});

	// User register
	app.post(
		'/register', 
		validateUserRegister, 
		handleRegister
	);

	// User login
	app.post(
		'/login', 
		validateUserLogin, 
		handleLogin
	);

	// User logout
	app.post('/logout', handleLogout);

	app.use('/classrooms', classroomRouter);
	app.use('/departments', departmentRouter);
	app.use('/subjects', subjectRouter);
	app.use('/classrooms/:classroom', validateParams('classroom'), postRouter);
	app.use('/users', userRouter);

}