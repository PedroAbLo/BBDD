let mysql = require("mysql2");
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "casaatalias1985",
    database : "codenotch2"
})

connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta");
    }
});


//================= RESETEAR DATOS ==================


let sql ="";
sql="DELETE FROM subject_teacher";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM marks";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM students";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM grupos";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM subjects";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql="DELETE FROM teachers";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

sql = "ALTER TABLE grupos AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE teachers AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE subjects AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE subject_teacher AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE students AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});
sql = "ALTER TABLE marks AUTO_INCREMENT = 0";
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("Datos eliminados");
        console.log(result);
    }
});

//=================== INTRODUCIR DATOS =======================

//Grupos
let sql2 = "INSERT INTO grupos (name) VALUES ?"
let grupos = [
    ["Front"],
    ["Java"],
    ["Recuperados"],
    ["Back"]
];
connection.query(sql2,[grupos],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Grupos Insertados");
        console.log(result);
    }
});


//Teachers
let sql6 = "INSERT INTO teachers (first_name, last_name) VALUES ?";
let teachers =[
    [`Jose`, `Campuzano`],
    [`Maria`, `Alves`],
    [`Juan`,`García`]
]
connection.query(sql6, [teachers],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Profesores Insertados");
        console.log(result);
    }
})

//Subjects

let sql4 = "INSERT INTO subjects (title) VALUES ?";
let subs = [
    ["asignatura1"],
    ["asignatura2"],
    ["asignatura3"],
    ["asignatura4"],
    ["asignatura5"],
    ["asignatura6"],
    ["asignatura7"],
];
connection.query(sql4,[subs],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Asignaturas Insertadas");
        console.log(result);
    }
})

//Estudiantes

sql = "INSERT INTO students (first_name, last_name, group_id) VALUES ?";
let students = [
    [`Pedro`,`Abenza`,1],
    [`Maria`,`Lopez`,2],
    [`German`,`Guillen`,3],
    [`Adrian`,`Guillamon`,2],
    [`Joaquin`,`Martin`,3],
    [`Antonio`,`Perez`,2],
    [`Jose`,`Calvo`,3],
    [`Edgar`,`Ortiz`,2],
    [`Pablo`,`Ruiz`,2],
    [`Juan`,`Villa`,3]
];
connection.query(sql, [students],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Estuidantes Insertados");
        console.log(result);
    }
})



//subject_teacher
let sql5 = "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES ?";
let subject_teachers = [
    [3, 1, 1],
    [1, 2, 3],
    [1, 1, 2],
    [2, 2, 4],
    [2, 3, 2],
    [4, 3, 3]
];
connection.query(sql5,[subject_teachers],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Asignatura_Profesores Insertados");
        console.log(result);
    }
})

//Marks
let sql3 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ?";
let marks = [
    [1, 1, "2015-10-23", 3],
    [2, 1, "2016-10-23", 4],
    [3, 2, "2017-10-23", 5],
    [1, 3, "2020-10-23", 6],
    [4, 4, "2021-10-23", 7],
    [5, 2, "2011-10-23", 8],
    [7, 3, "2014-10-23", 3],
    [6, 2, "2011-10-23", 2],
    [8, 3, "2015-10-23", 3],
    [9, 4, "2011-10-23", 2],
    [4, 5, "2019-10-23", 1],
    [5, 6, "2013-10-23", 9],
];
connection.query(sql3,[marks],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Notas Insertadas");
        console.log(result);
    }
})

//==========Setear las notas a 0 ==================
sql = "UPDATE marks SET mark=0";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Notas Actualizadas");
        console.log(result);
    }
})

// ========Obtener elnombre y el primer apellido de los estudiantes========

sql = "SELECT first_name, last_name FROM students";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Nombres y Apellidos Estudiantes");
        console.log(result);
    }
})


// ===============Obtener los datos de profesores ====================

sql = "SELECT * FROM teachers";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos Profesores");
        console.log(result);
    }
})

                                            // ============================ RETO 3 ================================

// =================Eliminar notas de +10 años ===================
sql = "DELETE FROM marks WHERE date < '2012-02-17'";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Notas eliminadas");
        console.log(result);
    }
})

//==============Cambiar notas < 5 a  = 5 ==============================

sql = "UPDATE marks SET mark= 5 WHERE mark< 5";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Notas actualizadas");
        console.log(result);
    }
})




connection.end();

