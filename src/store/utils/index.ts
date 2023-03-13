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
		links: data.user.info.links,
		status: data.user.info.status,
		location: data.user.info.location,
		birthday: data.user.info.birthday,
		phone: data.user.info.phone,
		education: data.user.info.education,
	};
};
