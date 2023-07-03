import React from "react";
import './about-us.css'


function AboutUs() {
  return (
    <main className="content">
      <div className="bg-container"></div>
      <div className="content">
        <div className="header">
        </div>
       
          <div className="cards-container">
              <div className="card">
              <img src="../src/assets/trini_ok.png" alt="logo-image" className="nosotras" />
                <h3>Trini</h3>
                <p>Ingeniera en Software</p>
              </div>
              <div className="card">
              <img src="../src/assets/tere.jpg" alt="logo-image" className="nosotras"  />
                <h3>Tere</h3>
                <p>Ingeniera en Software</p>
              </div>
</div>


      </div>
    </main>
  )
}

export default AboutUs;
