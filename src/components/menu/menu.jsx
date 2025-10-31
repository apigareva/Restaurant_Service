import classNames from "classnames";
import { DishListItem } from "../dishListItem/dishListItem"
import styles from './menu.module.css';
import { useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/restaurants/slice";

export const Menu = ({restaurantId, className}) => {
    const menu = useSelector(state => selectMenuById(state, restaurantId));

    return (
        <div className={classNames(className, styles.root)}>
            <h3>Menu</h3>
            <ul className={styles.menu}>
                {menu?.map((dishId) => (
                    <DishListItem key={dishId} id={dishId} className={styles.dishItem}/>
                ))}
            </ul>
        </div>
    );
}