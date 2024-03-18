import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Post, ThunkConfig } from "../model/types"

export const fetchPosts = createAsyncThunk<Post[], undefined, ThunkConfig<string>>(
	"posts/fetchPosts",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/posts?_limit=10"
			)

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)