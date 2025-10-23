import classNames from "classnames";
import { Menu } from "../menu/menu"
import { Reviews } from "../reviews/reviews"
import styles from './restaurant.module.css';

export const Restaurant = ({restaurant, className}) => {
    return (
        <div className={classNames(className, styles.root)}>
            <h2 className={styles.title}>{restaurant.name}</h2>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    )
}