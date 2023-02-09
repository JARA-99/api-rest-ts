import { ICar } from './../interfaces/car.interface';
import { Schema, Types, model, Model } from 'mongoose';

const ItemSchema = new Schema<ICar>(
	{
		name: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		gas: {
			type: String,
			enum: ['gasoline', 'electric', 'hybrid'],
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

const ItemModel = model('items', ItemSchema);

export default ItemModel;
