import { type PropsWithChildren } from 'react';

export type PropsWithoutClassName<P> = P extends { className?: unknown }
	? Omit<P, 'className'>
	: P;

export type PropsWithoutChildren<P> = P extends { children?: unknown }
	? Omit<P, 'children'>
	: P;

export type DefaultProps<P = unknown> = PropsWithoutChildren<
	PropsWithoutClassName<P>
> &
	PropsWithChildren &
	PropsWithClass;

export type PropsWithSize<S extends Size = Size, T = unknown> = T & { size: S };

export type PropsWithClass<T = unknown> = { className?: string } & T;

export type Size = `size-${Lowercase<'XS' | 'S' | 'M' | 'L'>}`;

export type Theme = 'light' | 'dark';

export type Color = 'primary' | 'secondary';

export type ID = string;

export type Gender = 'male' | 'female';

export interface Location {
	city: string;
	country: string;
	coordinates: {
		x: string;
		y: string;
	};
}

export type Role = 'admin' | 'user';

export interface Content {
	text: string;
	images: ID[];
}

export interface UserEntries {
	posts: ID[];
	comments: ID[];
	photos: ID[];
}

export interface Entry {
	id: ID;
	author: ID;
	likes: number;
	comments: Comment[];
	createdAt: Date;
	updatedAt: Date;
}

export interface User {
	id: ID;
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	gender: Gender;
	avatar: ID;
	location: Location;
	roles: [Role];
	entries: UserEntries;
	likes: UserEntries;
	friends: ID[];
	following: ID[];
	followers: ID[];
	info: UserInfo;
}

export type Post = Entry & {
	content: Content;
};

export type Comment = Entry & {
	source: ID;
	reply: ID;
	content: Content;
};

export type Photo = Entry & {
	path: string;
};

export interface UserInfo {
	links: UserLinks;
	education: string;
	status: string;
	phone: string;
	birthday: Date;
	location: Location;
}

export interface UserLinks {
	instagram: string;
	twitter: string;
	facebook: string;
	site: string;
}

export interface Credentials {
	email: string;
	password: string;
}
