import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { selectUserById } from "../../redux/entities/users/slice";

export const ReviewListItem = ({className, id}) => {
    const review = useSelector(state => selectReviewById(state, id));
    const { userId, text } = review;
    const user = useSelector(state => selectUserById(state, userId));

    return (
        <div className={className}>
            <li>{user.name}: "{text}"</li>
        </div>
    )
}