import React, { Component } from "react";

export default class ContactList extends Component {
  render() {
    console.log(this.props.contacts);
    return (
      <ul className="contact__list">
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}
