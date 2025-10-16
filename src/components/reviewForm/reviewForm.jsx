import { useReducer } from "react";
import { Counter } from "../counter/counter";
import { useForm } from "./useForm";

export const ReviewForm = () => {
    const {
        state, 
        increment_Rating, 
        decrement_Rating, 
        setName, 
        setText, 
        clearFrom
    } = useForm();

    const {name, text, rating} = state;

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <h3>You can add your review</h3>
            <div>
                <label>Name</label>
                <input value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Text</label>
                <input value={text} onChange={(event) => setText(event.target.value)} />
            </div>
            <div>
                <label>Rating</label>
                <Counter value={rating} increment={increment_Rating} decrement={decrement_Rating} />
            </div>
            <button>Add review</button>
            <button onClick={clearFrom}>Clear</button>
        </form>
    )
}