import React, { useState, ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../features/model/types"
import {
	addTodo,
	complitedTodo,
	deleteTodo,
} from "../../features/model/slice/todoSlice"
import { Button } from "../ui/Button/Button"
import { Input } from "../ui/Input/Input"



const ToDo = () => {
	const dispatch = useAppDispatch()
	const todos = useAppSelector((state) => state.todo.todos)

	const [inputValue, setInputValue] = useState("")

	const addTodoHandler = () => {
		dispatch(addTodo(inputValue))
		setInputValue("")
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<span className="titleText">Redux Toolkit ToDo App</span>
			<div style={{ display: "flex" }}>
				<Input
					placeholder="Type something..."
					value={inputValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
				/>
				<Button onClick={() => addTodoHandler()}>+</Button>
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				{todos?.map((item) => (
					<div
						style={{ display: "flex", justifyContent: "space-between" }}
						key={item.id}
					>
						<Button color="green" onClick={() => dispatch(complitedTodo(item.id))}>
							Done!
						</Button>
						<span className={`${item.complited ? "complTrue" : ""}`}>
							{item.text}
						</span>
						<Button color="red" onClick={() => dispatch(deleteTodo(item.id))}>
							Delete
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ToDo