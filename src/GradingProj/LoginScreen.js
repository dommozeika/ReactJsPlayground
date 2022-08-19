import React, { useState } from "react";
import './App.css';

function LoginScreen() {
  return (
    <div className="App">
      <div className="Body">
        <h1 className="title">CS490 Final Project</h1>
        <h2 className="title">Welcome to your online grading system.</h2>
        {LoginForm()}
      </div>
    </div>
  );
}

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formValid =
      name.length > 0 &&
      password.length > 0;
    if (!formValid) {

      return;
    }
    if (!localStorage.getItem("messages")) {
      localStorage.setItem("messages", JSON.stringify([]));
    }
    const messages = JSON.parse(localStorage.getItem("messages"));
    messages.push({
      name,
      password
    });
    localStorage.setItem("messages", JSON.stringify(messages));
    onReset();

  };

  const onReset = () => {
    setName("");
    setPassword("");
  };

  return (
    <div className="loginForm">
      <form onSubmit={submit} onReset={onReset}>
        <div>
          <label style={{color: "white"}} >Name:</label><br></br>
          <input style={{margin: 5}} value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label style={{color: "white"}}>Password:</label><br></br>
          <input style={{margin: 5}} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={{margin: 5}} type="submit">submit</button>
      </form>
    </div>
  );
}

export default LoginScreen;