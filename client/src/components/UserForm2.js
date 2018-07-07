import React, { Component } from 'react';

class UserForm2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      birthday: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setSate(newState)
    console.log(newState)
  }

  handleSubmit = (e, message) => {
    e.preventDefault()
    let formData  = {
      formUsername: this.state.username,
      formEmail: this.state.email,
      formBirthday: this.state.birthday
    }
    console.log(formData)

    // validation here, if required and time permits

    // fetch('/api/addUser', {
    //   method: 'POST',
    //   body: formData,
    // });

    // this.setState ({
    //   username: '',
    //   email: '',
    //   birthday: ''
    // })

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

export default UserForm2;