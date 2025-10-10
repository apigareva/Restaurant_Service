import { Counter } from "../counter/counter"

export const Dish = ({dish}) => {
    return (
        <div key={dish.id}>
            <li>
                <span>{dish.name} - {dish.price}$</span>
                <Counter />
            </li>
        </div>
    )
}