import { ReviewForm } from "../reviewForm/reviewForm";
import styles from './reviews.module.css';
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

export const Reviews = ({reviews, className}) => {
    const {auth} = useContext(AuthContext);

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
            {auth.isAuth && <ReviewForm />}
        </div>
    );
}