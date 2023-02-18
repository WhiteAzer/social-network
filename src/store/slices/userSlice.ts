import { createSlice } from '@reduxjs/toolkit';

type UserState = {
	user: any;
};

const initialState: UserState = {
	user: undefined,
};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
