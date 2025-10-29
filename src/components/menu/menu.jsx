import classNames from "classnames";
import { DishListItem } from "../dishListItem/dishListItem"
import styles from './menu.module.css';

export const Menu = ({menu, className}) => {
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