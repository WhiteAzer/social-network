import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AsyncState, User, UserNotification } from '@/types';
import { handleError } from '@/utils';
import { login, register } from '@store/user/thunks';

type UserState = AsyncState & {
	user: User | null;
	notifications: Array<UserNotification> | null;
};

type State = {
	current: UserState;
	authorized: UserState;
};

const initialState: State = {
	current: {
		status: 'idle',
		error: null,
		user: null,
		notifications: null,
	},
	authorized: {
		status: 'idle',
		error: null,
		user: null,
		notifications: null,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loadUser: (state, action: PayloadAction<{ slice: keyof Slice; user: User }>) => {},
	},
});

export default userSlice.reducer;
