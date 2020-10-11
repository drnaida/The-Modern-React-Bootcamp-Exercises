import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return(
      <div>
        <button>Edit</button>
        <button>x</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
