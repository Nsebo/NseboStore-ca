import Button from '../../layouts/Button/Button';
import styles from './ProductCard.module.scss';

const ProductCard = ({ products }) => {
  const { title, description, imageUrl, discountedPrice, id, price } = products;
  return (
    <div className={styles.productCard_container}>
      <div className={styles.star}>
        <div className={styles.star_twelve}>
          <p>{100 - (discountedPrice / price).toFixed(2) * 100}% Discount</p>
        </div>
      </div>
      <img src={imageUrl} alt={title} />
      <div className={styles.productCard_details}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.price}>
          <h5>Discounted Price: ${discountedPrice}</h5>
          <p>Price: ${price}</p>
        </div>
      </div>
      <Button
        product={`/products/${id}`}
        btnText='View Product'
        orange={true}
        to={true}
      />
    </div>
  );
};

export default ProductCard;
