import React, {useState, useEffect} from 'react';

export default function RHTodoList () {
  const [todos, setTodos] = useState([{subject: "hello", description: "testing", status: false, }]);

  const completeTask = (index) => {
    console.log("Complete index: ", index)
  }

  const deleteTask = (index) => {
    console.log("delete index: ", index)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = event.target.elements.subject.value;
    const description = event.target.elements.description.value;

    if (subject && description) {
      const todoObject = {
        subject: subject,
        description: description,
        status: false
      }
      setTodos([...todos, todoObject]);
      event.target.elements.subject.value = "";
      event.target.elements.description.value = "";
    }
  }

  return (
    <div className="todo-wrapper">
      <div className="add-todo">
        <form onSubmit={handleSubmit}>
          <div>
            <label name="">Subject: </label>
            <input type="text" name="subject"/>
          </div>
          <div>
            <label name="">Description: </label>
            <input type="text" name="description"/>
          </div>
          <div>
            <button>Add Todo</button>
          </div>
        </form>
      </div>
      <div className="todo-list">
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Subject</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((item, index) => {
                return <Todo data={item} key={index} index={index} com={() => completeTask(index) } del={() => deleteTask(index) }/>;
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Todo = ({data, index, com, del}) => {
  // console.log(com(index), del(index));
  return (
    <tr>
      <td>{index+1}</td>
      <td>{data.subject}</td>
      <td>{data.description}</td>
      <td>{data.status ? "done": "open"}</td>
      <td>
        <button onClick={() => com(index)}>Complete</button>
        <button onClick={() => del(index)}>Delete</button>
      </td>
    </tr>
  )
}
