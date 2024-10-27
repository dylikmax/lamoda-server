import React from "react";
import "./Product.css";

function Product({product}) {

    const {name, description, color, price, rating, category, imageUrl} = product;
    return <div className="product">
        <img src={imageUrl} className="image" alt="Clothes"/>
        <p className="name">{name}</p>
        <p className="desc">{description}</p>
        <p className="color">Color: {color}</p>
        <p className="price">Price: {price}</p>
        <p className="rating">Rating: {rating}</p>
        <p className="category">Category: {category}</p>
    </div>
}

export default React.memo(Product)