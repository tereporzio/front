import React from "react";

function PartesDelJuego() {
  return (
    <div>
      <h3>Partes del juego</h3>
      <ul>
        <li>Tablero</li>
        <li>Fichas</li>
        <li>Dados</li>
     
      </ul>
      <div className="partes">
        <img src="../src/assets/tablerotigre.jpg" alt="tablero" />
        <img src="../src/assets/fichas.jpg" alt="Fichas" />
    
      </div>

    </div>
  );
}

export default PartesDelJuego;

