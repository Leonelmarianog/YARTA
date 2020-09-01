import React from "react";
import TodoForm from "./TodoForm.js";
import "./Todo.css";

export default function Todo(props) {
  const buttonText = props.isComplete ? "not completed" : "completed";
  const completedStyle = props.isComplete ? "completed" : "";
  const editForm = props.isFormVisible ? (
    <TodoForm
      title={props.title}
      description={props.description}
      handleEdit={props.handleEdit}
    />
  ) : null;
  return (
    <div className={`todo ${completedStyle}`}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={props.handleComplete}>Mark as {buttonText}</button>
      <button onClick={props.handleForm}>Edit</button>
      <button onClick={props.handleDelete}>Delete</button>
      {editForm}
    </div>
  );
}
