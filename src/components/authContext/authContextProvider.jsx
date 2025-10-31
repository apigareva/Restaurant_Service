import { useCallback, useState } from "react";
import { AuthContext } from "./authContext"
import { USERS } from "../../constants/common";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/entities/cart/slice";

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({isAuth: false, username: ''});
    const dispatch = useDispatch();

    const toggleAuth = useCallback(() => {
        setAuth(currentAuth => {
            if (!currentAuth.isAuth) {
                return {isAuth: true, username: USERS.ALEKSANDRA}
            }
            else {
                dispatch(clearCart());
            }
            return {isAuth: false, username: ''};
        });
    }, [dispatch]);

    return (
        <AuthContext value={{auth, toggleAuth}}>
            {children}
        </AuthContext>
    )
}