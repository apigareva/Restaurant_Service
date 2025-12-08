import { useParams } from "react-router"
import { Restaurant } from "../components/restaurant/restaurant"
import { useGetRestaurantByIdQuery } from "../redux/services/api";
import { Preloader } from "../components/preloader/preloader";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();
    const {isLoading, isError} = useGetRestaurantByIdQuery(restaurantId);

    if (isError) return null;
    if (isLoading) return <Preloader />

    return <Restaurant id={restaurantId}/>
}