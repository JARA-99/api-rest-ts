import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext.interface';
import { verifyToken } from '../utils/jwt.handle';

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const jwtByUser = req.headers.authorization || '';
		const jwt = jwtByUser.split(' ').pop();
		const isUser = verifyToken(`${jwt}`) as { id: string };
		console.log(isUser);
		if (!isUser) {
			res.status(401).send('SESSION_INVALID');
		} else {
			req.user = isUser;
			next();
		}
	} catch (error) {
		console.log(error);
		res.status(400);
		res.send('SESSION_NOT_VALID');
	}
};

export { checkJwt };
