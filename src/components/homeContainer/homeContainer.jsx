import styles from './homeContainer.module.css';
import { TabLink } from '../tabLink/tabLink';

export const HomeContainer = () => {
    return (
        <div className={styles.root}>
            <span>Welcome to restaurants delivery service!</span>
            <TabLink title={'Go to choose restaurant'} pathname={'restaurants'} size={500} className={styles.link}/>
        </div>
    )
}