import React, { useState, useEffect, useRef } from "react";
import "./Board.css";
import axios from 'axios';

export default function Board() {
  const [playerName, setPlayerName] = useState('');
  const [diceRoll, setDiceRoll] = useState('');
  const [jugadorId, setJugadorId] = useState('');
  const [turnoActual, setTurnoActual] = useState(0);
  const [position, setPosition] = useState(0);
  const cartierRef = useRef(null);
  const rolexRef = useRef(null);
  const fortuna37Ref = useRef(null);
  const swarovskiRef = useRef(null);
  const rail35Ref = useRef(null);
  const spacefeeRef = useRef(null);
  const rollsRef = useRef(null);
  const arca32Ref = useRef(null);
  const maseratiRef = useRef(null);
  const jailRef = useRef(null);
  const hboRef = useRef(null);
  const netflixRef = useRef(null);
  const arca7Ref = useRef(null);
  const disneyRef = useRef(null);
  const arca22Ref = useRef(null);
  const rail5Ref = useRef(null);
  const underarmourRef = useRef(null);
  const northfaceRef = useRef(null);  
  const parkingRef = useRef(null);
  const burgerRef = useRef(null);
  const fortuna12Ref = useRef(null);
  const starbucksRef = useRef(null);
  const mcdonaldsRef = useRef(null);
  const railroad15Ref = useRef(null);
  const windowsRef = useRef(null);
  const waterworksRef = useRef(null);
  const gojailRef = useRef(null);
  const playRef = useRef(null);
  const xboxRef = useRef(null);
  const arca23Ref = useRef(null);
  const nintendoRef = useRef(null);
  const rail25Ref = useRef(null);
  const fortuna26Ref = useRef(null);
  const ralphRef = useRef(null);
  const tax28Ref = useRef(null);
  const electricRef = useRef(null);
  const louisRef = useRef(null);
  const appleRef = useRef(null);
  const nikeRef = useRef(null);
  const hpRef = useRef(null);

  const actualizarTurno = () => {
    const idJuego = 0; // Reemplaza el valor 0 con el ID del juego que corresponda
    
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/actualizar_turno`, { idJuego })
      .then((response) => {
        console.log(response.data);
        const turnoActual = response.data.turno;
        const jugadorId = response.data.jugadorId;
        console.log(jugadorId);
        setPlayerName(` Jugador ${turnoActual}`);
        setJugadorId(jugadorId);
        setTurnoActual(turnoActual); // Guardar el turno actual en el estado
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const tirarDado = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/tirar_dados/${turnoActual}`)
      .then((response) => {
        console.log(`el jugador es ${turnoActual}`);
        console.log(response.data);
        const data = response.data;
        const sumaDados = data.suma; 
        setDiceRoll(`${sumaDados}`);
        alert(`El jugador ${turnoActual} está en la casilla ${data.posicion}.`);
  
        const posicionNueva = data.posicion;
      
  
        casillasLibres(posicionNueva); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const casillasLibres = (posicionNueva) => {
    
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/casillas_libres/${turnoActual}`, { idCasilla: posicionNueva })
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const renderFicha = (row, col) => {
    const casillaRef = useRef(null);
  
    useEffect(() => {
      if (casillaRef.current) {
        console.log('ID de la casilla:', casillaRef.current.id);
      }
    }, [casillaRef]);
  
    return (
      <div className="casilla" ref={casillaRef} id={row * 10 + col}>
        {position === row * 10 + col && (
          <img src="../src/assets/perro.png" alt="ficha" className="ficha" />
        )}
      </div>
    );
  };
  
  
  
  
     return (
    <div className="table">
      <div className="board">
        <div className="center">
    
          <img src="../src/assets/logo_tigre.png" alt="logo-image" className="imagen-tablero" />
        </div>

        <div className="space corner go" id="0">
          <div className="container">
            <div className="go-word">Tigre</div>
            {/* <div className="instructions"> Cobra $200</div> */}
            <img src="../src/assets/perro.png" alt="perro" className="perro" />
            <img src="../src/assets/auto.png" alt="auto" className="auto" />
            <img src="../src/assets/barco.png" alt="barco" className="barco" />
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>

        <div className="row horizontal-row bottom-row">
          <div className="space property">
            <div className="container">
              <div className="color-bar light-blue"></div>
              <div className="name" ref={cartierRef} id="39">Cartier</div>
              <div className="price"> $240 </div>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar light-blue"></div>
              <div className="name" ref={rolexRef} id="38">Rolex</div>
              <div className="price">$220</div>
            </div>
          </div>
          <div className="space chance">
            <div className="container">
              <div className="name" ref={fortuna37Ref} id="37">Fortuna</div>
              <i className="drawing fa fa-question"></i>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar light-blue"></div>
              <div className="name" ref={swarovskiRef} id="36">Swarovski</div>
                  {renderFicha(3, 4)}
              <div className="price">$220</div>
            </div>
          </div>
          <div className="space railroad" ref={rail35Ref}id="35">
            <div className="container">
              
            </div>
          </div>
          <div className="space fee income-tax" ref={spacefeeRef} id="34">
            <div className="container">
  
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar dark-purple"></div>
              <div className="name" ref={rollsRef} id="33">Rolls Royce</div>
              <div className="price">$80</div>
            </div>
          </div>
          <div className="space community-chest">
            <div className="container">
              <div className="name" ref={arca32Ref} id="32">Arca Comunal</div>
              <i className="drawing fa fa-cube"></i>
              
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar dark-purple"></div>
              <div className="name three-line-name" ref={maseratiRef} id="31">Maserati</div>
              <div className="price">$80</div>
            </div>
          </div>
        </div>

        <div className="space corner jail">
         
          <div className="drawing">
            <div className="container">
              <div className="name">In</div>
              <div className="window">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <i className="person fa fa-frown-o"></i>
              </div>
              <div className="name" ref={jailRef} id="10">Jail</div>
            </div>
          </div>
       
        </div>

        <div className="row vertical-row left-row">
          <div className="space property">
            <div className="container">
              <div className="color-bar orange"></div>
              <div className="name"  ref={hboRef} id="9">HBO max</div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar orange"></div>
              <div className="name" ref={netflixRef} id="8">Netflix</div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="space community-chest">
            <div className="container">
              <div className="name" ref={arca7Ref} id="7">Arca comunal</div>
              <i className="drawing fa fa-cube"></i>
             
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar orange"></div>
              <div className="name" ref={disneyRef} id="6">Disney + </div>
              <div className="price">$100</div>
            </div>
          </div>
          <div className="space railroad" ref={rail5Ref} id="5">
            <div className="container">
           
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar purple"></div>
              <div className="name" ref={underarmourRef} id="4">Under Armour</div>
              <div className="price">$60</div>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar purple"></div>
              <div className="name" ref={northfaceRef} id="3">The North Face </div>
              <div className="price">$60</div>
            </div>
          </div>
          <div className="space utility electric-company"  ref={electricRef}id="2">
            <div className="container">
             
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar purple"></div>
              <div className="name" ref={nikeRef} id="1">Nike</div>
              <div className="price">$60</div>
            </div>
          </div>
        </div>

        <div className="space corner free-parking">
          <div className="container">
            <div className="name">Free</div>
            <i className="drawing fa fa-car"></i>
            <div className="name" ref={parkingRef} id="20">Parking</div>
          </div>
        </div>

        <div className="row horizontal-row top-row">
          <div className="space property">
            <div className="container">
              <div className="color-bar red"></div>
              <div className="name" ref={burgerRef} id="11">Burger King</div>
              <div className="price">$120</div>
            </div>
          </div>
          <div className="space chance">
            <div className="container">
              <div className="name" ref={fortuna12Ref} id="12">Fortuna</div>
              <i className="drawing fa fa-question blue"></i>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar red"></div>
              <div className="name" ref={starbucksRef} id="13">Starbucks</div>
              <div className="price">$120</div>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar red"></div>
              <div className="name" ref={mcdonaldsRef} id="14">McDonalds</div>
              <div className="price">$120</div>
            </div>
          </div>
          <div className="space railroad" ref={railroad15Ref} id="15">
            <div className="container">
            
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar yellow"></div>
              <div className="name" ref={hpRef} id="16">Hp</div>
              <div className="price">$140</div>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar yellow"></div>
              <div className="name"  ref={windowsRef} id="17">Windows</div>
              <div className="price">$140</div>
            </div>
          </div>
          <div className="space utility waterworks" ref={waterworksRef}  id="18">
            <div className="container">
      
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar yellow"></div>
              <div className="name" ref={appleRef} id="19">Apple</div>
              <div className="price">$140</div>
            </div>
          </div>
        </div>

        <div className="space corner go-to-jail" ref={gojailRef} id="30">
          <div className="container">
            <div className="name">Go To</div>
            <i className="drawing fa fa-gavel"></i>
            <div className="name">Jail</div>
          </div>
        </div>

        <div className="row vertical-row right-row">
          <div className="space property">
            <div className="container">
              <div className="color-bar green"></div>
              <div className="name" ref={playRef} id="21">Play Station</div>
              <div className="price">$160</div>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar green"></div>
              <div className="name three-line-name" ref={xboxRef} id="22">XBox</div>
              <div className="price">$160</div>
            </div>
          </div>
          <div className="space community-chest">
            <div className="container">
              <div className="name" ref={arca23Ref} id="23">Arca comunal</div>
              <i className="drawing fa fa-cube"></i>
             
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar green"></div>
              <div className="name long-name" ref={nintendoRef} id="24">Nintendo</div>
              <div className="price">$160</div>
            </div>
          </div>
          <div className="space railroad" ref={rail25Ref} id="25">
            <div className="container">
          
            </div>
          </div>
          <div className="space chance">
            <div className="container">
              <div className="name"  ref={fortuna26Ref} id="26">Fortuna</div>
              <i className="drawing fa fa-question"></i>
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar dark-blue"></div>
              <div className="name" ref={ralphRef} id="27">Ralph Lauren</div>
              <div className="price">$180</div>
            </div>
          </div>
          <div className="space fee luxury-tax" ref={tax28Ref} id="28">
            <div className="container">
             
            </div>
          </div>
          <div className="space property">
            <div className="container">
              <div className="color-bar dark-blue"></div>
              <div className="name" ref={louisRef} id="29">Louis Viutton</div>
              <div className="price"> $180</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dice">
        <div className={`dice-side side-${diceRoll}`}></div>
        <button onClick={actualizarTurno}>Actualizar Turno</button>
        <button onClick={tirarDado}>Tirar Dado</button>
        
      </div>
      <div className="turno">
        Turno : {playerName}
        <br/>
        Resultado del dado: {diceRoll}

      </div>
    </div>


    
  );
};

