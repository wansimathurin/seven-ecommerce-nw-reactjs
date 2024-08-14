import React, { useId, useState } from 'react'
import './search.css'

const Search = () => {
  const [count, setCount] = useState(0);
  const [enteredText, setEnteredText] = useState('');
 
  let users = [
    {
      id: useId(),
      name: "John",
      age: 36,
    },
    {
      id: useId(),
      name: "walter Smith",
      age: 22,
    },
  ];
  console.log("users :", users);
  
  return (
    <div className="container">
      <h1>Count : {count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)} className="button">
          increment(+)
        </button>
        <button onClick={() => count === 0 ? null : setCount(count - 1)} className="button">
          decrement(-)
        </button>
      </div>
      <form >
        <input  type="text" onChange={(e)=>setEnteredText(e.target.value)}  placeholder='Enter a text' className='field' />
      </form>
      <h1>Enter : {enteredText} </h1>
    </div>
  );
}

export default Search

