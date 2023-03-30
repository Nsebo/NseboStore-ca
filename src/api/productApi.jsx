import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.noroff.dev/api/v1/online-shop/')
      .then((response) => {
        setProducts(response.data);
        setSearchProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ProductContext.Provider
      value={{ products, setSearchProduct, searchProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
