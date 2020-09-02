import React from "react";
import Header from "./Header.js";
import TodoList from "./TodoList.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
      </div>
    );
  }
}
