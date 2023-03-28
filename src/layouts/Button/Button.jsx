import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({ product, btnText, orange, black, transparent, to }) => {
  return (
    <Link
      className={`${styles.button} ${orange ? styles.orange : ''} ${
        black ? styles.black : ''
      } ${transparent ? styles.transparent : ''} `}
      to={to ? product : ''}
    >
      {btnText}
    </Link>
  );
};

export default Button;
