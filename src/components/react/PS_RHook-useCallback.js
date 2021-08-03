import React, { useState, useCallback } from 'react';
import './style.css';

const functionsSet = new Set();

export default function App() {
  return <Counter />;
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // increment is re-created on each render
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // decrement is re-created on each render
  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // incrementOtherCounter is re-created on each render
  // const incrementOtherCounter = () => {
  //   setCount2(count2 + 1);
  // };

  // incrementCallback is the same function object
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // decrement is the same function object
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  // incrementOtherCounter is the same function object
  const incrementOtherCounter = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  functionsSet.add(increment);
  functionsSet.add(decrement);
  functionsSet.add(incrementOtherCounter);

  console.log(functionsSet);

  return (
    <>
      Count: {count} <button onClick={increment}>+</button>{' '}
      <button onClick={decrement}>-</button>{' '}
      <button onClick={incrementOtherCounter}>increment Other Counter</button>
      <p>
        This is pretty simple, we have two state variables that are holding
        numbers and three functions to change our state. However, the problem
        here is that every time the Counter component is re-rendered, all three
        functions, increment , decrement , and incrementOtherCounter are all
        recreated!
      </p>
      <p>
        We can see that by using a Set and adding the function to the Set each
        time the function runs. Why Set? It only stores unique elements, or in
        our case, uniquely instantiated functions.
      </p>
    </>
  );
};
