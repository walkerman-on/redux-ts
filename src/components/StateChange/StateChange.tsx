import React, {ChangeEvent} from "react"
import { Input } from "../ui/Input/Input"
import { useAppDispatch, useAppSelector } from "../../features/model/types"
import { getFirstName, getLastName } from "../../features/model/slice/userSlice"

const StateChange = () => {
	const dispatch = useAppDispatch()
	const firstName = useAppSelector((state) => state.user.firstName)
	const lastName = useAppSelector((state) => state.user.lastName)

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<span className="titleText">Redux Toolkit State Change</span>
			<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
				<Input
					placeholder="First Name"
					onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(getFirstName(e.target.value))}
				/>
				<Input
					placeholder="Last Name"
					onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(getLastName(e.target.value))}
				/>
			</div>
			<p style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
				<span className="firstText">
					First Name: <span className="secondText">{firstName}</span>
				</span>
				<span className="firstText">
					Last Name: <span className="secondText">{lastName}</span>
				</span>
			</p>
		</div>
	)
}

export default StateChange