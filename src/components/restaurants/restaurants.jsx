import { useState } from 'react';
import { restaurants } from '../../constants/restaurants_list.js';
import { Restaurant } from '../restaurant/restaurant.jsx';
import { TabButton } from '../tabButton/tabButton.jsx';

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
                <TabButton key={id} 
                    title ={name} 
                    onClick={() => handleSetActiveRestaurant(id)} 
                    disabled={id == activeRestaurantId}/>
            ))}
            <Restaurant restaurant={activeRestaurant}/>
        </div>
    )
}