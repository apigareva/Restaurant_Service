import { DishCounter } from "../dishCounter/dishCounter";

export const DishListItem = ({dish}) => {
    return (
        <li>
            <span>{dish.name} - {dish.price}$</span>
            <DishCounter />
        </li>
    )
}