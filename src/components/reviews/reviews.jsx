import { ReviewForm } from "../reviewForm/reviewForm";
import styles from './reviews.module.css';
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { ReviewListItem } from "../reviewListItem/reviewListItem";

export const Reviews = ({reviews, className}) => {
    const {auth} = useContext(AuthContext);

    return (
        <div className={classNames(className, styles.root)}>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviews?.map((id) => (
                    <ReviewListItem className={styles.review} key={id} id={id}/>
                ))}
            </ul>
            {auth.isAuth && <ReviewForm />}
        </div>
    );
}