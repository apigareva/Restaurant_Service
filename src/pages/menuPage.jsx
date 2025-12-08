import { useParams } from "react-router";
import { Menu } from "../components/menu/menu";;
import { useGetDishesByRestaurantIdQuery } from "../redux/services/api";

export const MenuPage = () => {
    const { restaurantId } = useParams();
    const {data, isLoading, isError} = useGetDishesByRestaurantIdQuery(restaurantId);

    if (isError) return null;

    return (
        <Menu restaurantId={restaurantId} isLoading={isLoading}/>
    )
}