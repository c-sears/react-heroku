import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

import axios from 'axios'



class App extends Component {

  state = {
    message: '',
    data: {
      user:'caleb',
      email:'email'
    }
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({message: res.message}))
      .catch(err => console.log(err))
  }

  callApi = async () =>{
    const response = await fetch('/api/hello')
    const body = await response.json()

    if(response.status !== 200) throw Error(body.message)
    
    return body
  }

  handleClick = () =>{
    

    fetch('/api/addUser', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => {
      console.log("this is res", res)
    }).catch((err) => {
      console.log(err)
    })  
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.message}</p>

        <button onClick={this.handleClick}>click me to send data</button>
      </div>
    );
  }
}

export default App;
