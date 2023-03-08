import { Photo, Post, User, UserNotification, Notification, Comment } from '@/types';
export const notification: UserNotification = {
	id: 'un0001',
	receiver: 'u0002',
	owner: {
		id: 'u0001',
		firstname: 'John',
		lastname: 'Doe',
		avatar: 'p0001',
		username: '@johndoe',
	},
	isViewed: true,
	date: new Date().toString(),
	type: 'like',
	entry: {
		id: 'p0002',
		type: 'comment',
	},
};

export const photo: Photo = {
	id: '1',
	author: '2',
	likes: 5,
	comments: [],
	createdAt: new Date().toString(),
	updatedAt: new Date().toString(),
	type: 'photo',
	path: '/path/to/photo',
};

export const comment: Comment = {
	id: '2',
	author: '3',
	likes: 2,
	comments: [],
	createdAt: new Date().toString(),
	updatedAt: new Date().toString(),
	type: 'comment',
	source: '4',
	reply: '5',
	content: {
		text: 'This is a comment',
		images: [],
	},
};

export const post: Post = {
	id: '3',
	author: '1',
	likes: 10,
	comments: [],
	createdAt: new Date().toString(),
	updatedAt: new Date().toString(),
	type: 'post',
	content: {
		text: 'This is a post',
		images: [],
	},
};

export const user: User = {
	id: '12345',
	firstname: 'Alicia',
	lastname: 'Newman',
	username: '@alicianewman',
	email: 'alicianewman@example.com',
	gender: 'male',
	avatar: '67890',
	location: {
		city: 'New York',
		country: 'USA',
		coordinates: {
			x: '40.7128',
			y: '-74.0060',
		},
	},
	roles: ['user'],
	entries: {
		posts: ['123', '456'],
		comments: ['789', '012'],
		photos: ['345', '678'],
	},
	likes: {
		posts: ['456', '789'],
		comments: ['123', '345'],
		photos: ['012', '678'],
	},
	friends: ['234', '567', '890'],
	following: ['234', '567'],
	followers: [{ id: '12', isViewed: false }],
	info: {
		links: {
			instagram: 'https://www.instagram.com/alicianewman/',
			twitter: 'https://twitter.com/alicianewman/',
			facebook: 'https://www.facebook.com/alicianewman/',
			site: 'https://www.alicianewman.com/',
		},
		education: 'Harvard University',
		status: 'Single',
		phone: '555-1234',
		birthday: new Date('1990-01-01').toString(),
		location: {
			city: 'New York',
			country: 'USA',
			coordinates: {
				x: '40.7128',
				y: '-74.0060',
			},
		},
	},
	notifications: [notification],
};
