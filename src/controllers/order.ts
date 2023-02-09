import { RequestExt } from './../interfaces/req-ext.interface';
import { Response } from 'express';
import { handleHttp } from '../utils/error.handle';

const getItems = (req: RequestExt, res: Response) => {
	try {
		res.send({
			data: 'Esto solo lo ven los usuarios con sesión',
			user: req.user,
		});
	} catch (error) {
		handleHttp(res, 'ERROR_GET_BLOGS');
	}
};

export { getItems };
