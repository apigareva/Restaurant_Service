import classNames from "classnames"
import { Link, NavLink } from "react-router"
import styles from './tabLink.module.css'
import { useContext } from "react";
import { ThemeContext } from "../themeContext/themeContext";
import { THEME_TYPE } from "../../constants/common";

export const TabLink = ({title = '', className, size = 300, pathname, search = ''}) => {
    const { theme } = useContext(ThemeContext);

    return <NavLink className={({isActive}) => {
                return classNames(className, styles.root, {
                    [styles.size500]: size === 500,
                    [styles.size400]: size === 400,
                    [styles.size300]: size === 300,
                    [styles.dark]: theme === THEME_TYPE.DARK,
                    [styles.light]: theme === THEME_TYPE.LIGHT,
                    [styles.isActive]: isActive
                }
            )}}
            to={{pathname, search}}>
        {title}
    </NavLink>
}