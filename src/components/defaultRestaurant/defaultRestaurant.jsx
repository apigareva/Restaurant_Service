import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const DefaultRestaurant = ({activeRestaurantId}) => {
    const restaurantIds = useSelector(selectRestaurantsIds); 
    const navigate = useNavigate();

    useEffect(() => {
        const restaurantId = restaurantIds[0];
        if (!activeRestaurantId) navigate(`${restaurantId}`);
    }, [restaurantIds, activeRestaurantId, navigate]);

    return (<div>Please, choose restaurant</div>)
}