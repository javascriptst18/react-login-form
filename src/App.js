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

  // We need to submit the form
  onSubmit = (event) => {
    // Always prevent the form from submitting
    event.preventDefault();
    /**
     * If email and password is not empty, change the logged in state to true
     */
    if(this.state.email && this.state.password){
      this.setState({ 
        loggedIn: true,
        email: '',
        password: ''
      });
    }
  }

  // This replaces both handleEmail and handlePassword
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.email);
    });
  }
  
  render() {
    let email = null;
    if(this.state.email){
      email = <h2> {this.state.email} </h2>
    }
    return (
      <div className="App">
        { email }
        {
          this.state.loggedIn && <div><h2> Logged in </h2></div>
        }
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" onChange={this.handleChange} value={this.state.email}
              type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="password" onChange={this.handleChange} value={this.state.password}
              type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
  }
 }
        
export default App;
