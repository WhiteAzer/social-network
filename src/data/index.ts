import { IUser, IUserInfo } from '@/types/data-types';
import image from '@assets/default-image-blue.png';

export const info: IUserInfo = {
	links: {
		instagram: 'https://www.instagram.com/',
		twitter: 'https://twitter.com/',
		facebook: 'https://www.facebook.com/',
		site: 'https://www.example.com/',
	},
	education: 'Master of Computer Science',
	status: 'Single',
	phone: '1234567890',
	birthday: '1990-01-01',
	location: {
		city: 'New York',
		country: 'United States',
		coordinates: {
			x: '40.7128',
			y: '-74.0060',
		},
	},
};

export const user: IUser = {
	id: '640c3a90a7089fd82b3de74b',
	firstname: 'John',
	lastname: 'Doe',
	username: '@johndoe',
	gender: 'male',
	avatar: {
		id: '456',
		path: image,
	},
	roles: ['user'],
};
