import React from "react";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TodoList />
      </div>
    );
  }
}
