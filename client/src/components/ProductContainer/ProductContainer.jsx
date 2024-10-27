import React from "react";
import "./ProductContainer.css";
import Product from "../Product/Product";

function ProductContainer(props) {
  const { products, count, productsLoading } = props;

  if (productsLoading) return <p className="load-message">Loading...</p>
  return (
    <div className="products">
      {count
        ? products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))
        : "Not found any products."}
    </div>
  );
}

export default React.memo(ProductContainer);