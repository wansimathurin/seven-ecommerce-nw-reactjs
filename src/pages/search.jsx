import React, { useId, useState } from 'react'
import './search.css'
import { products } from './../data/index';

const Search = () => {
  const [enteredText, setEnteredText] = useState('');
 //search functionality
  const filterProducts = (productsList,searchTerm) => {
     return productsList.filter(product=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  const SearchedProducts = filterProducts(products, enteredText);
  return (
    <div
      className="container"
      style={{ height:'100%' }}
    >
      <form>
        <input
          type="text"
          onChange={(e) => setEnteredText(e.target.value)}
          placeholder="Enter a text"
          className="field"
        />
      </form>
      {SearchedProducts.map((product) => (
        <div className="searchCard" key={product.id}>
          <div className="imageBox">
            <img
              src={product.image}
              alt=""
              width={250}
            />
          </div>
          <div className="searchContent">
            <h1>{product.title.slice(0, 5)}</h1>
            <p>{product.description.slice(0, 7)}</p>
            <p>
              Price: <strong>{product.price}FCFA</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search

