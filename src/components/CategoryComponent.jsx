import React from 'react'
import { Link } from 'react-router-dom';
import './CategoryComponent.css'
import ProductCard from './ProductCard';
import { products } from './../data/index';

const CategoryComponent = ({title}) => {
  
  return (
    <div className="categoryContainer">
      <div className="category">
        <h2>{title}</h2>

        <Link className="color">View all</Link>
      </div>
      <div className="products">
        {products.map((product) => product.category === title && (
          <ProductCard title={product.title.slice(0,20)} price={product.price} image={product.image}/>
        ))}
      </div>
    </div>
  );
}
export default CategoryComponent

