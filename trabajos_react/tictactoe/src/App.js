import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./tictactoe"; // Asegúrate de que la ruta sea correcta

function App() {
  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");
  const [juegoIniciado, setJuegoIniciado] = useState(false); // Nuevo estado

  const handleSubmit = (e) => {
    e.preventDefault();

    setJugador1(e.target.jugador1.value, () => {
      console.log("Jugador 1 actualizado: ", jugador1);
    });
    setJugador2(e.target.jugador2.value, () => {
      console.log("Jugador 2 actualizado: ", jugador2);
    });

    console.log(`Jugador 1: ${jugador1}\nJugador 2: ${jugador2}`);
    setJuegoIniciado(true); // Actualiza el estado para mostrar TicTacToe
  };

  return (
    <>
      {juegoIniciado ? (
        <TicTacToe jugador1={jugador1} jugador2={jugador2} />
      ) : (
        <div className="contenedor">
        <form id="formJugadores" onSubmit={handleSubmit}>
          <h1>¡Ingresa tus Nombres!</h1>
          <div className="grupo-input">
            <label htmlFor="jugador1">Jugador 1:</label>
            <input
              type="text"
              id="jugador1"
              name="jugador1"
              required
              value={jugador1}
              onChange={(e) => setJugador1(e.target.value)}
            />
          </div>
          <div className="grupo-input">
            <label htmlFor="jugador2">Jugador 2:</label>
            <input
              type="text"
              id="jugador2"
              name="jugador2"
              required
              value={jugador2}
              onChange={(e) => setJugador2(e.target.value)}
            />
          </div>
          <button type="submit">¡Comenzar Juego!</button>
        </form>
    </div>
      )}
    </>
  );
}

export default App;