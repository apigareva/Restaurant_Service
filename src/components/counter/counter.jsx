import { useState } from "react"

export const Counter = () => {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {
        if (value > 0) setValue(value - 1);
    }

    
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}