import { useState } from "react"
import './App.css';

function App() {
  const [valor, setValor] = useState("0");

  const onClickFunction = (event) => {
    if (valor === "0") setValor(event.target.value);
    else
      setValor(valor.concat(event.target.value))
  }

  return (
    <div className="calculator">
        <div id="display" class="display">{valor}</div>
        <div className="buttons">
            <button className="btn clear">C</button>
            <button className="btn" value={"("} onClick={(e)=> onClickFunction(e)}>(</button>
            <button className="btn" value={")"} onClick={(e)=> onClickFunction(e)}>)</button>
            <button className="btn" value={"/"} onClick={(e)=> onClickFunction(e)}>/</button>

            <button className="btn" value={"7"} onClick={(e)=> onClickFunction(e)}>7</button>
            <button className="btn" value={"8"} onClick={(e)=> onClickFunction(e)}>8</button>
            <button className="btn" value={"9"} onClick={(e)=> onClickFunction(e)}>9</button>
            <button className="btn" value={"*"} onClick={(e)=> onClickFunction(e)}>*</button>

            <button className="btn" value={"4"} onClick={(e)=> onClickFunction(e)}>4</button>
            <button className="btn" value={"5"} onClick={(e)=> onClickFunction(e)}>5</button>
            <button className="btn" value={"6"} onClick={(e)=> onClickFunction(e)}>6</button>
            <button className="btn" value={"-"} onClick={(e)=> onClickFunction(e)}>-</button>

            <button className="btn" value={"1"} onClick={(e)=> onClickFunction(e)}>1</button>
            <button className="btn" value={"2"} onClick={(e)=> onClickFunction(e)}>2</button>
            <button className="btn" value={"3"} onClick={(e)=> onClickFunction(e)}>3</button>
            <button className="btn" value={"+"} onClick={(e)=> onClickFunction(e)}>+</button>

            <button className="btn zero" colspan="2" value={"0"} onClick={(e)=> onClickFunction(e)}>0</button>
            <button className="btn" value={"."} onClick={(e)=> onClickFunction(e)}>.</button>
            <button className="btn equal" rowspan="2">=</button>
        </div>
    </div>
  );
}

export default App;
