import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const itemCount = JSON.parse(localStorage.getItem('cartItemsCount'));
    if (cartItems) {
      setCart(cartItems);
    }
    if (itemCount) {
      setCartItemsCount(itemCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('cartItemsCount', JSON.stringify(cartItemsCount));
  }, [cart, cartItemsCount]);

  const addItemToCart = (item) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingCartItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setCartItemsCount(cartItemsCount + 1);
  };

  const increaseItemQuantity = (itemId) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    if (existingCartItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
      setCartItemsCount(cartItemsCount + 1);
    }
  };

  const decreaseItemQuantity = (itemId) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    if (existingCartItemIndex > -1) {
      const existingCartItem = cart[existingCartItemIndex];
      if (existingCartItem.quantity === 1) {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
        setCart(updatedCart);
      } else {
        const updatedCart = [...cart];
        updatedCart[existingCartItemIndex].quantity -= 1;
        setCart(updatedCart);
      }
      setCartItemsCount(cartItemsCount - 1);
    }
  };

  const removeItemFromCart = (itemId) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === itemId
    );
    if (existingCartItemIndex > -1) {
      const existingCartItem = cart[existingCartItemIndex];
      const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
      setCart(updatedCart);
      setCartItemsCount(cartItemsCount - existingCartItem.quantity);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsCount,
        addItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
