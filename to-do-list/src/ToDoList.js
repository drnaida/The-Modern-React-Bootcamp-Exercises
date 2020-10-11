import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk The Fish"}, { task: "Groom Chickens" }]
    }
    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return(
      <div>
        <h1>To Do List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default ToDoList;
