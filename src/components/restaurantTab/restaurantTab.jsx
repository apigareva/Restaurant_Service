import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { TabButton } from "../tabButton/tabButton";

export const RestaurantTab = ({id, disabled, onClick}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    if (!restaurant) return null;

    return (
        <TabButton
            title ={restaurant.name}              
            disabled={disabled}
            onClick={onClick}/>
    )
}