import React, { Component } from 'react';
import './App.css';

import SingleTodo from "./SingleTodo";

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

  deleteTodo = i => {
    let todoCopy = this.state.todo.slice();
    todoCopy.splice(i,1);

    this.setState({ todo : todoCopy });
  }

  render(){
    let bulletedTodo = this.state.todo.map((e,i) =>{
      return(
        <SingleTodo to={e} delete={() => this.deleteTodo(i)} />
      );
    });
    return(
      <div>
        <input placeholder="Enter the todos" value={this.state.currentTodo} onChange={this.onChange}/>

         <button primary onClick={this.onClick}>Add</button>
         <br />
         { this.state.todo.length === 0 ? "No Todos yet" : <ul>{bulletedTodo}</ul>}
    </div>
  );
  }

}

export default App;
