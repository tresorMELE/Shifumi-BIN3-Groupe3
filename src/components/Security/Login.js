import { useState } from "react";
import jwtDecode from "jwt-decode";
import React from 'react'



function Login() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(localStorage.getItem("token"));

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
  
    e.preventDefault();
    fetch("http://fauques.freeboxos.fr:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        setUser(data.token);
        console.log(jwtDecode(data.token));
        window.location.href="http://fauques.freeboxos.fr:3000/matchs";
      });
  }

  function Logout(){
    
    localStorage.clear();
    <button onclick="deconnexion()">Logout</button>
    window.location.href = '/';
  }
  
  return user ? (
    
    <span>Already Logged....
      <ul>
      <button onClick={Logout} variant="contained">
        Déconnexion
      </button>
      </ul>
    </span>
    
   ) : (

    
    <form onSubmit={handleSubmit}>
      <input name="username" value={values.username} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
    
  );

}

export default Login;