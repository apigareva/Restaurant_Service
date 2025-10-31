import { useParams } from "react-router"
import { DishContainer } from "../components/dishContainer/dishContainer"

export const DishPage = () => {
    const { dishId } = useParams();
    return <DishContainer dishId={dishId} />
}