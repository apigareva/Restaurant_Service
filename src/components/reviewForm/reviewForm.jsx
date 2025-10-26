import { useReducer } from "react";
import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import classNames from "classnames";
import styles from './reviewForm.module.css'

export const ReviewForm = () => {
    const {
        className,
        state, 
        incrementRating, 
        decrementRating, 
        setName, 
        setText, 
        clearFrom
    } = useForm();

    const {name, text, rating} = state;

    return (
        <form onSubmit={(event) => event.preventDefault()} className={classNames(className, styles.root)}>
            <h3 className={styles.title}>You can add your review</h3>
            <div>
                <label>Name</label>
                <input className={styles.name} value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label>Text</label>
                <textarea className={styles.text} value={text} onChange={(event) => setText(event.target.value)} />
            </div>
            <div>
                <label>Rating</label>
                <Counter value={rating} increment={incrementRating} decrement={decrementRating} />
            </div>
            <button className={styles.addBtn}>Add review</button>
            <button className={styles.clearBtn} onClick={clearFrom}>Clear</button>
        </form>
    )
}