import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AsyncState, Post, User } from '@/types';
import { handleError } from '@/utils';
import { login, register } from '@store/user/thunks';

type UserState = {
	user: User | null;
	posts: Array<Post> | null;
};

type State = {
	current: UserState & AsyncState;
	authorized: UserState & AsyncState;
};

type Slice = keyof State;

const initialState: State = {
	current: {
		status: 'idle',
		error: null,
		user: null,
		posts: null,
	},
	authorized: {
		status: 'idle',
		error: null,
		user: null,
		posts: null,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(login.pending, (state, action) => {
			state.authorized.status = 'loading';
		});
		builder.addCase(login.fulfilled, (state, action) => {
			const { message, user } = action.payload;
			toast(message);
			state.authorized.status = 'succeed';
			state.authorized.user = user;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			handleError(payload);
			state.authorized.status = 'failed';
		});

		builder.addCase(register.pending, (state, action) => {
			state.authorized.status = 'loading';
		});
		builder.addCase(register.fulfilled, (state, action) => {
			const { message } = action.payload;
			toast(message);
			state.authorized.status = 'succeed';
		});
		builder.addCase(register.rejected, (state, { payload }) => {
			handleError(payload);
			state.authorized.status = 'failed';
		});
	},
});

export default userSlice.reducer;
