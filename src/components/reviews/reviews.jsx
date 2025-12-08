import { ReviewForm } from "../reviewForm/reviewForm";
import styles from './reviews.module.css';
import classNames from "classnames";
import { useCallback, useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { ReviewListItem } from "../reviewListItem/reviewListItem";
import { Preloader } from "../preloader/preloader";
import { useAddReviewMutation, useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";

export const Reviews = ({restaurantId, className, isLoading = false}) => {
    const {auth} = useContext(AuthContext);
    const {data: reviews} = useGetReviewsByRestaurantIdQuery(restaurantId);

    const [addReview, {isLoading: isAddReviewLoading }] = useAddReviewMutation();
    const handleFormSubmit = useCallback(
        (review) => {
            addReview({restaurantId, review});
        }, [restaurantId, addReview]
    );

    return (
        <div className={classNames(className, styles.root)}>
            <h3>Reviews</h3>
            <ul className={styles.reviews}>
                {reviews?.map(({id, userId, text, rating}) => (
                    <ReviewListItem 
                        className={styles.review}
                        key={id}
                        reviewId={id}
                        userId={userId}
                        text={text}
                        restaurantId={restaurantId}
                        rating={rating}
                    />
                ))}
            </ul>
            {isLoading && <Preloader />}
            {auth.isAuth && <ReviewForm onSubmit={handleFormSubmit} isSubmitBtnDisabled={isAddReviewLoading}/>}
        </div>
    );
}