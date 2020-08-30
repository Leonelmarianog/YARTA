import React from "react";
import Todo from "./Todo.js";

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((todo) => {
      return (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      );
    });
    return <main>{todos}</main>;
  }
}

TodoList.defaultProps = {
  todos: [
    {
      id: 0,
      title: "Build a vanilla JS App",
      description: "Gotta practice the basics.",
    },
    {
      id: 1,
      title: "Build a React App",
      description: "Practice makes perfect!.",
    },
    {
      id: 2,
      title: "Study more",
      description: "I have to improve!.",
    },
  ],
};
