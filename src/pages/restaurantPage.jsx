import { useParams } from "react-router"
import { Restaurant } from "../components/restaurant/restaurant"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurant } from "../redux/entities/restaurants/getRestaurant";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!!restaurantId) {
            dispatch(getRestaurant(restaurantId));
        }
    },[restaurantId, dispatch]);

    return <Restaurant id={restaurantId}/>
}