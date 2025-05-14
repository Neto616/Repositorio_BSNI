# Importamos las librerias necesarios
from flask import Flask, render_template
from flask_mysqldb import MySQL
# Inicializamos nuestro servidor
app = Flask(__name__)
# Configuramos las variables que tendra nuestro servidor
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Neto_616'
app.config['MYSQL_DB'] = 'sistema'
# Inicializamos la conexion a la base de datos
mysql = MySQL(app)
# Creamos una ruta raiz
@app.route('/')
def index():
    # Abrimos nuestro cursor para realizar movimientos a la base de datos
    cur = mysql.connection.cursor()
    # Insertamos en la tabla empleados los valores que estan escrito dentro
    sql = "INSERT INTO `empleados` (`nombre`, `correo`, `foto`) VALUES ('Néstor Iván BS', 'nestorBS@gmail.com', 'foto_perfil.jpg');"
    # Ejecutamos la consulta de la parte superior
    cur.execute(sql)
    # Realizamos un commit a la ejecucion anterior
    mysql.connection.commit()
    # Cerramos el cursor
    cur.close()
    # Rendreizamos la plantilla que esta en la carpeta template en la carpeta empleados
    return render_template('empleados/index.html')
# En caso de que cuando corramos el archivo este sea el principal ejecutara app.run con un debug en true
if __name__ == '__main__':
    app.run(debug=True)