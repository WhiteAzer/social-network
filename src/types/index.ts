import { PropsWithChildren } from 'react';

export type PropsWithoutClassName<P> = P extends { className?: unknown } ? Omit<P, 'className'> : P;

export type PropsWithoutChildren<P> = P extends { children?: unknown } ? Omit<P, 'children'> : P;

export type DefaultProps<P = unknown> = PropsWithoutChildren<PropsWithoutClassName<P>> &
	PropsWithChildren &
	PropsWithClass;

export type PropsWithSize<S extends Size = Size, T = unknown> = T & { size: S };

export type PropsWithClass<T = unknown> = { className?: string } & T;

export type Size = `size-${Lowercase<'XS' | 'S' | 'M' | 'L'>}`;

export type Theme = 'light' | 'dark';

export type Color = 'primary' | 'secondary';

export type ID = string;

export type Gender = 'male' | 'female';

export type Location = {
	city: string;
	country: string;
	coordinates: {
		x: string;
		y: string;
	};
};

export type Role = 'admin' | 'user';

export type Content = {
	text: string;
	images: Array<ID>;
};

export type UserEntries = {
	posts: Array<ID>;
	comments: Array<ID>;
	photos: Array<ID>;
};

export type Entry = {
	id: ID;
	author: ID;
	likes: number;
	comments: Array<Comment>;
	createdAt: Date;
	updatedAt: Date;
};

export type User = {
	id: ID;
	firstname: string;
	lastname: string;
	username: string;
	birthdate: Date;
	gender: Gender;
	avatar: ID;
	location: Location;
	phone: string;
	role: Role;
	entries: UserEntries;
	likes: UserEntries;
	friends: Array<ID>;
	following: Array<ID>;
	followers: Array<ID>;
};

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
