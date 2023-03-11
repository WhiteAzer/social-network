export type TID = string;
export type TGender = 'male' | 'female';
export type TRole = 'admin' | 'user';
export type TEntryType = 'post' | 'photo' | 'comment';
export type TNotificationType = 'like' | 'repost' | 'comment';

export interface ILocation {
	city: string;
	country: string;
	coordinates: {
		x: string;
		y: string;
	};
}

export interface IContent {
	text: string;
	images: TID[];
}

export type TAvatar = Pick<IPhoto, 'path' | 'id'>;

export interface IUser {
	id: TID;
	firstname: string;
	lastname: string;
	username: string;
	gender: TGender;
	avatar: TAvatar;
	roles: Array<TRole>;
}

export interface IUserInfo {
	links: IUserLinks;
	education: string;
	status: string;
	phone: string;
	birthday: string;
	location: ILocation;
}

export interface IUserLinks {
	instagram: string;
	twitter: string;
	facebook: string;
	site: string;
}

export interface IUserNotification extends INotification {
	type: TNotificationType;
	entry: Pick<IEntry, 'type' | 'id'>;
}

export interface IUserCredentials {
	email: string;
	password: string;
}

export interface IFollower {
	isViewed: boolean;
	follower: IUser;
}

export interface IEntry {
	id: TID;
	author: IUser;
	likes: number;
	comments: Array<IComment>;
	createdAt: string;
	updatedAt: string;
	type: TEntryType;
}

export interface IPost extends IEntry {
	content: IContent;
}

export interface IComment extends IEntry {
	source: TID;
	reply: TID | null;
	content: IContent;
}

export interface IPhoto extends IEntry {
	path: string;
}

export interface INotification {
	id: TID;
	receiver: TID;
	owner: IUser;
	date: string;
	isViewed: boolean;
}
