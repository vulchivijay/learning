import React, { useState, useMemo, useCallback } from 'react';

import './style.css';

function CalculateFactorialWithOutUseMemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = factorialOf(number);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc(i => i + 1);

  return (
    <div>
      <h1>Calculate Factorial without useMemo hook</h1>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      <p>
        Every time you change the input value, the factorial is calculated
        factorialOf(n) and 'factorialOf(n) called!' is logged to console.
      </p>
      <p>
        On the other side, each time you click Re-render button, inc state value
        is updated. Updating inc state value triggers CalculateFactorial
        re-rendering. But, as a secondary effect, during re-rendering the
        factorial is recalculated again — 'factorialOf(n) called!' is logged to
        console.
      </p>
    </div>
  );
}

function CalculateFactorialUseMemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);

  return (
    <div>
      <h1>Calculate Factorial with useMemo hook</h1>
      <p>
        useMemo() is a built-in React hook that accepts 2 arguments — a function
        compute that computes a result and the depedencies array:
      </p>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
      <p>
        Every time you change the value of the number, 'factorialOf(n) called!'
        is logged to console. That’s expected.
      </p>
      <p>
        However, if you click Re-render button, 'factorialOf(n) called!' isn’t
        logged to console because useMemo(() factorialOf(number), [number])
        returns the memoized factorial calculation. Great!
      </p>
    </div>
  );
}

const factorialOf = n => {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
};

// function factorialOf(n) {
//   console.log('factorialOf(n) called!');
//   return n <= 0 ? 1 : n * factorialOf(n - 1);
// }

export default function App() {
  return (
    <React.Fragment>
      <CalculateFactorialWithOutUseMemo />
      <CalculateFactorialUseMemo />
    </React.Fragment>
  );
}
