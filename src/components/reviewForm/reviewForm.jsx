import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import classNames from "classnames";
import styles from './reviewForm.module.css'
import { Button } from "../button/button";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

export const ReviewForm = ({onSubmit, isSubmitBtnDisabled, initialState }) => {
    const {
        className,
        state, 
        incrementRating, 
        decrementRating, 
        setText, 
        clearFrom
    } = useForm(initialState);

    const { text, rating } = state;

    const { auth } = useContext(AuthContext);

    const handleFormSubmit = () => {
        onSubmit({text, rating, userId: auth.userId});
        clearFrom();
    }

    return (
        <form onSubmit={(event) => event.preventDefault()} className={classNames(className, styles.root)}>
            <h3 className={styles.title}>You can add your review</h3>
            <div>
                <label>Text</label>
                <textarea className={styles.text} value={text} onChange={(event) => setText(event.target.value)} />
            </div>
            <div>
                <label>Rating</label>
                <Counter value={rating} increment={incrementRating} decrement={decrementRating} />
            </div>
            <Button 
                title={'Submit'}
                size={400} 
                disabled={isSubmitBtnDisabled}
                onClick={handleFormSubmit}/>
            <Button title={'Clear'} size={400} onClick={clearFrom} />
        </form>
    )
}