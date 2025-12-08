import { RestaurantTab } from '../restaurantTab/restaurantTab.jsx';
import { Outlet } from 'react-router';
import { Cart } from '../cart/cart.jsx';

export const Restaurants = ({restaurants}) => {
    return (
        <div>
            {restaurants?.map(({name, id}) => (
                <RestaurantTab
                    key={id}
                    id={id}
                    name={name}
                />
            ))}
            <Outlet />
            <Cart />
        </div>
    )
}