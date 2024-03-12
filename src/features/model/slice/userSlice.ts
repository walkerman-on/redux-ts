import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../types"

const initialState: User  = {
    firstName: "",
    lastName: ""
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getFirstName: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload
		},
		getLastName: (state, action: PayloadAction<string>) => {
			state.lastName = action.payload
		},
	},
})

export const { getFirstName, getLastName } = userSlice.actions
export default userSlice.reducer