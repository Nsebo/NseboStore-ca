import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import ScrollToTop from './utils/ScrollToTop';
import { useShoppingCart } from './utils/cart-context';
import Layout from './layouts/Layout/Layout';
import CheckingOut from './pages/CheckingOut/CheckingOut';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import Contact from './pages/Contact/Contact';

const App = () => {
    const { cartQuantity, cartItems } = useShoppingCart();

    return (
        <Layout>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/success' element={<SuccessPage />} />
                    <Route path='/checkout' element={<CheckingOut />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:productId' element={<Product />} />
                </Routes>
            </ScrollToTop>
        </Layout>
    );
};

export default App;

