// Desestructuración

// la desestructuración nos permite "desempaquetar" los datos de un JSON o de un arreglo
// para unicamente acceder a un valor en concreto

//Tenemos un JSON con 3 atributos
const datos = {
    alumno1: "Nestor",
    alumno2: "Ruben",
    alumno3: "Deivid"
};
//Un arreglo de tres elementos
const datos2 = ["Nestor", "Ruben", "Deivid"];

//Accedemos a los tres atributos de datos y los imprimimos
const {alumno1, alumno2, alumno3} = datos;
console.log(alumno1, alumno2, alumno3);
//Accedemos unicamente al primer y tercer elemento del arreglo para poder imprimir unicamente estos
const [dato1, , dato3] = datos2;
console.log(dato1, dato3)