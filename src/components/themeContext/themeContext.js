import { createContext } from "react";
import { THEME_TYPE } from '../../constants/common'

export const ThemeContext = createContext({ theme: THEME_TYPE.DARK, toggleTheme: () => {}});