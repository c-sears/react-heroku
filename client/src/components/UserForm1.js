import React, { Component } from 'react';

class UserForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    fetch('/api/addUser', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" value="blah" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" value="blah@blah" />

        <label htmlFor="birthdate">Enter your birth date</label>
        <input id="birthdate" name="birthdate" type="text" value="blah" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default UserForm;