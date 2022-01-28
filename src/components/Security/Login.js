import { useState } from "react";
import jwtDecode from "jwt-decode";
import React from 'react'
import { useNavigate } from "react-router-dom";



function Login() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [user, setUser] = useState(localStorage.getItem("token"));
  //const [handleClick] = useNavigate("http://fauques.freeboxos.fr:3000/matchs");
  /*const YourComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("http://fauques.freeboxos.fr:3000/matchs");
    }*/

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  // VanillaJS approach (Closure)
  //function handleChange(name) {
  //  return function (e) {
  //    setValues({ ...values, [name]: e.target.value });
  //  };
  //}

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
        // window.location.href = './';
      });
  }

  function Logout(){
    localStorage.clear();
    <button onclick="deconnexion()">DECONNEXION</button>
    window.location.href = './login';
  }
  
  return user ? (
    <span>Already Logged....
      <ul>
      <button onClick={Logout}>
        Deconnexion
      </button>
      </ul>
    </span>
    
    
    //<div><button onClick={handleClick} type="button" /></div>
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