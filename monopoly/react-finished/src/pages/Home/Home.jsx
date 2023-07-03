import React from "react";
import { Link } from "react-router-dom";
import './home.css';


function Home() {

  // const[currentForm, setCurrentForm] = useState('login');

  return (
    <main className="content">
        <div className="bg-container"></div>
        <div className="content">
            <h1> Diviertete como nunca antes! </h1>
          
            
            <Link className="play-button" to="/playlist">
                Let's own the world!
            </Link>
         
        </div>
      
    </main>
  )


}

export default Home;