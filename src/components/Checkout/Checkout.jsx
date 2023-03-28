import React, { useContext } from 'react';
import { useShoppingCart } from '../../utils/cart-context';
import { ProductContext } from '../../api/productApi.jsx';
import Layout from '../../layouts/Layout/Layout';
import styles from './Checkout.module.scss';

const Checkout = ({ id, quantity }) => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useShoppingCart();
  const { products } = useContext(ProductContext);
  const item = products.find((item) => item.id === id);
  if (item === null) return null;
  console.log(quantity);
  console.log(cartItems.length);

  return quantity < 1 ? (
    <h1>No Item in Cart Kindly Add Some Items</h1>
  ) : (
    <section className={styles.checkout_container}>
      <div className={styles.checkout_list}>
        <img src={item?.imageUrl} alt={item?.title} />
        <h2>{item?.title}</h2>
        <h4>${(item?.discountedPrice * quantity).toFixed(2)}</h4>
        <div className={styles.control}>
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
        </div>
        <p onClick={() => removeFromCart(item.id)}>&times;</p>
      </div>
    </section>
  );
};

export default Checkout;
