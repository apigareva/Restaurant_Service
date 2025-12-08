import { useParams } from "react-router";
import { Reviews } from "../components/reviews/reviews";
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../redux/services/api";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    const {data, isLoading, isError} = useGetReviewsByRestaurantIdQuery(restaurantId);
    useGetUsersQuery();

    if (isError) return null;

    return (<Reviews restaurantId={restaurantId} isLoading={isLoading}/>)
}