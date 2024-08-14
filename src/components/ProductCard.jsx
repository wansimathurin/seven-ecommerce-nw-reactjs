import React from 'react'
import './ProductCard.css'


const ProductCard = ({title,price,image}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="" width="100%" />
      </div>
      <div className="flex small-padding">
        <h3>{title}</h3>
        <h3 className="color">{price}XAF</h3>
      </div>
    </div>
  );
}

export default ProductCard
