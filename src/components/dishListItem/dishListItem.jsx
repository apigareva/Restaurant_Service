import { Counter } from "../counter/counter"

export const DishListItem = ({dish}) => {
    return (
        <li>
            <span>{dish.name} - {dish.price}$</span>
            <Counter />
        </li>
    )
}