import React, { useState } from 'react' // Importamos React y el useState que ocuparemos mas adelante
import './tictactoe.css'  //Importamos los diseños que tendra el componente

function TicTacToe(props){
  //Definimos los estados que tendra el componente
    const [turno, setTurno] = useState(1); // Estado para definir el turno del jugador
    const [winner, setWinner] = useState(false); // Estado para indicar si hay o no un ganador
    const [gato, setGato] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]); // Estadp que simula el tablero del gato

    //Función para poder cambiar los estados actuales y llenar los tableros del gato
    const click = (e, posicionX, posicionY, turno) => { 
      // Si la posición que estan seleccionando esta ocupado o ya hay algun ganador haremos un retorno anticipado para no cambiar ninguno de los estados que ya estan completos
        if(gato[posicionX][posicionY] !== 0 || winner) return;
        e.target.classList.add(turno === 1 ? 'circulo' : 'cruz'); //El elemento seleccionado le agregaremos la clase _circulo_ o _cruz_ dependiendo del turno en el que nos encontremos
        e.target.textContent = turno === 1 ? 'O' : 'X'; //Cambiamos el texto que tenga el elemento seleccionado como circulo o cruz dependiendo del turno en el que estemos
        // Para poder actualizar la tabla de gatoActual necesitamos "copiar" el arreglo para poder tener cada uno de los elementos en orden
        setGato((gatoActual) => {
            const nuevoGato = gatoActual.map((fila) => [...fila]);  //Copiamos el tablero como esta actualmente
            nuevoGato[posicionX][posicionY] = turno; //Al nuevo arreglo cambiamos el valor de la posición dependiendo del turno que tenemos
            winners(nuevoGato, turno); //Verificamos si ese turno ya tiene algun ganador
            return nuevoGato; //retornamos el arreglo con la nueva actualización de la posición
        });

        setTurno(turno === 1 ? 2 : 1); //Cambiamos el turno de manera "dinamica" si es igual a 1 el nuevo turno sera para el jugador el 2 de lo contrario será para el jugador 1
    }

    //Función para detectar al ganador donde daremos el arreglo de la tabal tic tac toe y el turno en el que estamos
    const winners = (gato, turno) => {
        console.log(gato) // Imprimimos en pantalla la tabla que tenemos
        /**
         * Verificamos las lineas y si son del mismo valor del turno y entre ellos cambiaremos el estado de
         * winner por un valor de true
         */
        if(gato[0][0] === turno && gato[0][1] === turno && gato[0][2] === turno) setWinner(true)
        if(gato[1][0] === turno && gato[1][1] === turno && gato[1][2] === turno) setWinner(true)
        if(gato[2][0] === turno && gato[2][1] === turno && gato[2][2] === turno) setWinner(true)
        if(gato[0][0] === turno && gato[1][0] === turno && gato[2][0] === turno) setWinner(true)
        if(gato[0][1] === turno && gato[1][1] === turno && gato[2][1] === turno) setWinner(true)
        if(gato[0][2] === turno && gato[1][2] === turno && gato[2][2] === turno) setWinner(true)
        if(gato[0][0] === turno && gato[1][1] === turno && gato[2][2] === turno) setWinner(true)
        if(gato[0][2] === turno && gato[1][1] === turno && gato[2][0] === turno) setWinner(true)
    }

    return (
      // Tenemos nuestro contenedor principal que dentro tendra toda la información
        <div className="contenedor-principal">
          {/* Mostraremos una imagen y ponemos le link ya que no lo tendremos de manera local 
          le brindamos las clases necesarias para que las iamgenes tengan su posición exacta */}
        <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afedb0a4-4d1d-476f-9820-f77051e5a41c/d45mqil-de6920be-d5cc-4824-a634-cedba0e7d3ca.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmZWRiMGE0LTRkMWQtNDc2Zi05ODIwLWY3NzA1MWU1YTQxY1wvZDQ1bXFpbC1kZTY5MjBiZS1kNWNjLTQ4MjQtYTYzNC1jZWRiYTBlN2QzY2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kMYDL3ustLyKYKxNXb1QQ2qDypwe1uHGRYFZHrA6vH8"
            alt="GIF Izquierdo"
            className="gif-lateral gif-izquierdo"
        />
        {/* Dentro del contenedor principal generamos otro contenedor que estara centrado donde tendremos la información de los usuarios y el nombre de la persona
        En la que estamos en el turno */}
        <div className="contenedor">
          {/* En los dos contenedores de abajo dependiendo del valor del turno tendremos la diferencia de que uno de los contenedores
          tendran la clase "notTurn" que permitira que sea visible o no el nombre de la persona */}
          <div className={turno === 1 ? ("jugador-izquierdo") : ("jugador-izquierdo notTurn")} id="nombreJugador1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZ78tS3Eune2cjUljp6xdQq7pU3KHDXzZcA&s" className="imagen-jugador" />
            <span className="nombre-jugador">{props.jugador1}</span>
          </div>
  
          <div className={turno === 2 ? ("jugador-derecho") : ("jugador-derecho notTurn")} id="nombreJugador2">
            <span className="nombre-jugador">{props.jugador2}</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwZktB7fwgzZBSYr-QX9hWbtFqepS9DC_uQ&s" className="imagen-jugador" />
          </div>
          <h1>Tic Tac Toe Retro</h1>
          {/* Generamos el tablero con sus nueve espacios que si podremos visualizar tienen eventos "onClick" donde simplemente son divs vacios
          donde cada uno de los eventos tiene como diferencia la posicionX y posicionY donde le estamos diciendo en que parte del arreglo
          estamos guardando los nuevos datos que tendremos. */}
          <div className="tablero">
            <div className="celda" id="0" onClick={(e) => click(e, 0, 0, turno)}></div>
            <div className="celda" id="1" onClick={(e) => click(e, 0, 1, turno)}></div>
            <div className="celda" id="2" onClick={(e) => click(e, 0, 2, turno)}></div>
            <div className="celda" id="3" onClick={(e) => click(e, 1, 0, turno)}></div>
            <div className="celda" id="4" onClick={(e) => click(e, 1, 1, turno)}></div>
            <div className="celda" id="5" onClick={(e) => click(e, 1, 2, turno)}></div>
            <div className="celda" id="6" onClick={(e) => click(e, 2, 0, turno)}></div>
            <div className="celda" id="7" onClick={(e) => click(e, 2, 1, turno)}></div>
            <div className="celda" id="8" onClick={(e) => click(e, 2, 2, turno)}></div>
          </div>
            {/* Si el estado de winner es falso este div estará vacio y en caso de tener el valor de verdadero pondremos "Felicidades al ganador" */}
          <div className="mensaje">{winner ? "FELICIDADES AL GANADOR" : ""}</div>
        </div>
        {/* Pondremos otra imagen en la pare derecha */}
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afedb0a4-4d1d-476f-9820-f77051e5a41c/d45mqil-de6920be-d5cc-4824-a634-cedba0e7d3ca.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmZWRiMGE0LTRkMWQtNDc2Zi05ODIwLWY3NzA1MWU1YTQxY1wvZDQ1bXFpbC1kZTY5MjBiZS1kNWNjLTQ4MjQtYTYzNC1jZWRiYTBlN2QzY2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kMYDL3ustLyKYKxNXb1QQ2qDypwe1uHGRYFZHrA6vH8"
            alt="GIF Derecho"
            className="gif-lateral gif-derecho"
            />
      </div>
    )
}

export default TicTacToe; //Exportamos el componente creado para poder ser utilizado en algun otro componente