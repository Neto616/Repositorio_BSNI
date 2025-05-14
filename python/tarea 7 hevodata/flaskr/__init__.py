from flask import Flask,render_template, request, jsonify
from flask_mysqldb import MySQL
from json import *
 
app = Flask(__name__) #Inicializamos nuestra variable aplicacion con Flask pasandole el nombre de donde estemos
#  Configuramos "variables" de entorno que tenga la aplicaciones en este caso para la conexion a la base de datos
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Neto_616'
app.config['MYSQL_DB'] = 'flask'
#  Llamamos a MySql y le pasamos la configuracion de la aplicacion
mysql = MySQL(app)
#  Generamos una ruta form donde vamos a renderizar nuestro html con el formulario a llenar por los formularios
@app.route('/form')
def form():
    return render_template('form.html')
# Para esta ruta estamos renderizando otro archivo que no se encuentra dentro del stackoverflow pero necesitamos verificar
# que los usaurios se esten dando de alta de manera correcta y este html renderizara dicha informacion
@app.route("/usuarios")
def users():
    return render_template("usuarios.html")
# Ruta para obtener la informacion de nuestro susuarios
@app.route("/usuarios_info")
def getUsers():
    # Mandamos a llamar a nuestro cursor que nos permitira realizar consultas a base de datos
    cursor = mysql.connection.cursor()
    # Ejecutamos nuestra consulta en este caso traeremos el nombre y edad de los usuarios que esten en la tabla info_table
    cursor.execute(''' SELECT nombre, edad FROM info_table ''')
    # Obtenemos aqui como un array de tuplas los resultados que haya encontrado
    resultado = cursor.fetchall()
    # Terminamos la ejecucion
    mysql.connection.commit()
    # Cerramos nuestro cursor
    cursor.close()
    # transformamos en un diccionario nuestros resultados y los guardamos en un array
    usuarios = [{"nombre": fila[0], "edad": fila[1]} for fila in resultado]    
    # Retornamos como un json los resultados anteriores
    return jsonify(usuarios)
#  Generamos una ruta que existe en dos metodos en un metodo POST y un metodo GET
@app.route('/login', methods = ['POST', 'GET'])
def login():
    # Verificamos el metodo de nuestra peticion
    # En caso de ser una peticion GET ejecutara lo siguiente
    if request.method == 'GET':
        # Retornara un texto unicamente
        return "Login via the login Form"
    # En caso de ser una peticion POST ejecutara lo siguiente
    if request.method == 'POST':
        # Obtenemos del "body" los atributos nombre y edad
        name = request.form['name']
        age = request.form['age']
        # Imprimos en pantalla sus valores
        print(f"""\nNombre: {name}\nAge: {age}""")
        # Generamos nuestro cursor para la peticion a la base de datos
        cursor = mysql.connection.cursor()
        # Ejecutamos nuestra consulta para insertar los valores que acabamos de recolectar
        cursor.execute(''' INSERT INTO info_table (nombre, edad) VALUES(%s,%s)''',(name,age))
        # Finalizamos la consulta
        mysql.connection.commit()
        # Cerramos el cursor
        cursor.close()
        # Retornamos un texto avisando que hemos finalizado
        return f"Done!!"
# corremos app (Flask) en un host local y en le puerto 5000
app.run(host='localhost', port=5000)