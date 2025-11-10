import classNames from "classnames";
import styles from './dishListItem.module.css';
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Link } from "react-router";

export const DishListItem = ({id, className}) => {
    const dish = useSelector(state => selectDishById(state, id));
    const {name} = dish || '';

    return (
        <li className={classNames(className, styles.root)}>
            <Link className={styles.name} to={`/dish/${id}`}>{name}</Link>
        </li>
    )
}