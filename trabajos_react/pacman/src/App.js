import React, { useState, useEffect } from "react";
import wall from "./assets/wall.png";
import coin from "./assets/coin.png";
import pacmann from "./assets/pacman.png";
import bg from "./assets/bg.png";
import ghost from "./assets/ghost2.png";
import "./App.css";

const PacManGame = () => {
  const [pacman, setPacman] = useState({ x: 6, y: 4 });
  const [map, setMap] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]);
  const [gameOver, setGameOver] = useState(false);

  // Movimiento de PacMan
  const movePacman = (dx, dy) => {
    const newX = pacman.x + dx;
    const newY = pacman.y + dy;

    if (
      newX < 0 ||
      newY < 0 ||
      newX >= map[0].length ||
      newY >= map.length ||
      map[newY][newX] === 1
    ) {
      return; // Movimiento no permitido
    }

    const nextCell = map[newY][newX];
    if (nextCell === 4) {
      setGameOver(true);
      alert("Game over! You collided with the ghost.");
      return;
    }

    // Actualiza el mapa
    const newMap = map.map((row, y) =>
      row.map((cell, x) => {
        if (x === pacman.x && y === pacman.y) return 3;
        if (x === newX && y === newY) return 5;
        return cell;
      })
    );

    setMap(newMap);
    setPacman({ x: newX, y: newY });

    // Verifica si ya no hay monedas
    const coinsRemaining = newMap.some(row => row.includes(2));
    if (!coinsRemaining) {
      setGameOver(true);
      alert("Congratulations! You collected all the coins. You win!");
    }
  };

  const handleKeyDown = (event) => {
    if (gameOver) return;

    switch (event.keyCode) {
      case 37: // izquierda
        movePacman(-1, 0);
        break;
      case 38: // arriba
        movePacman(0, -1);
        break;
      case 39: // derecha
        movePacman(1, 0);
        break;
      case 40: // abajo
        movePacman(0, 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pacman, gameOver]);

  return (
    <div id="world" style={{ backgroundColor: "white" }}>
      {map.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={
                cell === 1
                  ? "wall"
                  : cell === 2
                  ? "coin"
                  : cell === 3
                  ? "ground"
                  : cell === 4
                  ? "ghost"
                  : cell === 5
                  ? "pacman"
                  : ""
              }
              style={{
                backgroundImage:
                  cell === 1
                    ? `url(${wall})`
                    : cell === 2
                    ? `url(${coin})`
                    : cell === 3
                    ? `url(${bg})`
                    : cell === 4
                    ? `url(${ghost})`
                    : cell === 5
                    ? `url(${pacmann})`
                    : "none",
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PacManGame;
