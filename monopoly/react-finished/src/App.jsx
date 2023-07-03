import React from 'react'
import { Toaster } from 'react-hot-toast';
import Router from './Router'
import axios from 'axios';


function App() {
  axios.get(`${import.meta.env.VITE_BACKEND_URL}`)
      .then((response) => {
        console.log(response.data); // Verifica la respuesta del servidor
        const jugador = response.data;
        setPlayerName(jugador.nombre); // Actualizar el nombre del jugador
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <>
      <Router />
      <Toaster position='bottom-center' toastOptions={
        {
          style: {
            background: '#191414',
            color: 'white',
            border: '1px solid #2e2c2c'
          }
        }
      }/>
    </>
  
  )
}

export default App
