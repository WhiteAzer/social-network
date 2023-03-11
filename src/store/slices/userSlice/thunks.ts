import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/axios';
import { IUser, IUserCredentials, IUserInfo } from '@/types/data-types';
import { extractInfo, extractUser } from '@store/utils';
import { RootState } from '@/store';
import { info as datainfo, user as datauser } from '@/data';

export const login = createAsyncThunk('user/login', async (credentials: IUserCredentials) => {
	const user = await api('/auth/login', {
		method: 'POST',
		data: credentials,
	}).then(extractUser);

	return datauser;
});

export const fetchUserAfterReload = createAsyncThunk('user/fetchUserAfterReload', async () => {
	const user = await api('/auth/loginJWT', {
		method: 'POST',
	}).then(extractUser);

	return datauser;
});

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async (id: string, { getState }): Promise<IUser> => {
		const authorized = (getState() as RootState).user.authorized.user;

		if (id === authorized.id) return authorized;

		const user = await api(`/user/${id}`, {
			method: 'GET',
		}).then(extractUser);

		return datauser;
	}
);

export const fetchInfo = createAsyncThunk(
	'user/fetchInfo',
	async (id: string): Promise<IUserInfo> => {
		const info = await api(`/user/${id}`, {
			method: 'GET',
		}).then(extractInfo);

		return datainfo;
	}
);
