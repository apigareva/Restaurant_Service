import { Restaurants } from '../components/restaurants/restaurants.jsx';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants";

export const RestaurantsLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

    return <Restaurants />
}