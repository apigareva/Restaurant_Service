import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import styles from './defaultRestaurant.module.css';

export const DefaultRestaurant = ({activeRestaurantId}) => {
    const navigate = useNavigate();
    const restaurant = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => {
            if (!activeRestaurantId) return result.data[0];
            return result?.data?.find((restaurantId) => restaurantId === activeRestaurantId);
        }
    });

    useEffect(() => {
        const restaurantId = restaurant?.id;
        if (!activeRestaurantId && restaurantId) navigate(`${restaurantId}`);
    }, [activeRestaurantId, restaurant, navigate]);

    return (<div className={styles.root}>Please, choose restaurant</div>)
}