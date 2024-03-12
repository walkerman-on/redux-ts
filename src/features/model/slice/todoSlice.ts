import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type {TodoState} from "../types"
import {v4 as uid} from 'uuid';

const initialState: TodoState = {
	todos: [],
}

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: uid(),
				text: action.payload,
				complited: false,
			})
		},
		complitedTodo: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find((item) => item.id === action.payload)
			if (todo) todo.complited = !todo.complited
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload)
		},
	},
})

export const { addTodo, complitedTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer