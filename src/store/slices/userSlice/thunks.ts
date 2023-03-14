import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/axios';
import { IUser, IUserCredentials, IUserInfo } from '@/types/data-types';
import { extractInfo, extractUser } from '@store/utils';
import { RootState } from '@/store';

export const loginByCredentials = createAsyncThunk(
	'user/loginByCredentials',
	async (credentials: IUserCredentials) => {
		const user = await api('/auth/login', {
			method: 'POST',
			data: credentials,
		}).then(extractUser);

		return user;
	}
);

export const loginByCookies = createAsyncThunk('user/loginByCookies', async () => {
	const user = await api('/auth/loginJWT', {
		method: 'POST',
	}).then(extractUser);

	return user;
});

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (id: string, { getState }): Promise<IUser> => {
		const authorized = (getState() as RootState).user.authorized.user;

		if (id === authorized.id) {
			console.log('assign authed user');
			return authorized;
		}

		return await api(`/user/${id}`, {
			method: 'GET',
		}).then(extractUser);
	}
);

export const fetchInfo = createAsyncThunk(
	'user/fetchInfo',
	async (id: string, { getState }): Promise<IUserInfo> => {
		const current = (getState() as RootState).user.current;

		if (id === current.user.data?.id && current.info.data) {
			console.log('assign current info');
			return current.info.data;
		}

		return await api(`/user/${id}`, {
			method: 'GET',
		}).then(extractInfo);
	}
);
