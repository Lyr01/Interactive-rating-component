import { useState } from "react";
import iconStar from "../images/icon-star.svg";
import styles from "./RatingComponent.module.css";

interface Prop {
	setFinalRating: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const RatingComponent = ({ setFinalRating }: Prop) => {
	const [rating, setRating] = useState(0);

	const handleRatingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (rating === 0) return;
		e.preventDefault();
		setFinalRating(rating);
	};

	return (
		<div className={styles.ratingBox}>
			<div className={styles.ratingBoxContent}>
				<div className={styles.circleIcon}>
					<img src={iconStar} alt="icon" />
				</div>
				{/* Rating state start */}
				<h1 className={styles.title}>How did we do? </h1>
				<p>
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
				<form onSubmit={(e) => handleRatingSubmit(e)}>
					<div className={styles.ratings}>
						<input
							type="button"
							onClick={() => setRating(1)}
							className={styles.circleRatings}
							value="1"
						/>
						<input
							type="button"
							onClick={() => setRating(2)}
							className={styles.circleRatings}
							value="2"
						/>
						<input
							type="button"
							onClick={() => setRating(3)}
							className={styles.circleRatings}
							value="3"
						/>
						<input
							type="button"
							onClick={() => setRating(4)}
							className={styles.circleRatings}
							value="4"
						/>
						<input
							type="button"
							onClick={() => setRating(5)}
							className={styles.circleRatings}
							value="5"
						/>
					</div>
					<button type="submit" className={styles.submit}>
						Submit
					</button>
				</form>
				{/* Rating state end */}
			</div>
		</div>
	);
};

export default RatingComponent;
