// Arreglos

//Los arreglos se inicializan con [ ] y dentro se ponen valores 
//En JavaScript los arreglos pueden ser de cualquier tipo osea que pueden tener numeros, string, json y demás
const alumnos = ["Nestor", "Ruben", "Daivid", "Camila"];
//Otra manera de crear arreglos en javascript es usando el objeto Array
const profesores = new Array("Valadez", "Berlanga", "Peralta");
//Esto es un arreglo aceptable en JavScript
const objetosVariados = ["String", 0, {parametro: "valor"}, [0, 1, 2]];

//Impresion de todos los valores del arreglo
console.log(alumnos);
console.log(profesores);
console.log(objetosVariados);

//Acceder a un valor especifico en los arreglos
console.log(alumnos[0]); //Obtenemos el primer valor del arreglo
console.log(profesores[1]); //Obtenemos el segundo valor del arreglo
console.log(objetosVariados[2]); //Obtenemos el tercer valor del arreglo

//Metodos para los arreglos

console.log(alumnos.length); //Obtenemos la longitud del arreglo
profesores.push("Denisse"); //Insertamos un valor al final del arreglo profesores
console.log(profesores);
console.log(objetosVariados.shift());//Quitamos el primer elemento que se encuentre en el arreglo