import React, { Component } from 'react';
import uuid from 'uuid';
import '../styles/SignInWithSteam.css'

class SignInWithSteam
 extends Component {



  render() {
    return (

  <div className="SignInWithSteam">

  <p>Did you know you can sign in securely with
<br />
   Steam to access your personal Dota 2 profile?</p>
  <button className="btn-SignIn" type="button">Sign in with Steam </button>

   </div>

);

  }
}

export default SignInWithSteam;
