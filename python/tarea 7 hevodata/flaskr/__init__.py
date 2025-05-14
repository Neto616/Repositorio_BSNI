from flask import Flask,render_template, request, jsonify
from flask_mysqldb import MySQL
from json import *
 
app = Flask(__name__)
 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Neto_616'
app.config['MYSQL_DB'] = 'flask'
 
mysql = MySQL(app)
 
@app.route('/form')
def form():
    return render_template('form.html')

@app.route("/usuarios")
def users():
    return render_template("usuarios.html")

@app.route("/usuarios_info")
def getUsers():
    cursor = mysql.connection.cursor()
    cursor.execute(''' SELECT nombre, edad FROM info_table ''')
    resultado = cursor.fetchall()
    mysql.connection.commit()
    cursor.close()
    usuarios = [{"nombre": fila[0], "edad": fila[1]} for fila in resultado]    
    for i in resultado:
        print(i)    
    return jsonify(usuarios)
 
@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'GET':
        return "Login via the login Form"
     
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        print(f"""\nNombre: {name}\nAge: {age}""")
        cursor = mysql.connection.cursor()
        cursor.execute(''' INSERT INTO info_table (nombre, edad) VALUES(%s,%s)''',(name,age))
        mysql.connection.commit()
        cursor.close()
        return f"Done!!"
 
app.run(host='localhost', port=5000)