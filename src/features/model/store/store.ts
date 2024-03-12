import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slice/userSlice"
import todoReducer from "../slice/todoSlice"
// import postReducer from "../model/slice/postSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		todo: todoReducer,
		// post: postReducer,
	},
})

