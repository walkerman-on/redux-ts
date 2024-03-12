// import Posts from "./components/Posts/Posts"
import StateChange from "./components/StateChange/StateChange"
import ToDo from "./components/ToDo/ToDo"
import "./style/App.css"

function App() {
	return (
		<div className="App">
			<StateChange />
			<ToDo />
			{/* <Posts /> */}
		</div>
	)
}

export default App