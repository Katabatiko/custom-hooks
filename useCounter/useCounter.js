import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {
  
  const [counter, setCounter] = useState(initialState);

  //const increment = ( factor= 1 ) =>{
  const increment = () =>{
    //setCounter( counter + factor );
    setCounter( counter + 1 );
  }
  
  //const decrement = ( factor= 1 ) =>{
  const decrement = () =>{
    //setCounter( counter - factor );
    setCounter( counter - 1 );
  }
  
  const reset = () =>{
    setCounter( initialState );
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }

}
