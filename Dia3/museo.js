let mysql = require("mysql2");
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "casaatalias1985",
    database : "museo"
})

//========================= RESETEAR DATOS ===================

let sql ="";
sql="DELETE FROM almacenamiento";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM autor";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM dueño";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM estado";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM pieza";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE almacenamiento AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE autor AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE dueño AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE estado AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE pieza AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

//=================== INTRODUCIR DATOS =======================

//======== AUTORES =======
sql = "INSERT INTO autor (nombre, nacionalidad, edad, estilo) VALUES ?"
let autores =[
    ["Donatelo", "italiano", 49, "realista"],
    ["Rafael", "italiano", 59, "realista"],
    ["Miquel", "italiano", 55, "realista"],
    ["Leonardo", "italiano", 58, "realista"],
    ["Arquimedes", "italiano", 52, "clasico"],
    ["Boticelli", "italiano", 69, "impress"],
    ["Dali", "español", 78, "moderno"],
    ["Picasso", "español", 66, "cubismo"],
    ["Edison", "italiano", 72, "inventor"]
]

connection.query(sql,[autores],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Autores Insertados");
        console.log(result);
    }
});

//============ DUEÑOS ============

sql = "INSERT INTO dueño (nombre, apellido, email, direccion, telefono) VALUES ?"
let dueños = [
    ["Pepito", "Gomez", "xxxxXX@XXXxx", "DDddDDDDdDDD", 999666888],
    ["Pedro", "Abenza", "ttttttt@tttt", "aaaaAAaaAAAa", 666666666],
    ["Judith", "Guillen", "bbbbbbbb@bbb", "zcvxzvfdbbc", 888888888],
    ["German", "Lopez", "xxxxxccx@vvvv", "bzbcxzbdxcvb", 777777777],
    ["Adrian", "Vidal", "bbbbbbbb@bbbb", "zcvzcvzzcvz", 555555555],
    ["Jose", "Saez", "trteet@erterter", "qerewtqtee", 444444444],
    ["Gonzalo", "Hernandez", "werewrwdf@sdfs", "adfagdegasddfa", 333333333],
    ["Pascual", "Gil", "sdfsdfewr@dsfs", "adadfedafdaf", 222222222]
]

connection.query(sql,[dueños],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Dueños Insertados");
        console.log(result);
    }
});

//============ ESTADOS ============

sql = "INSERT INTO estado (estado, prestamo, devolucion) VALUES ?"
let estados = [
    ["posesion", null , null],
    ["posesion", null , null],
    ["posesion", null , null],
    ["posesion", null , null],
    ["posesion", null , null],
    ["prestamo","2020.10.20" ,"2023.06.01"],
    ["prestamo","2020.01.10" ,"2024.06.15"],
    ["prestamo","2020.02.12" ,"2025.06.11"],
    ["prestamo","2020.10.12" ,"2023.06.21"],
    ["prestamo","2020.11.11" ,"2024.06.25"],
    ["prestada","2020.12.07" ,"2024.06.06"],
    ["prestada","2020.02.04" ,"2025.06.03"],
    ["prestada","2020.04.08" ,"2025.06.30"],
    ["prestada","2020.05.19" ,"2024.06.19"],
    ["prestada","2020.09.22" ,"2023.06.16"]
]
connection.query(sql,[estados],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Estados Insertados");
        console.log(result);
    }
});

//============= ALMACENAMIENTO ==============

sql = "INSERT INTO almacenamiento (expositor, vitrina, armario, estanteria) VALUES ?"
let almacenamiento = [
    [3,1,0,0],
    [2,7,0,0],
    [1,6,0,0],
    [5,5,0,0],
    [4,4,0,0],
    [3,3,0,0],
    [2,4,0,0],
    [2,2,0,0],
    [3,2,0,0],
    [0,0,1,1],
    [0,0,1,2],
    [0,0,1,3],
    [0,0,2,2],
    [0,0,2,3],
    [0,0,3,1],
]

connection.query(sql,[almacenamiento],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Almacenamientos Insertados");
        console.log(result);
    }
});

//======== PIEZAS ========

sql = "INSERT INTO pieza (nombre, descripcion, año, coleccion, id_dueño, id_autor, id_almacenamiento, id_estado) VALUES ?"
let piezas = [
    ["Torre", "Torre alta dorada", 349, "almacenada", 1, 8, 1, 2],
    ["Busto", "Busto alta dorada", 449, "almacenada", 1, 7, 1, 14],
    ["Cuadro", "Cuadro alta dorada", 549, "almacenada", 2, 6, 2, 13],
    ["Esfinge", "Esfinge alta dorada", 649, "almacenada", 3, 5, 3, 12],
    ["Fresco", "Fresco alta dorada", 379, "permanente", 4, 4, 4, 11],
    ["Escultura", "Escultura alta dorada", 849, "permanente", 5, 3, 5, 10],
    ["Patata", "Patata alta dorada", 345, "permanente", 6, 2, 6, 9],
    ["Utensilio", "Utensilio alta dorada", 449, "permanente", 7, 1, 7, 8],
    ["Caballo", "Caballo alta dorada", 549, "permanente", 6, 1, 8, 7],
    ["Agonía", "Agonía alta dorada", 559, "permanente", 5, 1, 9, 6],
    ["Lucero", "Lucero alta dorada", 639, "permanente", 4, 2, 10, 5],
    ["Tocho", "Tocho alta dorada", 149, "permanente", 3, 3, 11, 4],
    ["Libro", "Libro alta dorada", 49, "itinerante", 2, 4, 12, 3],
    ["Figura", "Figura alta dorada", 99, "itinerante", 1, 5, 13, 2],
    ["Jarron", "Jarron alta dorada", 1349, "itinerante", 2, 6, 14, 1],
]

connection.query(sql,[piezas],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Articulos Insertados");
        console.log(result);
    }
});

// ===================== PUNTO 1 MUSEO =========================
sql = "SELECT p.id_pieza, p.nombre, a.expositor, a.vitrina, a.armario, a.estanteria, e.devolucion, d.nombre, d.apellido, d.email FROM pieza AS p JOIN almacenamiento AS a ON ( a.id_almacenamiento = p.id_almacenamiento) JOIN estado AS e ON (e.id_estado = p.id_estado) JOIN dueño AS d ON (d.id_dueño = p.id_dueño) WHERE e.estado = 'prestamo'"
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Articulos Insertados");
        console.log(result);
    }
});

//======================= PUNTO 2 MUSEO ======================

sql = "SELECT p.coleccion, count(p.coleccion) AS Articulos FROM pieza AS p GROUP BY p.coleccion ORDER BY p.coleccion  DESC"
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Articulos Insertados");
        console.log(result);
    }
});



connection.end();