//Condicionales

//Las condicionales nos permiten deicidir el flujo que vaya a tomar el ódigo dependiendo de los resultados
let age = 18;
//Si la variable age es mayor que 18 imprimira "Eres menor de edad y de lo contrario eres mayor de edad"
if(age<18) console.log("Eres menor de edad");
else console.log("Eres mayor de edad");
//Si la variable age2 es mayor que 18 imprimira "Eres menor de edad y de lo contrario eres mayor de edad"
let age2 = 20;
if(age2<18) console.log("Eres menor de edad");
else console.log("Eres mayor de edad");
//Para el caso contrario podemos usar el switch case
let month = 1;
//Dependiendo del valor que tenga month va a imprimir el mes que le corresponde
//en caso de que algo no tenga un caso tenemos nuestro valor por defecto
switch (month) {
    case 1: console.log("Enero"); break;
    case 2: console.log("Febrero"); break;
    case 3: console.log("Marzo"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Mayo"); break;
    case 6: console.log("Junio"); break;
    case 7: console.log("Julio"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Septiembre"); break;
    case 10: console.log("Octubre"); break;
    case 11: console.log("Noviembre"); break;
    case 12: console.log("Diciembre"); break;
    default: console.log("No es un mes valido"); break;
}