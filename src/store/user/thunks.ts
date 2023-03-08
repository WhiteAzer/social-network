import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverAPI } from '@/axios/customAxios';
import { Credentials } from '@/types';
import { user } from '@/data';

export const login = createAsyncThunk('auth/login', async (credentials: Credentials, thunkAPI) => {
	return { message: 'get', user };
	try {
		const resp = await serverAPI('/auth/login', {
			method: 'post',
			data: credentials,
		});
		return resp.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.response.data.message);
	}
});

export const register = createAsyncThunk(
	'auth/register',
	async (credentials: Credentials, thunkAPI) => {
		try {
			const resp = await serverAPI('/auth/register', {
				method: 'post',
				data: credentials,
			});
			return resp.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
