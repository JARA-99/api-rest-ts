import { Response } from 'express';
import dbConnect from '../config/mongo';
import { RequestExt } from '../interfaces/req-ext.interface';
import { IStorage } from '../interfaces/storage.interface';
import { registerUpload } from '../services/service_storage';
import { handleHttp } from '../utils/error.handle';

const getFile = async (req: RequestExt, res: Response) => {
	try {
		const { user, file } = req;
		const dataToRegister: IStorage = {
			fileName: `${file?.filename}`,
			idUser: `${user?.id}`,
			path: `${file?.path}`,
		};
		const response = await registerUpload(dataToRegister);
		res.send(response);
	} catch (e) {
		handleHttp(res, 'ERROR_GET_BLOG');
	}
};

export { getFile };
