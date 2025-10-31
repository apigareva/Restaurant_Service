import { useDispatch, useSelector } from "react-redux"
import { clearCart, selectCartItemsIds } from "../../redux/entities/cart/slice";
import { CartItem } from "../cartItem/cartItem";
import styles from './cart.module.css';
import { useCallback, useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { Button } from "../button/button";

export const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = useCallback(() => dispatch(clearCart()), [dispatch]);

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
            <Button title={'Clear cart'} onClick={handleClearCart} size={400}/>
        </div>
    )
}