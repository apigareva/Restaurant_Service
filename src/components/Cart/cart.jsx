import { useSelector } from "react-redux"
import { selectCartItemsIds } from "../../redux/entities/cart/slice";
import { CartItem } from "../cartItem/cartItem";
import styles from './cart.module.css';
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

export const Cart = () => {
    const cartIds = useSelector(selectCartItemsIds);
    const {auth} = useContext(AuthContext);
    const {isAuth} = auth;

    if (!isAuth) return null;

    return (
        <div className={styles.root}>
            <h3>Cart</h3>
            <ul>
                {cartIds?.map((dishId) => 
                    <li key={dishId} className={styles.item}>
                        <CartItem dishId={dishId} />
                    </li>)}
            </ul>
        </div>
    )
}