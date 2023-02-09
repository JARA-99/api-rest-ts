import { hash, compare } from 'bcryptjs';

const encrypt = async (pass: string) => {
	const passHash = await hash(pass, 8);
	return passHash;
};

const verified = async (pass: string, passHash: string) => {
	const isCorret = await compare(pass, passHash);
	return isCorret;
};

export { encrypt, verified };
