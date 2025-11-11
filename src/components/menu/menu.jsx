import classNames from "classnames";
import { DishListItem } from "../dishListItem/dishListItem"
import styles from './menu.module.css';
import { useSelector } from "react-redux";
import { selectMenuById } from "../../redux/entities/restaurants/slice";
import { Preloader } from "../preloader/preloader";

export const Menu = ({restaurantId, className, isLoading = false}) => {
    const menu = useSelector(state => selectMenuById(state, restaurantId));

    return (
        <div className={classNames(className, styles.root)}>
            <h3>Menu</h3>
            <ul className={styles.menu}>
                {menu?.map((dishId) => (
                    <DishListItem key={dishId} id={dishId} className={styles.dishItem}/>
                ))}
            </ul>
            {isLoading && <Preloader />}
        </div>
    );
}