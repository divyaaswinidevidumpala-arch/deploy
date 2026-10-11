import { useState, useEffect, useContext } from "react";
import ProductList from "../Components/ProductList";
import { CartContext } from "../Context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Products;
