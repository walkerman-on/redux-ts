import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import App from "./App"
import { Provider } from "react-redux"
import {store} from "./features/model/store/store"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)