import Button from '../../layouts/Button/Button';
import styles from './Hero.module.scss';
import headphones from '../../../../../react-ca-nsebo/NseboStore-ca/src/assets/headphones.png';

const Hero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_details}>
        <h5>New Products</h5>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button btnText='View Product' orange={true} />
      </div>
      <div className={styles.hero_img}>
        <img src={headphones} alt='headphones' />
      </div>
    </section>
  );
};

export default Hero;
