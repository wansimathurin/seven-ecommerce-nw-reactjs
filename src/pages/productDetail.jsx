import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './../data/index';
import './productDetail.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

const ProductDetail = () => {
    const { id } = useParams()
    let product = products.find(product => product.id == id);
   const checkRates = () => {
     const stars = [];// Initialize an empty array to hold the star components
     for (let index = 0; index < parseInt(product.rating.rate); index++) {
       // Iterate 4 times
       stars.push(<FaStar color="gold" size={40} />); // Push a star component into the array
     }
     return stars; // Return the array of star components
   };
  return (
    <div className="container">
      <div className="row">
        <div className="productContent">
          <h1>{product.title}</h1>
          <h2 className='color'>{product.category}</h2>
          <h2>{product.description}</h2>
          <div className="rates">
            {checkRates()} <FaStarHalfStroke color="gold" size={40} />
          </div>
          <h1 className="color">Price: {product.price}XAF</h1>

          <button className="get-st-details">Add to cart</button>
        </div>
        <div className="image-container-details ">
          <img src={product.image} alt={product.title} width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail
