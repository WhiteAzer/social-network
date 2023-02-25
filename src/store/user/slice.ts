import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types'
import { login, register } from './thunks'
import { toast } from 'react-toastify'
import { handleError } from '../../utils'

type UserState = {
	user: User
	isLoading: boolean
}

const initialState: UserState = {
	user: undefined,
	isLoading: false,
}
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(login.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(login.fulfilled, (state, action) => {
			const { message, user } = action.payload
			toast(message)
			state.isLoading = false
			state.user = user
		})
		builder.addCase(login.rejected, (state, { payload }) => {
			handleError(payload)
			state.isLoading = false
		})

		builder.addCase(register.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(register.fulfilled, (state, action) => {
			const { message } = action.payload
			toast(message)
			state.isLoading = false
		})
		builder.addCase(register.rejected, (state, { payload }) => {
			handleError(payload)
			state.isLoading = false
		})
	},
})

export default userSlice.reducer
