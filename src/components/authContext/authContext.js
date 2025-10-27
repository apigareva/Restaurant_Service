import { createContext } from "react";

export const AuthContext = createContext({
    auth: {
        isAuth: false,
        username: ''
    },
    toggleAuth: () => {}
});