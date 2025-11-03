import { DishCounter } from "../dishCounter/dishCounter";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import styles from './dishContainer.module.css';

export const DishContainer = ({dishId}) => {
    const {auth} = useContext(AuthContext);
    const dish = useSelector(state => selectDishById(state, dishId));
    const {name, price} = dish || {};

    return <div className={styles.root}>        
            <span>{name}</span>
            <span> - </span>
            <span>{price}$</span>
            {auth.isAuth && <DishCounter dishId={dishId}/>}
        </div>
}