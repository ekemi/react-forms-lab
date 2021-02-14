import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      handleLogin: function (params) {
        console.log(params)
        
      }
    };
  }

handleUsername = (event)=>{
  this.setState({
    username: event.target.value
  })
}

handlePassword= (event)=> {
  this.setState({
    password: event.target.value
  })
}
handleSubmit = event=>{
  event.preventDefault()
  let dataInput = {username:this.state.username, password:this.state.password}
  this.setState(this.state.handleLogin(this.state.username,this.state.password))
}
  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
