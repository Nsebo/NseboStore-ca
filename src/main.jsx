import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './api/productApi.jsx';
import { TagProvider } from './api/tagApi.jsx';
import { ShoppingCartProvider } from './utils/cart-context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ShoppingCartProvider>
                <ProductProvider>
                    <TagProvider>
                        <App />
                    </TagProvider>
                </ProductProvider>
            </ShoppingCartProvider>
        </BrowserRouter>
    </React.StrictMode>
);
