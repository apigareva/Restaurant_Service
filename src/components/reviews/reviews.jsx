import { ReviewForm } from "../reviewForm/reviewForm";
import styles from './reviews.module.css';
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { ReviewListItem } from "../reviewListItem/reviewListItem";
import { useSelector } from "react-redux";
import { selectReviewsById } from "../../redux/entities/restaurants/slice";

export const Reviews = ({restaurantId, className, isLoading = false}) => {
    const {auth} = useContext(AuthContext);
    const reviews = useSelector(state => selectReviewsById(state, restaurantId));

    return (
        <div className={classNames(className, styles.root)}>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviews?.map((id) => (
                    <ReviewListItem className={styles.review} key={id} id={id}/>
                ))}
            </ul>
            {isLoading && <div className={styles.isLoading} />}
            {auth.isAuth && <ReviewForm />}
        </div>
    );
}