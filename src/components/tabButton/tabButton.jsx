import styles from './tabButton.module.css';
import classNames from 'classnames';

export const TabButton = ({name, onClick, disabled, className}) => {
    return (
        <button className={classNames(className, styles.root)} onClick={onClick} disabled={disabled}>
            <span className={styles.title}>{name}</span>
        </button>
    )
}