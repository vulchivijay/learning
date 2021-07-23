import React from 'react';

class RClassTodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{subject: "hello", description: "testing", status: false}]
    }
  }

  completeTask = (currentindex) => {
    const todoObject = [...this.state.todos].map((item, index) => {
      if (index === currentindex) {
        item.status = true
      };
      return item;
    });
    this.setState({ todos: todoObject});
  }

  deleteTask = (currentindex) => {
    const subject = this.state.todos[currentindex].subject;
    const latestTodos = [...this.state.todos].filter((item) => item.subject !== subject);
    this.setState({ todos: latestTodos });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const subject = event.target.elements.subject.value;
    const description = event.target.elements.description.value;

    if (subject && description) {
      const todoObject = {
        subject: subject,
        description: description,
        status: false
      }
      this.setState({
        todos: [...this.state.todos, todoObject]
      });
      event.target.elements.subject.value = "";
      event.target.elements.description.value = "";
    }
  }

  render () {
    return (
      <div className="todo-wrapper">
        <div className="add-todo">
          <form onSubmit={this.handleSubmit}>
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
                this.state.todos.map((item, index) => {
                  return <Todo data={item} key={index} index={index} com={() => this.completeTask(index) } del={() => this.deleteTask(index) }/>;
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const Todo = ({data, index, com, del}) => {
  // console.log(com(index), del(index));
  const localIndex = index + 1;
  return (
    <tr>
      <td>{localIndex}</td>
      <td>{data.subject}</td>
      <td>{data.description}</td>
      <td>{data.status ? "done": "open"}</td>
      <td>
        <button onClick={() => com(localIndex)}>Complete</button>
        <button onClick={() => del(localIndex)}>Delete</button>
      </td>
    </tr>
  )
}

export default RClassTodoList;