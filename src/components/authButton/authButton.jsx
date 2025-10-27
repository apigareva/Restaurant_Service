import { useContext, useSyncExternalStore } from "react"
import { Button } from "../button/button"
import { AuthContext } from "../authContext/authContext";
import styles from './authButton.module.css'

export const AuthButton = () => {
    const { auth, toggleAuth } = useContext(AuthContext);
    const { isAuth, username } = auth;
    const title = isAuth ? 'Logout' : 'Login';

    return (
        <div className={styles.root}>
            {isAuth && username &&
                <div className={styles.username}>{username}</div>
            }
            <Button title={title} size={400} onClick={toggleAuth}/>
        </div>
    )
}