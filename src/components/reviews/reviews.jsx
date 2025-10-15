import { ReviewForm } from "../reviewForm/reviewForm";

export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews?.map(({id, user, text}) => (
                    <div key={id}>
                        <li>{user}: "{text}"</li>
                    </div>
                ))}
            </ul>
            <ReviewForm />
        </div>
    );
}