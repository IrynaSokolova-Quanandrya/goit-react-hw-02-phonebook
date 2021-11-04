import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Input extends Component {
  inputId = nanoid();

  render() {
    return (
      <div>
        <label htmlFor={this.loginInputId}>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            id={this.inputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.loginInputId}>
          Number
          <input
            value={this.state.number}
            onChange={this.handleChange}
            id={this.inputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
    );
  }
}
