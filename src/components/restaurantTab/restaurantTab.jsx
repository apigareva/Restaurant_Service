import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { TabLink } from "../tabLink/tabLink";

export const RestaurantTab = ({id}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    if (!restaurant) return null;

    return (
        <TabLink pathname={`${id}`} 
            title={restaurant.name}
            size={500}
            />
    )
}