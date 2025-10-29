import { useCallback, useState } from "react";
import { THEME_TYPE } from '../../constants/common'
import { ThemeContext } from "./themeContext";

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(THEME_TYPE.DARK);

    const toggleTheme = useCallback(()=> {
        setTheme(currentTheme => currentTheme === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK)
    }, []);

    return (
        <ThemeContext value={{theme, toggleTheme}}>
            {children}
        </ThemeContext>
    )
}