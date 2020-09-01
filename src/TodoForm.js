import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    // initial state of inputs
    // If this component is used by the TodoList, the state is set to a default prop.
    // Otherwise if this component is used by a Todo, then the state is set with props passed to said Todo.
    this.state = {
      title: this.props.title,
      description: this.props.description,
    };

    // method binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Event handler to handle the submit of the form
  // It validates the inputs and passes state to a parent component.
  handleSubmit(event) {
    event.preventDefault();
    if (
      /[^A-Za-z0-9 ]+/gi.test(this.state.title) ||
      /[^A-Za-z0-9 ]+/gi.test(this.state.description)
    ) {
      return;
    }
    if (this.props.handleEdit) {
      this.props.handleEdit(this.state);
    } else {
      this.props.handleAdd(this.state);
    }
  }

  // Event handler to keep track of the input data.
  // This allows React to keep track of the state of the inputs.
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const buttonText = this.props.handleEdit ? "Edit Todo" : "Add Todo";
    // if input information is not valid, I want to render some error message.
    let error = null;
    if (
      /[^A-Za-z0-9 ]+/gi.test(this.state.title) ||
      /[^A-Za-z0-9 ]+/gi.test(this.state.description)
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
        <button type="submit">{buttonText}</button>
        {error}
      </form>
    );
  }
}

TodoForm.defaultProps = {
  title: "",
  description: "",
};
