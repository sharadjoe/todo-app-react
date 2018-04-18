import React, { Component } from "react";

class SingleTodo extends Component{
  constructor(){
    super();

  }
  render(){
    return(
      <li>{this.props.to}<button onClick={this.props.delete}>x</button></li>
    );
  }
}
export default SingleTodo;
