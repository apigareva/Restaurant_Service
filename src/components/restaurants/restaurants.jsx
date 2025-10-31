import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice.js';
import { RestaurantTab } from '../restaurantTab/restaurantTab.jsx';
import { Outlet } from 'react-router';
import { Cart } from '../cart/cart.jsx';

export const Restaurants = () => {
    const restaurantIds = useSelector(selectRestaurantsIds);   

    return (
        <div>
            {restaurantIds?.map((id) => (
                <RestaurantTab
                    key={id}
                    id={id}
                />
            ))}
            <Outlet />
            <Cart />
        </div>
    )
}