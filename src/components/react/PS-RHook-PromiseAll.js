import React, { useState, useEffect } from 'react';

export default function App() {
  const [multi, setMulti] = useState();

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ])
      .then(function(responses) {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function(response) {
            return response.json();
          })
        );
      })
      .then(function(data) {
        // Log the data to the console
        // You would do something with both sets of data here
        setMulti(data); // return array of results of each api call 
      })
      .catch(function(error) {
        // if there's an error, log it
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>Printing two response datas below</p>
      {multi ? <List data={multi} /> : <Empty />}
    </div>
  );
}

function List({ data }) {
  return data.map((item, index) => {
    // console.log(index);
    return <ol> <Child data={item} /> </ol>;
  });
}

function Child({ data }) {
  return data.map((item, index) => {
    return item.title ? (
      <li key={index}>{item.title}</li>
    ) : (
      <li key={index}> {item.name} </li>
    );
  });
}

function Empty() {
  return <p>Empty!</p>;
}
