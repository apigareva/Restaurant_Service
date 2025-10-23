import { ReviewForm } from "../reviewForm/reviewForm";
import styles from './reviews.module.css';
import classNames from "classnames";

export const Reviews = ({reviews, className}) => {
    return (
        <div className={classNames(className, styles.root)}>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviews?.map(({id, user, text}) => (
                    <div className={styles.review} key={id}>
                        <li>{user}: "{text}"</li>
                    </div>
                ))}
            </ul>
            <ReviewForm className={styles.form}/>
        </div>
    );
}