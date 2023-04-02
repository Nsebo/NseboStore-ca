import React, { useEffect, useState } from 'react';
import Layout from '../../layouts/Layout/Layout';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Product.module.scss';
import Button from '../../layouts/Button/Button';
import profile from '../../assets/blank.webp';
import { useShoppingCart } from '../../utils/cart-context';

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const {
    title,
    description,
    imageUrl,
    discountedPrice,
    id,
    price,
    tags,
    reviews,
    rating,
  } = product;

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const { productId } = useParams();
  const back = () => {
    return navigate(-1);
  };
  // console.log(quantity);

  useEffect(() => {
    axios
        .get(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [productId]);
  return (
      <>
        <section className={styles.productDetail_container}>
          <h5 onClick={back}>Go Back</h5>
          <div className={styles.top}>
            <img src={imageUrl} alt={title} />
            <div className={styles.details}>
              <small>{tags ? tags[0] : ''}</small>
              <h2>{title}</h2>
              <p>{description}</p>
              <h5>Ratings: {rating}</h5>
              <h4>
                $
                {quantity === 0
                    ? discountedPrice
                    : (discountedPrice * quantity).toFixed(2)}
              </h4>

              <div className={styles.pricing}>
                {quantity === 0 ? (
                    ''
                ) : (
                    <div className={styles.control}>
                      <button onClick={() => decreaseCartQuantity(id)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => increaseCartQuantity(id)}>+</button>
                    </div>
                )}
                <div onClick={() => increaseCartQuantity(id)}>
                  <button className={styles.button}>Add to Cart</button>
                  {/* <Button btnText='ADD TO CART' orange={true} to={false} /> */}
                </div>
              </div>
              {reviews &&
                  reviews.map((review) => {
                    return (
                        <div className={styles.review} key={review.id}>
                          <div className={styles.profile}>
                            <img src={profile} alt={review.id} />
                            <div className=''>
                              <h4>{review.username}</h4>
                              <p>Costumer</p>
                              <p>
                                <strong>Review: </strong> {review.description}
                              </p>
                              <p>
                                <strong>Rating: </strong> {review.rating}
                              </p>
                            </div>
                          </div>
                        </div>
                    );
                  })}
            </div>
          </div>
        </section>
      </>
  );
};

export default Product;

