//Clases

//Para crear una clase en JS se usa la sintaxis class NombreClase { constructor () {} metodos}

//Creamos una clase de tipo Alumno con atributos nombre, apellido, edad y carrera
//con un metodo para imprimir todos los atributos que el objeto tenga
class Alumno {
    constructor(nombre, apellido, edad, carrera){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
    }
    //Metodo que se encarga de imprimir los datos que tenga el objeto
    imprimir_datos () {
        //Unicamente se realiza un console log y se acceden a sus atributos para enlistarlos
        console.log(`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nEdad: ${this.edad}\nCarrera: ${this.carrera}`);
    }
}
//Creamos una constante e inicializamos un Objeto Alumno y le pasamos sus valores
const alumno1 = new Alumno("Ruben", "Reyes", 21, "Sistemas Computacionales");
//Llamamos al metodo imprimir_datos para poder acceder a estos
alumno1.imprimir_datos();