import { Counter } from "../counter/counter"

export const DishListItem = ({dish}) => {
    return (
        <li key={dish.id}>
            <span>{dish.name} - {dish.price}$</span>
            <Counter />
        </li>
    )
}