import { useCallback, useState } from "react";
import { AuthContext } from "./authContext"
import { USERS } from "../../constants/common";

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({isAuth: false, username: ''});
    const toggleAuth = useCallback(() => {
        setAuth(currentAuth => {
            if (!currentAuth.isAuth) {
                return {isAuth: true, username: USERS.ALEKSANDRA}
            }
            return {isAuth: false, username: ''};
        });
    }, []);

    return (
        <AuthContext value={{auth, toggleAuth}}>
            {children}
        </AuthContext>
    )
}