import { useCallback } from "react"
import { Counter } from "../counter/counter"
import { useDispatch, useSelector } from "react-redux";
import { addDishToCart, removeDishFromCart, selectAmountById } from "../../redux/entities/cart/slice";

export const DishCounter = ({dishId}) => {
    const dispatch = useDispatch();
    const value = useSelector((state) => selectAmountById(state, dishId)) || 0;

    const increment = useCallback(() => 
        dispatch(addDishToCart(dishId)), 
    [dishId, dispatch]);
    const decrement = useCallback(() => 
        dispatch(removeDishFromCart(dishId)),
    [dishId, dispatch]);

    return (
        <Counter 
            value={value} 
            increment={increment} 
            decrement={decrement} 
        />
    )
}