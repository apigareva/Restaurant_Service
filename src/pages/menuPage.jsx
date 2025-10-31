import { useParams } from "react-router";
import { Menu } from "../components/menu/menu";

export const MenuPage = () => {
    const { restaurantId } = useParams();
    return (
        <Menu restaurantId={restaurantId}/>
    )
}