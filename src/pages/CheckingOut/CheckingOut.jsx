import styles from './CheckingOut.module.scss';
import Checkout from '../../components/Checkout/Checkout';
import { useShoppingCart } from '../../utils/cart-context';
import { ProductContext } from '../../api/productApi.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../layouts/Button/Button';

const CheckingOut = () => {
    const { cartQuantity, cartItems, clearCart } = useShoppingCart();
    const { products } = useContext(ProductContext);

    return (
        <section className={styles.checkingOut}>
            <h1>
                {!cartItems &&
                    'No Item in Cart, Kindly goto the product page to add some'}
            </h1>
            {cartItems &&
                cartItems.map((item) => <Checkout key={item.id} {...item} />)}
            <h3>
                Total $
                {cartItems
                    .reduce((total, cartItem) => {
                        const item = products.find((i) => i.id === cartItem.id);
                        return total + (item?.discountedPrice || 0) * cartItem.quantity;
                    }, 0)
                    .toFixed(2)}
            </h3>
            <div className={styles.out} onClick={clearCart}>
                <Button btnText='Checkout' orange={true} product='/success' to={true} />
            </div>
        </section>
    );
};

export default CheckingOut;
