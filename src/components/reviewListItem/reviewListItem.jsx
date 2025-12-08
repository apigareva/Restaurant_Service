import { useCallback, useContext, useState } from "react";
import { useGetUsersQuery, useUpdateReviewMutation } from "../../redux/services/api";
import { AuthContext } from "../authContext/authContext";
import { Button } from "../button/button";
import { ReviewForm } from "../reviewForm/reviewForm";

export const ReviewListItem = ({className, userId, text, restaurantId, rating, reviewId}) => {
    const [isEdit, setIsEdit] = useState(false);
    
    const user = useGetUsersQuery(undefined, {
        selectFromResult: result => result?.data?.find((user) => user.id === userId)
    });

    const { auth } = useContext(AuthContext);
    const isActiveUser = userId === auth.userId;

    const [updateReview] = useUpdateReviewMutation();
    const handleUpdateReview = useCallback((review) => {
        updateReview({reviewId, review});
        setIsEdit(false);
    }, [updateReview, reviewId, setIsEdit]);

    if (!user) return null;

    return (
        <div className={className}>
            <li>{user.name}: "{text}", rating: {rating}</li>
            { isActiveUser && <Button title={'Change review'} onClick={() => setIsEdit(!isEdit)}/>}
            {isEdit && <ReviewForm initialState={{text, rating}} onSubmit={handleUpdateReview}/>}
        </div>
    )
}