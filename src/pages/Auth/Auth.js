import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { connect } from "react-redux";
import store from "../../redux/store";
import {addUser} from "../../redux/action";
import {loginAcc} from "../../redux/action";

const Auth = () => {
  let [auth, setAuth] = useState(false);
  let [incorrect, setIncorr] = useState("");
  const login = () =>{
    console.log("fun");
    store.dispatch(loginAcc(document.querySelectorAll(".infoInputL")));
  }
  const autorithation=()=>{
    if(document.querySelectorAll(".infoInputR")[3].value !== document.querySelectorAll(".infoInputR")[4].value){
      setIncorr(incorrect = "Passwords do not match.")
    }
    else if(
      document.querySelectorAll(".infoInputR")[0].value !== "" &&
      document.querySelectorAll(".infoInputR")[1].value !== "" &&
      document.querySelectorAll(".infoInputR")[2].value !== "" &&
      document.querySelectorAll(".infoInputR")[3].value !== "" 
      ){
        setIncorr(incorrect = "You have successfully registered.");
        document.querySelector(".toLoginSpanR").style.color = "green";
        console.log(document.querySelector(".toLoginSpanR"));
        store.dispatch(addUser(document.querySelectorAll(".infoInputR")));
      }
    }
    const handleSubmit = event => {
      event.preventDefault();
    };
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
        <form onSubmit={handleSubmit} className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInputL"
              name="username"
              />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInputL"
              placeholder="Password"
              name="password"
              />
          </div>
  
          <div>
              <span className="toAuthSpan" onClick={() => setAuth(auth = true)}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton" onClick={() => login()}>Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
  return (
    <div className="a-right">
      <form onSubmit={handleSubmit} className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInputR"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInputR"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInputR"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInputR"
            name="password"
            placeholder="Password"
            />
          <input
            type="password"
            className="infoInputR"
            name="confirmpass"
            placeholder="Confirm Password"
            />
        </div>

            <span className="toLoginSpanR">{incorrect}</span>
        <div>
            <span className="toLoginSpan" onClick={() => setAuth(auth = false)}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit" onClick={() => autorithation()}>Signup</button>
      </form>
    </div>
  );
}

};

const mapStateToProps = (state) => {
  return {
    permission : state.permission
  }
};

export default connect(mapStateToProps)(Auth);
