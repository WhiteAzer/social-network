import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types'
import { login } from './thunks'
import { toast } from 'react-toastify'

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
			if (Array.isArray(payload)) {
				payload.forEach((errorMessage) => {
					toast.error(errorMessage)
				})
			} else if (typeof payload === 'string') {
				toast.error(payload)
			}
			state.isLoading = false
		})
	},
})

export default userSlice.reducer
