import { AuthButton } from "../authButton/authButton"
import { ThemeButton } from "../themeButton/themeButton"
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.root}>
            <ThemeButton />
            <AuthButton />
        </header>
    )
}