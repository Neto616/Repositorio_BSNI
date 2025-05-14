from flask import Flask, render_template
from flask_mysqldb import MySQL
import os
app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Neto_616'
app.config['MYSQL_DB'] = 'sistema'

mysql = MySQL(app)

@app.route('/')
def index():
    cur = mysql.connection.cursor()
    
    sql = "INSERT INTO `empleados` (`nombre`, `correo`, `foto`) VALUES ('Néstor Iván BS', 'nestorBS@gmail.com', 'foto_perfil.jpg');"
    cur.execute(sql)
    
    mysql.connection.commit()
    cur.close()
    return render_template('empleados/index.html')

if __name__ == '__main__':
    app.run(debug=True)