import styles from './counter.module.css';
import classNames from 'classnames';

export const Counter = ({value, increment, decrement, className}) => {   
    return (
        <div className={classNames(className, styles.root)}>
            <button className={styles.button} onClick={decrement}>-</button>
            {value}
            <button className={styles.button} onClick={increment}>+</button>
        </div>
    )
}