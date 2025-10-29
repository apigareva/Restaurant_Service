import { useState } from 'react';
import { Restaurant } from '../restaurant/restaurant.jsx';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice.js';
import { RestaurantTab } from '../restaurantTab/restaurantTab.jsx';
import { Cart } from '../cart/cart.jsx';

export const Restaurants = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurantIds[0]);
    const handleSetActiveRestaurant = (id) => {
        if (id === activeRestaurantId) return;
        setActiveRestaurant(id);
    };
    

    return (
        <div>
            {restaurantIds?.map((id) => (
                <RestaurantTab 
                    key={id}
                    id={id}
                    disabled={id == activeRestaurantId}
                    onClick={() => handleSetActiveRestaurant(id)}
                />
            ))}
            <Restaurant id={activeRestaurantId}/>
            <Cart />
        </div>
    )
}