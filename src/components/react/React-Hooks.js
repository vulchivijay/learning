import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback,
  createContext,
  useContext
} from 'react';
import './style.css';

const initialState = { count: 0 };
const functionsSet = new Set();

export const userDetailContext = createContext(null);

export default function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const [userDetails] = useState({
    name: 'Mayank',
    age: 30
  });

  useEffect(() => {
    setCount(count + 1);
  }, []);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc(i => i + 1);

  return (
    <div>
      <p>1. Count: {count} updating from useEffect hook/method.</p>
      <p>2. Count: {state.count} update from useReducer hook/method.</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      {'  '}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <p>3. Factorial of updating from useMemo hook/method.</p>
      <input type="number" value={number} onChange={onChange} /> is {factorial}{' '}
      {'  '}
      <button onClick={onClick}>Re-render</button>
      <p>4. Count updating from useCallback hook.</p>
      <CounterCallback />
      <p>5. focus the input field when user click focus the input button</p>
      <TextInputWithFocusButton />
      <p>6. updating from useContact hook/method.</p>
      <div>
        <p>Parent Component</p>
        <p>User Name: {userDetails.name}</p>
        <p>User Age: {userDetails.age}</p>
        <userDetailContext.Provider value={userDetails}>
          <ChildComponent />
        </userDetailContext.Provider>
      </div>
      <p>
        7. useLayoutEffect - useLayoutEffect, on the other hand, runs
        synchronously after a render but before the screen is updated. That
        goes: You cause a render somehow (change state, or the parent
        re-renders) React renders your component (calls it) useLayoutEffect
        runs, and React waits for it to finish. The screen is visually updated
      </p>
    </div>
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

const factorialOf = n => {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
};

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function ChildComponent() {
  const padding = {
    padding: '5px',
    backgroundColor: 'orange'
  };
  return (
    <div style={padding}>
      <p>Child Component</p>
      <ChildChildComponent />
    </div>
  );
}

function ChildChildComponent() {
  const contextData = useContext(userDetailContext);
  const padding = {
    padding: '5px',
    backgroundColor: 'purple',
    color: '#fff'
  };
  return (
    <div style={padding}>
      <p>Child Child Component</p>
      <p>About page Child component sub Child component</p>
      <p>User Name: {contextData.name}</p>
      <p>User Age: {contextData.age}</p>
    </div>
  );
}

const CounterCallback = () => {
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
