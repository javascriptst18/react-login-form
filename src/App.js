import React, { Component } from 'react';
import './App.css';

/**
 * This form is taken from: https://getbootstrap.com/docs/4.1/components/forms/
 * Bootstrap is linked in 'public/index.html'
 */

class App extends Component {

  state = {
    loggedIn: false,
    email: '',
    password: ''
  }

  // This will happen last
  onSubmit = () => {

  }

  // Every input needs an event handler
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  
  render() {
    return (
      <div className="App">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={this.handleEmail} value={this.state.email}
              type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={this.handlePassword} value={this.state.password}
              type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
  }
 }
        
export default App;
