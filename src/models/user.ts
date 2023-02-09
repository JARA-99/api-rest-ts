import { Schema, Types, model, Model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			default: 'Hola soy un texto por defecto',
		},
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

const UserModel = model('users', UserSchema);

export default UserModel;
