import { Link } from 'react-router-dom';
import styles from './HomeCard.module.scss';
import headset from '../../assets/headset.png';
import speakers from '../../assets/speakers.png';
import earphone from '../../assets/earphones.png';
import usb from '../../assets/0-usb-plug-removebg-preview.png';
import watch from '../../assets/watch-removebg-preview.png';
import bag from '../../assets/bag-removebg-preview.png';
import perfume from '../../assets/perfume-removebg-preview.png';
import glasses from '../../assets/glasses-removebg-preview.png';
import shoes from '../../assets/shoe-removebg-preview.png';
import arrowLeft from '../../assets/left arrow.png';

const HomeCard = () => {
  return (
    <section className={styles.homeCard_container}>
      <h2>Categories</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={headset} alt="headset" />
          <h3>Headsets</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={speakers} alt="speakers" />
          <h3>Speaker</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={earphone} alt="earphone" />
          <h3>Earphones</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={usb} alt="usb" />
          <h3>Usb</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={glasses} alt="shoes" />
          <h3>Shoes</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={watch} alt="watch" />
          <h3>Watches</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={bag} alt="bag" />
          <h3>Bags</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={perfume} alt="perfumes" />
          <h3>Perfumes</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
        <div className={styles.card}>
          <img src={glasses} alt="glasses" />
          <h3>Glasses</h3>
          <Link to="/products">
            <img src={arrowLeft} alt="left arrow" /> Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
