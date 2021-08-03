import React, { useReducer } from 'react';

const initialState = { count: 0 };

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <p>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one. useReducer also lets you optimize performance for
        components that trigger deep updates because you can pass dispatch down
        instead of callbacks.
      </p>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
