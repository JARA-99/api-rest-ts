type gasType = 'gasoline' | 'electric' | 'hybrid';

export interface ICar {
	name: string;
	color: string;
	gas: gasType;
	year: number;
	description: string;
	price: number;
}
