import React, { useState } from "react";
import "./playlist.css";
import PartesDelJuego from "../../components/PartesDelJuego/PartesDelJuego.jsx";

function Playlist() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPartes, setShowPartes] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePartes = () => {
    setShowPartes(!showPartes);
  };

  return (
    <main className="Playlist">
      <div className="button-container-wrapper">
        <div className="button-container">
          <button onClick={togglePopup}>Reglas</button>
          <button onClick={togglePopup}>Partes del juego</button>
        </div>
      </div>
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <h2>Partes del Juego</h2>
            {showPartes && <PartesDelJuego />}
            <p>Contenido del popup</p>
            <button onClick={togglePartes}>Tablero</button>
            <button onClick={togglePartes}>Fichas</button>
            <button onClick={togglePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </main>
  );
}



export default Playlist;