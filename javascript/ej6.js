// Funciones anonimas o Arrow Function
 
//Son funciones normales pero nos permiten almacenarlas dentro de alguna variable
//Tienen sus diferencias con las funciones normales pero cumplen sus mismos cometidos

const saludar = (nombre) => {
    return `Hola, ${nombre}`;
};

//Se espera el mensaje "Hola, Ruben Reyes"
console.log(saludar("Ruben Reyes"));