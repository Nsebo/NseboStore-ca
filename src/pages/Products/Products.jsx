import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Products.module.scss';
import { ProductContext } from '../../api/productApi.jsx';
import { TagContext } from '../../api/tagApi.jsx';

const Products = () => {
  const { products, setSearchProduct, searchProduct } =
    useContext(ProductContext);
  const { tag } = useContext(TagContext);

  const onSearchHandler = (e) => {
    if (!e.target.value) return setSearchProduct(products);

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchProduct(filteredProducts);
  };

  return (
    <div className={styles.products_container}>
      <div className={styles.tags}>
        <h2>Products</h2>
        <ul>
          {tag?.map((tag, idx) => (
            <li key={idx}> {tag}</li>
          ))}
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="search">
            <input
              type="text"
              placeholder="Search for a product..."
              onChange={onSearchHandler}
            />
          </label>
        </form>
      </div>
      <div className={styles.products_card}>
        {searchProduct ? (
          searchProduct.map((product) => (
            <ProductCard products={product} key={product.id} />
          ))
        ) : (
          <h1>No Product Found</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
