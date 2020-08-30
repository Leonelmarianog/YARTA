import React from "react";
import Todo from "./Todo.js";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // initial todos
    this.state = {
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
  }

  // event handler, this one is passed as a prop to each Todo component, this way, each child (Todo) has a way to tell
  // their parent (TodoList) to re-render them with new props.
  handleDelete(id) {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          handleDelete={this.handleDelete.bind(this, todo.id)} // method binding and also pass the id of each todo to be able to tell which one to delete
        />
      );
    });
    return <main>{todos}</main>;
  }
}
