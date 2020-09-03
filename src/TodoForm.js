import React from "react";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    // initial state of inputs
    // If this component is used by the TodoList, the state is set to a default prop.
    // Otherwise if this component is used by a Todo, then the state is set with props passed to said Todo.
    this.state = {
      fields: {
        title: this.props.title,
        description: this.props.description,
      },
      errors: {},
    };

    // method binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Input validation
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // title validation
    if (!fields.title) {
      formIsValid = false;
      errors.title = "The Title field can't be empty";
    }

    if (/[^A-Za-z0-9 ]+/.test(fields.title)) {
      formIsValid = false;
      errors.title = "Only letters and numbers allowed";
    }

    // description validation
    if (!fields.description) {
      formIsValid = false;
      errors.description = "The description field can't be empty";
    }

    if (/[^A-Za-z0-9 ]+/.test(fields.description)) {
      formIsValid = false;
      errors.description = "Only letters and numbers allowed";
    }

    this.setState({ errors });
    return formIsValid;
  }

  // Event handler to handle the submit of the form
  // It validates the inputs and passes state to a parent component.
  handleSubmit(event) {
    event.preventDefault();

    const isValid = this.handleValidation();
    if (!isValid) return;

    // clear errors
    this.setState({ errors: {} });

    if (this.props.handleEdit) {
      this.props.handleEdit(this.state.fields);
    } else {
      this.props.handleAdd(this.state.fields);
      this.setState({
        fields: {
          title: "",
          description: "",
        },
      });
    }
  }

  // Event handler to keep track of the input data.
  // This allows React to keep track of the state of the inputs.
  handleChange(event) {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  }

  render() {
    const buttonText = this.props.handleEdit ? "Save" : "Add Todo";
    const buttonColor = this.props.handleEdit ? "is-success" : "is-black";
    const titleFocus = this.state.errors.title ? "is-danger" : "";
    const titleError = this.state.errors.title ? (
      <p className="help is-danger is-size-5 is-size-6-tablet is-size-6-mobile has-text-centered">
        {this.state.errors.title}
      </p>
    ) : null;
    const descriptionFocus = this.state.errors.description ? "is-danger" : "";
    const descriptionError = this.state.errors.description ? (
      <p className="help is-danger is-size-5 is-size-6-tablet is-size-6-mobile has-text-centered">
        {this.state.errors.description}
      </p>
    ) : null;
    return (
      <form onSubmit={this.handleSubmit} className="mt-4">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field-label is-normal">
              <label className="label has-text-white">Title</label>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className={`input ${titleFocus}`}
                  type="text"
                  name="title"
                  value={this.state.fields.title}
                  onChange={this.handleChange}
                />
              </div>
              {titleError}
            </div>

            <div className="field-label is-normal">
              <label className="label has-text-white">Description</label>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className={`input ${descriptionFocus}`}
                  type="text"
                  name="description"
                  value={this.state.fields.description}
                  onChange={this.handleChange}
                />
              </div>
              {descriptionError}
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button type="submit" className={`button ${buttonColor}`}>
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

TodoForm.defaultProps = {
  title: "",
  description: "",
};
