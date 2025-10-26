import classNames from "classnames";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from './dishListItem.module.css';

export const DishListItem = ({dish, className}) => {
    return (
        <li className={classNames(className, styles.root)}>
            <span>{dish.name}</span>
            <span> - </span>
            <span>{dish.price}$</span>
            <DishCounter />
        </li>
    )
}