import { CSSProperties, PropsWithChildren } from 'react';

export type AsyncState = {
	status: 'idle' | 'failed' | 'loading' | 'succeed';
	error: string | null;
};

export type PropsWithoutClassName<P> = P extends { className?: unknown } ? Omit<P, 'className'> : P;

export type PropsWithoutChildren<P> = P extends { children?: unknown } ? Omit<P, 'children'> : P;

export type DefaultProps<P = unknown> = PropsWithoutChildren<PropsWithoutClassName<P>> &
	PropsWithChildren &
	PropsWithClass;

export type SkeletonProps = PropsWithClass & {
	sx?: CSSProperties;
};

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

export interface Avatar {
	id: ID;
	path: string;
}

export interface User {
	id: ID;
	firstname: string;
	lastname: string;
	username: string;
	gender: Gender;
	avatar: ID;
	entries: UserEntries;
	likes: UserEntries;
	friends: ID[];
	following: ID[];
	followers: Follower[];
	notifications: Array<UserNotification>;
}

export interface UserInfo {
	links: UserLinks;
	education: string;
	status: string;
	phone: string;
	birthday: string;
	location: Location;
}

export interface UserLinks {
	instagram: string;
	twitter: string;
	facebook: string;
	site: string;
}

export type UserNotification = Notification & {
	type: NotificationType;
	entry: Pick<Entry, 'type' | 'id'>;
};

export interface UserCredentials {
	email: string;
	password: string;
}

export type Follower = {
	isViewed: boolean;
	id: ID;
};

export type PartialUser = Pick<User, 'avatar' | 'firstname' | 'lastname' | 'id' | 'username'>;

export type EntryType = 'post' | 'photo' | 'comment';

export interface Entry {
	id: ID;
	author: ID;
	likes: number;
	comments: Comment[];
	createdAt: string;
	updatedAt: string;
	type: EntryType;
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

export type Notification = {
	id: ID;
	receiver: ID;
	owner: PartialUser;
	date: string;
	isViewed: boolean;
};

export type NotificationType = 'like' | 'repost' | 'comment';
