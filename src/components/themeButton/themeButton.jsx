import { useContext } from 'react';
import { Button } from '../button/button';
import { ThemeContext } from '../themeContext/themeContext';

export const ThemeButton = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <Button 
            title={'Toggle theme'}
            size={400}
            onClick={toggleTheme}
        />
    )
}