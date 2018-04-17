import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      todo : [],
      currentTodo : ""
    }
  }

  onChange = e => {
    this.setState({ currentTodo : e.target.value });
  }

  onClick = () => {
    let todoCopy = this.state.todo.slice();
    todoCopy.push(this.state.currentTodo);

    this.setState({ todo: todoCopy,currentTodo : ""});
  }

  render(){
    return(
      <div>
        <input placeholder="Enter the todos" value={this.state.currentTodo} onChange={this.onChange}/>
         <button onClick={this.onClick}>Add</button>
         <br />
         { this.state.todo.length === 0 ? "No Todos yet" : "You still have some Todos"}
    </div>
  );
  }

}

export default App;
