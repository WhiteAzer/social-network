import { AxiosResponse } from 'axios';
import { IUser, IUserInfo } from '@/types/data-types';

export const extractUser = ({ data }: AxiosResponse): IUser => {
	return {
		id: data.user.id,
		firstname: data.user.firstname,
		avatar: data.user.avatar,
		gender: data.user.gender,
		username: data.user.username,
		roles: data.user.roles,
		lastname: data.user.lastname,
	};
};

export const extractInfo = ({ data }: AxiosResponse): IUserInfo => {
	return {
		links: data.user.links,
		status: data.user.status,
		location: data.user.location,
		birthday: data.user.birthday,
		phone: data.user.phone,
		education: data.user.education,
	};
};
