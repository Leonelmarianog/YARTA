import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    // initial state of each Todo
    this.state = {
      completed: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // event handler to mark a Todo as completed or not
  handleClick() {
    this.setState({
      completed: !this.state.completed,
    });
  }

  render() {
    const buttonText = this.state.completed ? "not completed" : "completed";
    const completedStyle = this.state.completed ? "completed" : "";
    return (
      <div className={`todo ${completedStyle}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button onClick={this.handleClick}>Mark as {buttonText}</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    );
  }
}
