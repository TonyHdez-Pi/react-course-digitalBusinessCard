import React from "react";
import ReactDOM from "react-dom/client";
import { BottomNav, ButtonComponent } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ButtonComponent buttonContent="Compartir" />
			<ButtonComponent buttonContent="Share" />

			{/* <BottomNav /> */}
		</div>
	);
}

export default App;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App />
);
