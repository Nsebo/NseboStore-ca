import styles from './Ad.module.scss';
import man from '../../../../../react-ca-nsebo/NseboStore-ca/src/assets/man.png';

const Ad = () => {
  return (
    <section className={styles.ad_container}>
      <div className={styles.ad_details}>
        <h2>
          Bringing you the <span>best</span> products
        </h2>
        <p>
          Located at the heart of Norway, Nsebo-store is the premier store for
          headphones, beauty products, shoes, perfumes, earphones, speakers,
          computers and audio accessories. We have a large showroom and luxury
          demonstration rooms available for you to browse and experience a wide
          range of our products. Stop by our store to meet some of the fantastic
          people who make Nsebo-store the best place to buy your products from.
        </p>
      </div>
      <img src={man} alt='man' />
    </section>
  );
};

export default Ad;
