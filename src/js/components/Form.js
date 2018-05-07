// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { releaseNumber } = this.state;
    const id = uuidv1();
    this.props.addArticle({ name, releaseNumber, id });
    this.setState({ 
      name: "",
      releaseNumber: "" });
  }
  render() {
    const { name } = this.state;
    const { releaseNumber } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="from-group">
          <label htmlFor="releaseNumber">Release Number</label>
          <input
            type="number"
            className="form-control"
            id="releaseNumber"
            value={releaseNumber}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;