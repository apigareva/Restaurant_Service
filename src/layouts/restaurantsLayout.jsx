import { Restaurants } from '../components/restaurants/restaurants.jsx';
import { useGetRestaurantsQuery } from '../redux/services/api.js';
import { Preloader } from '../components/preloader/preloader.jsx';

export const RestaurantsLayout = () => {
    const { data, isLoading, isError } = useGetRestaurantsQuery();

    if (isLoading) {
        return <Preloader />
    }

    if (isError) {
        return null;
    }

    return <Restaurants restaurants={data}/>
}