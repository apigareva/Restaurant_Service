import { ACTION_TYPES } from '../../constants/actionTypes';
import { useReducer } from 'react';

const MIN_RATING = 0;
const MAX_RATING = 5;

const INITIAL_STATE = {
    name: "",
    text: "",
    rating: MIN_RATING,
};

const {SET_NAME_REVIEW_FORM, SET_TEXT_REVIEW_FORM, 
    SET_RATING_REVIEW_FORM, CLEAR_REVIEW_FORM } = ACTION_TYPES;

const reducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case SET_NAME_REVIEW_FORM: return {...INITIAL_STATE, name: payload};
        case SET_TEXT_REVIEW_FORM: return {...state, text: payload};
        case SET_RATING_REVIEW_FORM: return {...state, rating: payload};
        case CLEAR_REVIEW_FORM: return {...INITIAL_STATE};
        default: return state;
    }
}

export const useForm = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setName = (name) => dispatch({ type: SET_NAME_REVIEW_FORM, payload: name });
    const setText = (text) => dispatch({ type: SET_TEXT_REVIEW_FORM, payload: text });  
    const incrementRating = () => dispatch({ type: SET_RATING_REVIEW_FORM, payload: Math.min((state.rating + 1), MAX_RATING)});
    const decrementRating = () => dispatch({ type: SET_RATING_REVIEW_FORM, payload: Math.max((state.rating - 1), MIN_RATING)});
    const clearFrom = () => dispatch({type: CLEAR_REVIEW_FORM});

    return {
        state, 
        incrementRating, 
        decrementRating, 
        setName, 
        setText, 
        clearFrom
    }
}
