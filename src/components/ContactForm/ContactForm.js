import React, { Component } from "react";
import "../ContactForm/ContactForm.css";
// import Input from "../Input/Input";
import { nanoid } from "nanoid";

export default class ContactForm extends Component {
  inputId = nanoid();
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    this.setState({ [name]: value });
    // console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="label" htmlFor={this.loginInputId}>
          Name
          <input
            className="input"
            value={name}
            onChange={this.handleChange}
            id={this.inputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className="label" htmlFor={this.loginInputId}>
          Number
          <input
            className="input"
            value={number}
            onChange={this.handleChange}
            id={this.inputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className="btn">
          Add contact
        </button>
      </form>
    );
  }
}
