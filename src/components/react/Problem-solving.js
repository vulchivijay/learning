import React, { useEffect, useState } from "react";

const StatUpOne = () => {
  let [todos, todosState] = useState([{ text: "Learn NextJS", done: false }]);

  let [updateTime, updateTimeState] = useState(() => new Date());

  useEffect(() => {
    fakeApiresponse();
  }, [])

  const fakeApiresponse = () => {
    // fake api response
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { text: "Learn Elasticsearch", done: true },
          { text: "Learn Python", done: false },
          { text: "Learn angular", done: true }
        ]);
      }, 3000);
    }).then((result) => {
      todosState([...todos, ...result]);
    });
  };

  const loadMoreTodos = () => {
    todos.push({ text: "Some more todosss", done: false });
    todosState([...todos]);
    updateTimeState(new Date());

  };

  return (
    <>
      {todos.map((item, index) => (
        <TodoRender item={item} key={index} num={index} />
      ))}
      <div>{JSON.stringify(updateTime)}</div>
      <button onClick={loadMoreTodos}>Load more</button>
    </>
  );
};

const TodoRender = ({ item, num }) => {
  return (
    <>
      <div>
        <input type="checkbox" value={item.text} />
        <label>
          {" "}
          {item.text} - {num}
        </label>
      </div>
    </>
  );
};

export default StatUpOne;