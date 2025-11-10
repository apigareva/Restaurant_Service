import { useParams } from "react-router";
import { Reviews } from "../components/reviews/reviews";
import { getUsers } from "../redux/entities/users/getUsers";
import { getReviews } from "../redux/entities/reviews/getReviews";
import { useRequest } from "../redux/hooks/useRequest";
import { REQUEST_STATUS } from "../constants/requestStatus";

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    const usersRequestStatus = useRequest(getUsers);
    const reviewsRequestStatus = useRequest(getReviews, restaurantId);

    const isLoading = usersRequestStatus === REQUEST_STATUS.PENDING || reviewsRequestStatus === REQUEST_STATUS.PENDING;
    const isError = usersRequestStatus === REQUEST_STATUS.REJECTED || reviewsRequestStatus === REQUEST_STATUS.REJECTED;
    if (isError) return 'Error';

    return (<Reviews restaurantId={restaurantId} isLoading={isLoading}/>)
}