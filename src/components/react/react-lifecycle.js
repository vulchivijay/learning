import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      hasError: false
    };
    console.log('constructor ', this.state);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props: props, state ', props, state);
    return false; // default value is:
    // if not return true/false throws error.
    // if we return false, .
    // if we return true, .
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'get snap shotbefore update previous props, state ',
      prevProps,
      prevState
    );
    return false; // default value is:
    // if not return true/false throws error.
    // if we return false, .
    // if we return true, .
  }

  componentWillUnmount() {
    console.log('component will unmount ', this.state.count);
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log('component did mount ', this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update ', nextProps, nextState);
    return true; // default value is:
    // if not return true/false throws error.
    // if we return false, it will not re render the render function.
    // if we return true, it will re render the render function.
  }

  componentDidUpdate() {
    console.log('component did update ', this.state);
  }

  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

  // error - The error that was thrown.
  // info - An object with a componentStack key containing information about which component threw the error.
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError error ', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch ', error, info);
  }

  render() {
    console.log('render ', this.state);
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return <div>Hello {this.state}</div>;
  }
}

export default App;

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }


>> constructor:  {count: 0, hasError: false}
>> get derived state from props: props, state:  {} {count: 0, hasError: false}
>> render:  {count: 0, hasError: false}
>> component did mount:  {count: 0, hasError: false}
>> get derived state from props: props, state:  {} {count: 1, hasError: false}
>> should component update:  {} {count: 1, hasError: false}
>> render:  {count: 1, hasError: false}
>> get snap shotbefore update previous props, state:  {} {count: 0, hasError: false}
>> component did update:  {count: 1, hasError: false}




import React, { useState, useEffect, useRef } from 'react';
import './style.css';

class API {
  subscribeToFriendStatus(fun) {
    return fun('');
  }
  unsubscribeFromFriendStatus(fun) {
    return fun(null);
  }
}

export default function App() {
  const [count, setCount] = useState(0);
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');
  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  const [isOnline, setIsOnline] = useState(null);
  const chatAPI = new API();

  useEffect(() => {
    setCount(count + 1);
    console.log('use Effect 1: ', count);
  }, []);

  useEffect(() => {
    setCount(count + 2);
    console.log('use Effect 2: ', count);
  }, []);

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    console.log('local storage: persist form.');
    // not breaking hook rule
    if (name !== '') localStorage.setItem('formData', name);
  });

  // 4. Use an effect for updating the title
  if (surname !== '') {
    // breaking hook rule
    useEffect(function updateTitle() {
      console.log('update title');
      document.title = name + ' ' + surname;
    });
  }

  useEffect(() => {
    function handleStatusChange(status) {
      console.log('*** status *** ', status);
      setIsOnline(status);
    }
    chatAPI.subscribeToFriendStatus(handleStatusChange);
    return () => {
      chatAPI.unsubscribeFromFriendStatus(handleStatusChange);
    };
  });

  console.log('outside return function ', count);
  if (isOnline === null) {
    return 'Loading...';
  }
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Full Name: </p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}

outside return function  0
use Effect 1:  0
use Effect 2:  0
local storage: persist form.
update title
*** status ***  
outside return function  2
*** status ***  null
local storage: persist form.
update title
*** status ***  
outside return function  2
