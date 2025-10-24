import { useState } from "react"
import { Counter } from "../counter/counter"
import styles from './dishCounter.module.css'

const MIN_DISH_COUNTER = 0;
const MAX_DISH_COUNTER = 5;

export const DishCounter = () => {
    const [value, setValue] = useState(0);

    const increment = () => setValue(Math.min((value + 1), MAX_DISH_COUNTER));
    const decrement = () => setValue(Math.max((value - 1), MIN_DISH_COUNTER));

    return (
        <Counter 
            value={value} 
            increment={increment} 
            decrement={decrement} 
            className={styles.root}
        />
    )
}