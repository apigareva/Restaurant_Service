import { useSelector } from "react-redux"
import { selectAmountById } from "../../redux/entities/cart/slice";
import { DishCounter } from "../dishCounter/dishCounter";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const CartItem = ({dishId}) => {
    const {data: dish} = useGetDishByIdQuery(dishId);
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