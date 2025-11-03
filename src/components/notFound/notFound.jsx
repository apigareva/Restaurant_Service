import { Link } from 'react-router';
import styles from './notFound.module.css';
export const NotFound = () => {
    return <div className={styles.root}>
        <span>Not Found</span>
        <Link to='/'>Go to home page</Link>
    </div>
}