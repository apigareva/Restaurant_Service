import { useParams } from "react-router";
import { Reviews } from "../components/reviews/reviews"

export const ReviewsPage = () => {
    const { restaurantId } = useParams();

    return (<Reviews restaurantId={restaurantId} />)
}