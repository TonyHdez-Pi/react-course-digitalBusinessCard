import React from "react";
import ReactDOM from "react-dom/client";
import { BottomNav, ButtonComponent } from "./components";
import "./App.css";

const image =
	"https://lh3.googleusercontent.com/waVF3xjpSDG9-piDWT9jC1T-Mu2gWvZQ03OdXOnoWugd-dAdgpEcZb2duLqYvEOoFwq7rzPKM2dlqIw9Je7WrKAWHpYPXRnqwDXTPWgVHgkDRantLR8EFQ0oDfC-aB4nVROCmPsxQOTJ0dk6RqH5-L-IGudQ1LxgCYRBIyqRouWMLQj53-q4vXFznppWurY2secBrTeFah1dfYfZEDG_6qAc1Hrf2BTCMuhOov3jLWZZzkjWAvChS7G19lHlO7SXUfSlkIcP-gNNpNBqQLyMoiCwvsTHZZ_wAsoyQ631metPPQ2ANt8Mkf06a-3S9kDVKAluG3-aBZ4Rf4kVx2nNcRyCyi3glmrDyEIDZlEbhc6A0W4VpsIjwiOYhZmu6R0ZX5p3MQPs8lR6SiyAsPYdl-dy6RGzrQ5vCMHBfoj4q4yS3D_NrLdfaI3O7vr5c8LX3TxBaD4ctuz7VW6u5yHDVOBomqu9-TiaohLduiMWX1WHZ6TErmjKV2U-myNDNNaVC2xQN1N_G1Wplw20hII_hvrnhgCftZhOo27gFLqYHHTMlPd4d2lIz5GnkGwSRJjVhy1lRHO5K4vzm8vCx7GI76vKMU5nW6yhZQ-hL0gS_tyhzyOJNCDQ7SbULpUM3F9Kbp9YFY5V1sLJpBHOUd9szE5gHB9kE2PdDg173chuTtY0MbUsWlo37X3KDuQOVE-HsJHTRhaLKG4I13JwSt5MZdNHd548tm0RCMzH0ki5TU8SFDepG3tTYZ3Ex86ExC2EHg68LhuX7_NywDklcAg4csu6ZgmvsuKqKW4E0FLW-z7XJH5-HdtFoWeRYH-YdZZPqBjUmUS3sDm1dOqN00OkNPVwyZ75DH3ADBSnlX8SiLxucyhK7yDWWm71FI0Tr9oH5w1jtyBTXsddilHMCd3O-DaRsUqvO5ftTX8be8fK3T--Xh7DTw=s878-no?authuser=0F";

function App() {
	return (
		<div className="App">
			<section className="cardContainer">
				<div className="imageContainer">
					<img src={image} alt="me" />
				</div>
				<div className="infoContainer">
					<div className="headings">
						<h1>Antonio Hernandez</h1>
						<h3>React Developer</h3>
					</div>
					<div className="buttonContainer">
						<ButtonComponent
							buttonTextColor="black"
							buttonColor={"#D1D5DB"}
							buttonContent="Email"
						/>
						<ButtonComponent
							buttonTextColor="white"
							buttonColor={"#5093E2"}
							buttonContent="LinkedIn"
						/>
					</div>
					<div className="About">
						<div className="textCard">
							<h2>About</h2>
							<p>
								Im a self taught front end developer, i have experience with
								HTML, CSS, Javascrip, recently i've been learning React, and
								React Native
							</p>
						</div>
						<div className="textCard">
							<h2>Interest</h2>
							<p>
								I'm interested in artificial intelligence, software development
								as well as everything related to hardware, i like to understand
								how all this technologies work and i would love to help humanity
								improve its capabilyties with the technology
							</p>
						</div>
					</div>
				</div>
				<BottomNav />
			</section>
		</div>
	);
}

export default App;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<App />
);
