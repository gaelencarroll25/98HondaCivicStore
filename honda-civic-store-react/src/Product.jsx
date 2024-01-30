import { useState, useEffect } from "react";
function Product() {
  let [products, setProducts] = useState([]);
  async function fetchProducts() {
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, [products]);
  return (
    <>
      {products.map((product, index) => (
        <li key={index}>{product.productName}</li>
      ))}
    </>
  );
}
export default Product;
