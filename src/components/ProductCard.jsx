import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';


const ProductCard = ({id,title,price,image}) => {
  return (
    <Link to={`products/${id}`} className="card">
      <div className="image-container">
        <img src={image} alt="" width="100%" />
      </div>
      <div className="flex small-padding">
        <h3>{title}</h3>
        <h3 className="color">{price}XAF</h3>
      </div>
    </Link>
  );
}

export default ProductCard
