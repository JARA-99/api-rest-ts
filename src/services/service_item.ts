import { ICar } from './../interfaces/car.interface';
import ItemModel from '../models/item';

const insertCar = async (item: ICar) => {
	const responseItem = await ItemModel.create(item);
	return responseItem;
};

const getCars = async () => {
	const responseItem = await ItemModel.find({});
	return responseItem;
};

const getCar = async (id: string) => {
	const responseItem = await ItemModel.findOne({ _id: id });
	return responseItem;
};

const updateCar = async (id: string, data: ICar) => {
	const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});
	return responseItem;
};

const deleteCar = async (id: string) => {
	const responseItem = await ItemModel.remove({ _id: id });
	return responseItem;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
