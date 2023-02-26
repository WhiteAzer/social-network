import { createAsyncThunk } from '@reduxjs/toolkit';
import { Credentials } from '../../types';
import { serverAPI } from '../../axios/customAxios';

export const login = createAsyncThunk('auth/login', async (credentials: Credentials, thunkAPI) => {
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
