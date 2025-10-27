import { Button } from '../button/button';
import styles from './tabButton.module.css';

export const TabButton = ({title, onClick, disabled}) => {
    return (
        <Button 
            className={styles.root}
            title={title}
            size={500}
            disabled={disabled}
            onClick={onClick}
        />
    )
}