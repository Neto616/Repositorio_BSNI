import React, { useState } from "react"; // Importa React y el hook useState
import "./App.css"; // Importa los estilos CSS definidos en App.css
import TicTacToe from "./tictactoe"; // Importa el componente TicTacToe desde tictactoe.js

function App() {
  // Define los estados para los nombres de los jugadores y el estado del juego
  const [jugador1, setJugador1] = useState(""); // Estado para el nombre del jugador 1
  const [jugador2, setJugador2] = useState(""); // Estado para el nombre del jugador 2
  const [juegoIniciado, setJuegoIniciado] = useState(false); // Estado para indicar si el juego ha comenzado

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Actualiza los estados con los valores del formulario y muestra logs en la consola
    setJugador1(e.target.jugador1.value, () => {
      console.log("Jugador 1 actualizado: ", jugador1);
    });
    setJugador2(e.target.jugador2.value, () => {
      console.log("Jugador 2 actualizado: ", jugador2);
    });

    // Muestra los nombres de los jugadores en la consola
    console.log(`Jugador 1: ${jugador1}\nJugador 2: ${jugador2}`);
    setJuegoIniciado(true); // Actualiza el estado para mostrar el componente TicTacToe
  };

  // Renderiza el componente principal
  return (
    <>
      {/* Renderizado condicional: muestra TicTacToe si el juego ha comenzado, de lo contrario muestra el formulario */}
      {juegoIniciado ? (
        <TicTacToe jugador1={jugador1} jugador2={jugador2} /> // Muestra el componente TicTacToe con los nombres de los jugadores
      ) : (
        <div className="contenedor">
          {/* Formulario para ingresar los nombres de los jugadores */}
          <form id="formJugadores" onSubmit={handleSubmit}>
            <h1>¡Ingresa tus Nombres!</h1>
            <div className="grupo-input">
              {/* Campo de entrada para el nombre del jugador 1 */}
              <label htmlFor="jugador1">Jugador 1:</label>
              <input
                type="text"
                id="jugador1"
                name="jugador1"
                required
                value={jugador1}
                onChange={(e) => setJugador1(e.target.value)} // Actualiza el estado al cambiar el valor del input
              />
            </div>
            <div className="grupo-input">
              {/* Campo de entrada para el nombre del jugador 2 */}
              <label htmlFor="jugador2">Jugador 2:</label>
              <input
                type="text"
                id="jugador2"
                name="jugador2"
                required
                value={jugador2}
                onChange={(e) => setJugador2(e.target.value)} // Actualiza el estado al cambiar el valor del input
              />
            </div>
            {/* Botón para iniciar el juego */}
            <button type="submit">¡Comenzar Juego!</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App; // Exporta el componente App