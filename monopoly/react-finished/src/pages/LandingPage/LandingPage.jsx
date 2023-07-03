import React from "react";
import { Link } from "react-router-dom";
import './landing.css';
import Login from "./Login";


function LandingPage() {
  return (
    <main className="content">
      <div className="bg-container"></div>
      <div className="content">
        <div className="log">
              <Login />
            <div className= "Login">
              <a href='/Signup'> No tienes cuenta? Registrate </a>
            </div>
          
        </div>
        <Link className="play-button" to="/board">
          A jugar!
        </Link>
      </div>
    </main>
  );
}

export default LandingPage;
