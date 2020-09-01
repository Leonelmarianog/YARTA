import React from "react";
import Todo from "./Todo.js";
import TodoForm from "./TodoForm.js";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    // initial todo list
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

  // event handler, this one is passed as a prop to each Todo component, this way, each child (Todo) has a way to tell
  // their parent (TodoList) to re-render them with new props.
  // It removes a Todo from the page.
  handleDelete(id) {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  }

  // Just like the above event handler, this one is passed to a child component (TodoForm).
  // It receives form data from a child component and updates state based on that data.
  // It adds a new todo to the page.
  handleAdd(newTodo) {
    const newTodos = [...this.state.todos];
    newTodos.push({ id: this.state.nextId, ...newTodo });
    this.setState({
      todos: newTodos,
      nextId: this.state.nextId + 1,
    });
  }

  // event handler to edit a todo, It receives an id and the updated data of a todo.
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
      <div>
        <TodoForm handleAdd={this.handleAdd} />
        <main>{todos}</main>
      </div>
    );
  }
}
