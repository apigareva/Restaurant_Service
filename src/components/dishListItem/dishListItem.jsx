import classNames from "classnames";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from './dishListItem.module.css';
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

export const DishListItem = ({dish, className}) => {
    const {auth} = useContext(AuthContext);

    return (
        <li className={classNames(className, styles.root)}>
            <span>{dish.name}</span>
            <span> - </span>
            <span>{dish.price}$</span>
            {auth.isAuth && <DishCounter />}
        </li>
    )
}