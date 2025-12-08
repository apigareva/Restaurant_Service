import { DishCounter } from "../dishCounter/dishCounter";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import styles from './dishContainer.module.css';
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishContainer = ({dishId}) => {
    const {auth} = useContext(AuthContext);

    const {data: dish} = useGetDishByIdQuery(dishId);
    const {name, price} = dish || {};

    return <div className={styles.root}>        
            <span>{name}</span>
            <span> - </span>
            <span>{price}$</span>
            {auth.isAuth && <DishCounter dishId={dishId}/>}
        </div>
}