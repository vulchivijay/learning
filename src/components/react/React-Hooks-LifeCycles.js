import React, { useState, useEffect } from 'react';

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

// >> outside return function  0
// >> use Effect 1:  0
// >> use Effect 2:  0
// >> local storage: persist form.
// >> update title
// >> *** status ***  
// >> outside return function  2
// >> *** status ***  null
// >> local storage: persist form.
// >> update title
// >> *** status ***  
// >> outside return function  2
