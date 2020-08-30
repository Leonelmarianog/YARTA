import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    // initial state of inputs
    this.state = {
      title: "",
      description: "",
    };

    // method binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // form validation
    if (
      /[^A-Za-z0-9]+/gi.test(this.state.title) ||
      /[^A-Za-z0-9]+/gi.test(this.state.description)
    ) {
      return;
    }
    // pass state (form data) to parent component
    this.props.handleAdd(this.state);
  }

  // input state tracking
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    // if input information is not valid, I want to render some error message.
    let error = null;
    if (
      /[^A-Za-z0-9]+/gi.test(this.state.title) ||
      /[^A-Za-z0-9]+/gi.test(this.state.description)
    ) {
      error = (
        <p style={{ color: "crimson" }}>Only letters and numbers allowed!.</p>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Todo:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add Todo</button>
        {error}
      </form>
    );
  }
}
