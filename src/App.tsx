import { useState } from "react";
import "./App.css";
import FinalState from "./components/FinalState";
import RatingComponent from "./components/RatingComponent";

function App() {
	const [finalRating, setFinalRating] = useState<number | undefined>();

	return (
		<div className="App">
			{finalRating === undefined ? (
				<RatingComponent setFinalRating={setFinalRating} />
			) : (
				<FinalState finalRating={finalRating} />
			)}

			<div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="https://lyr01.github.io">Khan Hamza</a>.
			</div>
		</div>
	);
}

export default App;
