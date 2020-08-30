import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
