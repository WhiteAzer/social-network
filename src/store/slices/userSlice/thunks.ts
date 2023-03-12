import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/axios';
import { IUser, IUserCredentials, IUserInfo } from '@/types/data-types';
import { extractInfo, extractUser } from '@store/utils';
import { RootState } from '@/store';

export const login = createAsyncThunk('user/login', async (credentials: IUserCredentials) => {
	const user = await api('/auth/login', {
		method: 'POST',
		data: credentials,
	}).then(extractUser);

	return user;
});

export const fetchUserAfterReload = createAsyncThunk('user/fetchUserAfterReload', async () => {
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

		const user = await api(`/user/${id}`, {
			method: 'GET',
		}).then(extractUser);

		console.log('assign fetched user');

		return user;
	}
);

export const fetchInfo = createAsyncThunk(
	'user/fetchInfo',
	async (id: string): Promise<IUserInfo> => {
		const info = await api(`/user/${id}`, {
			method: 'GET',
		}).then(extractInfo);

		return info;
	}
);
