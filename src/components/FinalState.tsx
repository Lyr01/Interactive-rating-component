import illustration from "../images/illustration-thank-you.svg";
import styles from "./RatingComponent.module.css";

interface Prop {
	finalRating: number;
}

const FinalState = ({ finalRating }: Prop) => {
	return (
		<div className={styles.ratingBox}>
			<div className={styles.ThankYouBox}>
				<div className={styles.illustration}>
					<img src={illustration} alt="illustration-thank-you" />
				</div>
				<div className={styles.selectedRating}>
					<span>You selected {finalRating} out of 5</span>
				</div>
				<h1 className={styles.thankYou}>Thank you!</h1>
				<p className={styles.finalParagraph}>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</div>
		</div>
	);
};

export default FinalState;
