import classNames from "classnames";
import styles from './dishListItem.module.css';
import { Link } from "react-router";

export const DishListItem = ({id, className, name=''}) => {
    return (
        <li className={classNames(className, styles.root)}>
            <Link className={styles.name} to={`/dish/${id}`}>{name}</Link>
        </li>
    )
}