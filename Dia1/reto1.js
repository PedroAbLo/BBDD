let mysql = require("mysql2");
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "casaatalias1985",
    database : "codenotch"
})

connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta");
    }
});

let sql = "ALTER TABLE alumno ADD email VARCHAR(60) AFTER apellidosAlumno";

connection.query(sql, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("columna añadida");
        console.log(result);
    }
});


let sql1 = "ALTER TABLE alumno DROP COLUMN email;"
connection.query(sql1, (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Columna Borrada");
        console.log(result);
    }
});




let sql2 = "DROP TABLE asignatura";
connection.query(sql, (err,result)=>{
    if(err) throw err;
    console.log("Tabla eliminada");
});


connection.end();