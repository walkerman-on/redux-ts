import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
	posts: [],
}

export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async (_, { rejectwithValue, dispatch }) => {
		const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
		dispatch(setPosts(res.data))
		console.log(res)
	}
)

export const deletePostsById = createAsyncThunk(
	"posts/deletePostsById",
	async (id, { rejectwithValue, dispatch }) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}"`)
		dispatch(deletePosts(id))
	}
)

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload
		},
		deletePosts: (state, action) => {
			state.posts = state.posts.filter((item) => item.id !== action.payload)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getPosts.fulfilled, () =>
			console.log("getPosts: fulfilled")
		)
		builder.addCase(getPosts.pending, () => console.log("getPosts: pending"))
		builder.addCase(getPosts.rejected, () => console.log("getPosts: rejected"))
		// builder.addCase(deletePosts.fulfilled, () =>
		// 	console.log("deletePosts: fulfilled")
		// )
		// builder.addCase(deletePosts.pending, () =>
		// 	console.log("deletePosts: pending")
		// )
		// builder.addCase(deletePosts.rejected, () =>
		// 	console.log("getPosts: rejected")
		// )
	},
})

export const { setPosts, deletePosts } = postSlice.actions
export default postSlice.reducer