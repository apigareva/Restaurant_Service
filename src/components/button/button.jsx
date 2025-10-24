import classNames from "classnames"
import styles from './button.module.css'
import { THEME_TYPE } from "../../constants/common"
import { useContext } from "react"
import { ThemeContext } from "../themeContext/themeContext"

export const Button = ({className,
     title, 
     disabled = false, 
     size = 300,
     onClick}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <button 
            className={classNames(className, styles.root, {
                [styles.size500]: size === 500,
                [styles.size400]: size === 400,
                [styles.size300]: size === 300,
                [styles.dark]: theme === THEME_TYPE.DARK,
                [styles.light]: theme === THEME_TYPE.LIGHT
            })}
            disabled={disabled}
            onClick={onClick}>
            {title}
        </button>
    )
}