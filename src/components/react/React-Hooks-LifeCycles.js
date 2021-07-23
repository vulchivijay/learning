import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef
} from 'react';
import './style.css';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

const ThemeContext = React.createContext(themes.light);
const initialState = { number: 0 };

export default function App() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');

  useEffect(() => {
    console.log('use effect triggered!');
    setFruit('apple');
  }, []);

  console.log('render function called');

  return (
    <div>
      <p>Basic Hooks</p>
      <ol>
        <li>useState initial state: {count}</li>
        <li>
          useEffect initial <b>banana</b> after useeffect: <b>{fruit}</b>
          <p>
            useEffect runs asynchronously and after a render is painted to the
            screen.
          </p>
          <p>
            So that looks like: You cause a render somehow (change state, or the
            parent re-renders) React renders your component (calls it) The
            screen is visually updated THEN useEffect runs
          </p>
        </li>
        <li>
          useContext
          <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
          </ThemeContext.Provider>
        </li>
      </ol>
      <p>Additional Hooks</p>
      <ol>
        <li>
          useReducer: <Counter />
        </li>
        <li>useCallback: </li>
        <li>
          useRef: <TextInputWithFocusButton />
        </li>
        <li>useMemo: </li>
        <li>useImperativeHandle</li>
        <li>
          useLayoutEffect
          <p>
            useLayoutEffect, on the other hand, runs synchronously after a
            render but before the screen is updated. That goes: You cause a
            render somehow (change state, or the parent re-renders) React
            renders your component (calls it) useLayoutEffect runs, and React
            waits for it to finish. The screen is visually updated
          </p>
        </li>
        <li>useDebugValue</li>
      </ol>
    </div>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case 'increment':
      return { number: state.number + 1 };
    case 'decrement':
      return { number: state.number - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {state.number}{' '}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {'  '}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

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
