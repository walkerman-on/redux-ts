import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "../../api/fetchPosts"
import { PostState } from "../types"

const initialState: PostState = {
	posts: [],
	loading: false,
	error: null
}

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		deletePost: (state, action: PayloadAction<string>) => {
			state.posts = state.posts.filter((item) => item.id !== action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.loading = false
				state.posts = action.payload
			})
			.addCase(fetchPosts.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loading = false
				// state.error = action.payload
			})
	},
})

export const { deletePost } = postSlice.actions
export default postSlice.reducer