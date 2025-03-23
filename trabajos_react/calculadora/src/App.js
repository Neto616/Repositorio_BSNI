import { useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [valor, setValue] = useState("0")
  return (
    <div class="calculator">
        <div id="display" class="display">{valor}</div>
        <div class="buttons">
            <button class="btn clear">C</button>
            <button class="btn">(</button>
            <button class="btn">)</button>
            <button class="btn">/</button>

            <button class="btn">7</button>
            <button class="btn">8</button>
            <button class="btn">9</button>
            <button class="btn">*</button>

            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn">6</button>
            <button class="btn">-</button>

            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn">+</button>

            <button class="btn zero" colspan="2">0</button>
            <button class="btn">.</button>
            <button class="btn equal" rowspan="2">=</button>
        </div>
    </div>
  );
}

export default App;
