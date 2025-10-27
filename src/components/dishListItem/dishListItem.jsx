import classNames from "classnames";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from './dishListItem.module.css';
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const DishListItem = ({id, className}) => {
    const {auth} = useContext(AuthContext);
    const dish = useSelector(state => selectDishById(state, id));
    const {name, price} = dish;

    return (
        <li className={classNames(className, styles.root)}>
            <span>{name}</span>
            <span> - </span>
            <span>{price}$</span>
            {auth.isAuth && <DishCounter />}
        </li>
    )
}