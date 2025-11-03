import { useParams } from "react-router";
import { DefaultRestaurant } from "../components/defaultRestaurant/defaultRestaurant";

export const RestaurantsPage = () => {
    const {restaurantId: activeRestaurantId = ''} = useParams();

    return (
        <DefaultRestaurant activeRestaurantId={activeRestaurantId} />
    )
}