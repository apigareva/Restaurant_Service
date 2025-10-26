import { useCallback, useState } from "react"
import { Counter } from "../counter/counter"

const MIN_DISH_COUNTER = 0;
const MAX_DISH_COUNTER = 5;

export const DishCounter = () => {
    const [value, setValue] = useState(0);

    const increment = useCallback(() => 
        setValue(prevValue => Math.min((prevValue + 1), MAX_DISH_COUNTER)), []);
    const decrement = useCallback(() => 
        setValue(prevValue => Math.max((prevValue - 1), MIN_DISH_COUNTER)), []);

    return (
        <Counter 
            value={value} 
            increment={increment} 
            decrement={decrement} 
        />
    )
}