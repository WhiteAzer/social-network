import { IUserCredentials } from '@/types/data-types';
import { api } from '@/axios';
import { loadUser, setError, setStatus } from '@store/slices/userSlice/index';
import { DefaultThunkAction } from '@/types/runtime-types';

export const login = (credentials: IUserCredentials): DefaultThunkAction => {
	return async (dispatch, getState) => {
		dispatch(setStatus({ slice: 'authorized', status: 'loading' }));
		try {
			const response = await api('/auth/login', {
				method: 'POST',
				data: credentials,
			});
			dispatch(loadUser('authorized', response.data));
			dispatch(setStatus({ slice: 'authorized', status: 'succeed' }));
		} catch (error: any) {
			dispatch(setStatus({ slice: 'authorized', status: 'failed' }));
			dispatch(setError({ slice: 'authorized', error: error.message || String(error) }));
		}
	};
};

export const fetchOnReload = (): DefaultThunkAction => {
	return async (dispatch, getState) => {
		dispatch(setStatus({ slice: 'authorized', status: 'loading' }));
		try {
			const response = await api('/auth/loginJWT', {
				method: 'POST',
			});

			dispatch(loadUser('authorized', response.data));
			dispatch(setStatus({ slice: 'authorized', status: 'succeed' }));
		} catch (error: any) {
			dispatch(setStatus({ slice: 'authorized', status: 'failed' }));
			dispatch(setError({ slice: 'authorized', error: error.message || String(error) }));
		}
	};
};
