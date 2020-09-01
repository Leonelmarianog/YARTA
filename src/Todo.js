import React from "react";
import TodoForm from "./TodoForm.js";
import "./Todo.css";

export default class Todo extends React.Component {
  render() {
    const buttonText = this.props.isComplete ? "not completed" : "completed";
    const completedStyle = this.props.isComplete ? "completed" : "";
    const editForm = this.props.isFormVisible ? (
      <TodoForm
        title={this.props.title}
        description={this.props.description}
        handleEdit={this.props.handleEdit}
      />
    ) : null;
    return (
      <div className={`todo ${completedStyle}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button onClick={this.props.handleComplete}>
          Mark as {buttonText}
        </button>
        <button onClick={this.props.handleForm}>Edit</button>
        <button onClick={this.props.handleDelete}>Delete</button>
        {editForm}
      </div>
    );
  }
}
