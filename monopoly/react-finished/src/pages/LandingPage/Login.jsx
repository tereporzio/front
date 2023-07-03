import React, { useState, useEffect, useContext } from "react";
import './Login.css';
import axios from 'axios';
import { AuthContext } from "../../auth/AuthContext";



function Login() {
  const {token, setToken} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("apretaste el form")
    // vamos a enviar post a login

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      email,
      password
    }).then((response) => {
      console.log(response)
      setError(false)
      setMsg("Login exitoso");
      const access_token = response.data.access_token;
      setToken(access_token);
     

    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Login;
