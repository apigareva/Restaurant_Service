import { createContext } from "react";

export const AuthContext = createContext({
    auth: {
        isAuth: false,
        username: '',
        userId: ''
    },
    toggleAuth: () => {}
});