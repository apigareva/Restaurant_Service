import classNames from "classnames";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import styles from './restaurant.module.css';
import { TabLink } from "../tabLink/tabLink";
import { Outlet } from "react-router";

export const Restaurant = ({id, className}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    if (!restaurant) return null;
    
    const {name} = restaurant;

    return (
        <div className={classNames(className, styles.root)}>
            <h2 className={styles.title}>{name}</h2>
            <TabLink pathname='menu' title={'Menu'} size={400} />
            <TabLink pathname='reviews' title={'Reviews'} size={400} />
            <Outlet />
        </div>
    )
}