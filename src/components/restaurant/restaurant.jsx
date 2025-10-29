import classNames from "classnames";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Menu } from "../menu/menu"
import { Reviews } from "../reviews/reviews"
import styles from './restaurant.module.css';

export const Restaurant = ({id, className}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));
    const {name, menu, reviews} = restaurant;

    return (
        <div className={classNames(className, styles.root)}>
            <h2 className={styles.title}>{name}</h2>
            <Menu menu={menu}/>
            <Reviews reviews={reviews}/>
        </div>
    )
}