import classNames from "classnames";
import { DishListItem } from "../dishListItem/dishListItem"
import styles from './menu.module.css';
import { Preloader } from "../preloader/preloader";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const Menu = ({restaurantId, className, isLoading = false}) => {
    const {data: menu} = useGetDishesByRestaurantIdQuery(restaurantId);

    return (
        <div className={classNames(className, styles.root)}>
            <h3>Menu</h3>
            <ul className={styles.menu}>
                {menu?.map(({id: dishId, name}) => (
                    <DishListItem key={dishId} id={dishId} name={name} className={styles.dishItem}/>
                ))}
            </ul>
            {isLoading && <Preloader />}
        </div>
    );
}