import { useSelector } from "react-redux"
import { selectAmountById } from "../../redux/entities/cart/slice";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../dishCounter/dishCounter";

export const CartItem = ({dishId}) => {
    const dish = useSelector(state => selectDishById(state, dishId));
    const amount = useSelector(state => selectAmountById(state, dishId));

    return (
        <div>
            <span>{dish.name}</span>
            <span> - </span>
            <span>{amount}</span>
            <DishCounter dishId={dishId}/>
        </div>
    )
}