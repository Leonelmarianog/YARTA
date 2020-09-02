import React from "react";
import Todo from "./Todo.js";
import TodoForm from "./TodoForm.js";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // initial state of the todos
    // Each todo has an identifier, a title, and a description.
    // The key "isComplete" is used to add/remove a style from the todo to show it as complete/incomplete.
    // The key "isFormVisible" is used to show/hide an edit form on each todo.
    this.state = {
      todos: [
        {
          id: 0,
          title: "Build a vanilla JS App",
          description: "Gotta practice the basics.",
          isComplete: false,
          isFormVisible: false,
        },
        {
          id: 1,
          title: "Build a React App",
          description: "Practice makes perfect!.",
          isComplete: false,
          isFormVisible: false,
        },
        {
          id: 2,
          title: "Study more",
          description: "I have to improve!.",
          isComplete: false,
          isFormVisible: false,
        },
      ],
      nextId: 3,
    };

    // method binding
    this.handleAdd = this.handleAdd.bind(this);
  }

  // These event handlers are passed down to child components as props. Each child will call these event handlers and pass
  // them required data for this component to be able to update state and re-render their childs with new props.

  // Event handler to delete a todo.
  // it receives the id of a todo to identify it and remove it from state.
  handleDelete(id) {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  }

  // Event handler to add a new todo.
  // It receives the data of a new todo and adds it to state.
  handleAdd(newTodo) {
    const newTodos = [...this.state.todos];
    newTodos.push({ id: this.state.nextId, ...newTodo });
    this.setState({
      todos: newTodos,
      nextId: this.state.nextId + 1,
    });
  }

  // Event handler to edit a todo.
  // It receives the id of a todo to identify it and the modified data of said todo.
  // It updates state with the new data.
  handleEdit(id, editedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          id,
          ...editedTodo,
        };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  // Event handler to handle the state of each todo.
  // It receives the id of a todo to identify it and a key that can be either "isComplete" or "isFormVisible"
  // It updates the state of a todo to be either completed/incompleted or to show/hide a form.
  handleToggle(id, key) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: !todo[key],
        };
      }
      return todo;
    });
    this.setState({ todos: todos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          isComplete={todo.isComplete}
          isFormVisible={todo.isFormVisible}
          handleDelete={this.handleDelete.bind(this, todo.id)} // method binding and also pass the id of each todo to be able to tell which one to delete
          handleEdit={this.handleEdit.bind(this, todo.id)} // method binding and also pass the id of each todo to be able to tell which one to edit
          handleComplete={this.handleToggle.bind(this, todo.id, "isComplete")}
          handleForm={this.handleToggle.bind(this, todo.id, "isFormVisible")}
        />
      );
    });
    return (
      <div className="container is-fluid">
        <TodoForm handleAdd={this.handleAdd} />
        <main className="my-6">{todos}</main>
      </div>
    );
  }
}
