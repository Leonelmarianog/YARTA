import React from "react";
import TodoForm from "./TodoForm.js";
import "./Todo.css";

export default function Todo(props) {
  const buttonText = props.isComplete ? "not completed" : "completed";
  const completedStyle = props.isComplete
    ? "completed has-text-grey"
    : "has-text-white";
  const editForm = props.isFormVisible ? (
    <TodoForm
      title={props.title}
      description={props.description}
      handleEdit={props.handleEdit}
    />
  ) : null;
  return (
    <div className={`box has-background-black-ter ${completedStyle}`}>
      <h3 className="is-size-4">{props.title}</h3>
      <p className="is-size-5 mt-4 mb-5">{props.description}</p>
      <div className="buttons">
        <button
          className="button is-black is-small"
          onClick={props.handleComplete}
        >
          Mark as {buttonText}
        </button>
        <button
          className="button is-warning is-small"
          onClick={props.handleForm}
        >
          Edit
        </button>
        <button
          className="button is-danger is-small"
          onClick={props.handleDelete}
        >
          Delete
        </button>
      </div>
      {editForm}
    </div>
  );
}
