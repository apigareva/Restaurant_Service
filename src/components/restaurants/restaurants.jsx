import { useState } from 'react';
import { restaurants } from '../../restaurants_list.js';
import { Restaurant } from '../restaurant/restaurant.jsx';

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);
    const activeRestaurant = restaurants.find(({id}) => id === activeRestaurantId);
    const handleSetActiveRestaurant = (id) => {
        if (id === activeRestaurantId) return;
        setActiveRestaurant(id);
    };
    

    return (
        <div>
            {restaurants?.map(({id, name}) => (
                <button key={id} onClick={() => handleSetActiveRestaurant(id)}>
                    {name}
                </button>
            ))}
            <Restaurant restaurant={activeRestaurant}/>
        </div>
    )
}