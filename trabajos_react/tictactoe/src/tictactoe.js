import React from 'react'
import './tictactoe.css'

function TicTacToe(props){
    console.log(props)
    return (
        <div className="contenedor-principal">
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afedb0a4-4d1d-476f-9820-f77051e5a41c/d45mqil-de6920be-d5cc-4824-a634-cedba0e7d3ca.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmZWRiMGE0LTRkMWQtNDc2Zi05ODIwLWY3NzA1MWU1YTQxY1wvZDQ1bXFpbC1kZTY5MjBiZS1kNWNjLTQ4MjQtYTYzNC1jZWRiYTBlN2QzY2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kMYDL3ustLyKYKxNXb1QQ2qDypwe1uHGRYFZHrA6vH8"
            alt="GIF Izquierdo"
            className="gif-lateral gif-izquierdo"
        />
        <div className="contenedor">
          <div className="jugador-izquierdo" id="nombreJugador1">
            <img src="tu_imagen_jugador1.png" className="imagen-jugador" />
            <span className="nombre-jugador">{props.jugador1}</span>
          </div>
  
          <div className="jugador-derecho notTurn" id="nombreJugador2">
            <span className="nombre-jugador">{props.jugador2}</span>
            <img src="tu_imagen_jugador2.png" className="imagen-jugador" />
          </div>
          <h1>Tic Tac Toe Retro</h1>
          <div class="tablero">
            <div className="celda circulo" id="0">O</div>
            <div className="celda cruz" id="1">X</div>
            <div className="celda circulo" id="2">O</div>
            <div className="celda circulo" id="3">O</div>
            <div className="celda cruz" id="4">X</div>
            <div className="celda cruz" id="5">X</div>
            <div className="celda circulo" id="6">O</div>
            <div className="celda cruz" id="7">X</div>
            <div className="celda circulo" id="8">O</div>
          </div>
  
          <div className="mensaje"></div>
        </div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afedb0a4-4d1d-476f-9820-f77051e5a41c/d45mqil-de6920be-d5cc-4824-a634-cedba0e7d3ca.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmZWRiMGE0LTRkMWQtNDc2Zi05ODIwLWY3NzA1MWU1YTQxY1wvZDQ1bXFpbC1kZTY5MjBiZS1kNWNjLTQ4MjQtYTYzNC1jZWRiYTBlN2QzY2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kMYDL3ustLyKYKxNXb1QQ2qDypwe1uHGRYFZHrA6vH8"
            alt="GIF Derecho"
            className="gif-lateral gif-derecho"
            />
      </div>
    )
}

export default TicTacToe;