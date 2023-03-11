import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsyncState, AsyncStatus } from '@/types/runtime-types';
import { IUser, IUserInfo } from '@/types/data-types';

type FetchedData<D> = AsyncState & {
	data: D;
};

type State = {
	authorized: AsyncState & {
		user: IUser | null;
		extra: null;
	};
	current: AsyncState & {
		user: IUser | null;
		info: IUserInfo | null;
	};
};

const initialState: State = {
	authorized: {
		user: null,
		error: null,
		status: 'idle',
		extra: null,
	},
	current: {
		user: null,
		info: null,
		status: 'idle',
		error: null,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loadUser: {
			reducer: (state, action: PayloadAction<{ slice: keyof State; user: IUser }>) => {
				state[action.payload.slice].user = action.payload.user;
			},
			prepare: (slice: keyof State, { user: data }: any) => {
				return {
					payload: {
						slice,
						user: {
							id: data.id,
							firstname: data.firstname,
							lastname: data.lastname,
							avatar: data.avatar,
							gender: data.gender,
							username: data.username,
							roles: data.roles,
						} as IUser,
					},
				};
			},
		},
		setStatus: (
			state,
			{ payload }: PayloadAction<{ slice: keyof State; status: AsyncStatus }>
		) => {
			state[payload.slice].status = payload.status;
		},
		setError: (state, { payload }: PayloadAction<{ slice: keyof State; error: string }>) => {
			state[payload.slice].error = payload.error;
		},
	},
});

export const { loadUser, setStatus, setError } = userSlice.actions;
export default userSlice.reducer;
