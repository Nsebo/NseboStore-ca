import styles from './SuccessPage.module.scss';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <section className={styles.success}>
            <h1>
                Your Order has been made kindly check your email for shipping details
            </h1>
            <Link to='/'>Go Home</Link>
        </section>
    );
};

export default SuccessPage;
