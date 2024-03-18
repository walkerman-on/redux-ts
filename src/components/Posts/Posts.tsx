import React from "react"
import { Button } from "../ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../features/api/fetchPosts"

const Posts = () => {
	const dispatch = useDispatch()
	const { posts, status, error } = useSelector((state) => state.post)

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
			<span className="titleText">Redux Toolkit Async Thunk</span>
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<Button color="green" onClick={() => dispatch(fetchPosts())}>
					Get Posts
				</Button>
				{status === "loading" && <h1>Загрузка...</h1>}
				{error && <h1>Oops! {error}</h1>}
				{posts?.map((item) => (
					<div
						style={{ display: "flex", justifyContent: "space-between" }}
						key={item.id}
					>
						<span
							style={{
								padding: "5px 8px",
								borderRadius: "3px",
								background: "rgb(113, 155, 167)",
								color: "whitesmoke",
								width: "100%",
							}}
						>
							{item.title}
						</span>
						{/* <Button color="red" onClick={() => dispatch(deletePosts(item.id))}>
							Delete
						</Button> */}
					</div>
				))}
			</div>
		</div>
	)
}

export default Posts