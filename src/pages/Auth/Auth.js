import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { ReactReduxContext } from "react-redux";

const Auth = () => {
  let [auth, setAuth] = useState(false);
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>AlghorithmicsGram</h1>
          <h6>Developed by Orujov</h6>
        </div>
      </div>

      {auth ? <SignUp/> : <LogIn/>}
    </div>
  );
  function LogIn() {
    
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              />
          </div>
  
          <div>
              <span className="toAuthSpan" onClick={() => setAuth(auth = true)}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
            />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            />
        </div>

        <div>
            <span className="toLoginSpan" onClick={() => setAuth(auth = false)}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

};
export default Auth;
