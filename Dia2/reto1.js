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
        // console.log("Grupos Insertados");
        // console.log(result);
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
    // }else{
    //     console.log("Profesores Insertados");
    //     console.log(result);
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
        // console.log("Asignaturas Insertadas");
        // console.log(result);
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
        // console.log("Estuidantes Insertados");
        // console.log(result);
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
        // console.log("Asignatura_Profesores Insertados");
        // console.log(result);
    }
})

//Marks
let sql3 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ?";
let marks = [
    [1, 1, "2021-10-23", 9],
    [2, 1, "2021-10-23", 8],
    [3, 2, "2021-10-23", 5],
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
        // console.log("Notas Insertadas");
        // console.log(result);
    }
})


// =============================================  DIA2 RETO 1    ============================================================================
//==========Nota media===============

sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Nota Media de los Alumnos");
        console.log(result);
    }
});

// =======Número de alumnos ===========

sql = "SELECT COUNT(*) FROM students";

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Número de los Alumnos");
        console.log(result);
    }
});

//=========Listar todos los campos de alumnos ==============

sql = "SELECT * FROM grupos";

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Todos los campos de 'grupos'");
        console.log(result);
    }
});

//============= Eliminar notas > 5 AND del año pasado (NOT BETWEEN) =============

sql = "DELETE FROM marks WHERE mark> 5 AND (date> '2021-01-01' AND date< '2021-12-31')";

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Notas Eliminadas");
        console.log(result);
    }
});


//===================Datos Estudiantes de este año (2022) ----Añadir un campo que sea "año de ingreso" ========



//COMENTO ESTE CÓDIGO PORQUE ME DA ERROR AL DECIR QUE ESTÁ DUPLICADA LA COLUMNA "añoIngreso"


// sql = "ALTER TABLE students ADD añoIngreso DATETIME NULL";
// connection.query(sql,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Añadir columna añoIngreso en Alumnos");
//         console.log(result);
//     }
// });

sql = "UPDATE students SET añoIngreso= '2022-01-10'";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Cambiar columna añoIngreso en Alumnos");
        console.log(result);
    }
});

sql = "SELECT * FROM students WHERE añoIngreso= '2022-01-10'";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Datos Alumnos del 2022");
        console.log(result);
    }
});

//====================== Calcular Número Profesores por cada asignatura ====================

sql = "SELECT COUNT (subject_id) FROM subject_teacher GROUP BY subject_id";
// sql = "SELECT subject_id, count(*) FROM subject_teacher GROUP BY subject_id"

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Profesores por cada asignatura");
        console.log(result);
    }
});







connection.end();