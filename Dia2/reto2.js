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
    [2, 3, 2]
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
});



                                            //=================  DIA 2 RETO 2 ====================
//===== Obtener id y nota de alumnos con id entre 1 y 20 o que tengan nota > 8 y sea del año pasado

sql = "SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark> 8 AND date BETWEEN '2021-01-01' AND '2021-12-31')";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Estuidantes Filtrados");
        console.log(result);
    }
})

// ========================== Obten media de las notas que se han dado en el último año por asigntaura ====================

sql = "SELECT AVG(mark) FROM marks WHERE date BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY subject_id";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Nota media por asignatura este último año");
        console.log(result);
    }
})



//=========================== Media aritmetica de las notas que se han dado en el ultimo año por alumno ===================

sql = "SELECT AVG(mark) FROM marks WHERE date BETWEEN '2021-01-01' AND '2021-12-31' GROUP BY student_id";
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Nota media por alumno este último año");
        console.log(result);
    }
})






//===================================== DIA 3 ====================================================================

// ======================RETO 1 ========================================================
// ========= Obten nombres, apellidos de los alumnos y nombres de las asignaturas  que estan apuntados ===============

sql = "SELECT s.first_name, s.last_name, sub.title FROM students as s JOIN marks as m ON(s.student_id = m.student_id) JOIN subjects as sub ON(sub.subject_id = m.subject_id)"
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Nombre, apellido y asignatura: ");
        console.log(result);
    }
})


//=================== RETO 2 =========================================

// =========== Obten los nombres, apellidos de los profesores y nombres de las asignaturas que imparten ===

sql = "SELECT t.first_name, t.last_name, title FROM teachers AS t JOIN subject_teacher AS st ON (st.teacher_id = t.teacher_id) JOIN subjects as sub ON (sub.subject_id = st.subject_id)"
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Profesor + asignatura: ");
        console.log(result);
    }
})

//========== RETO 3 ===================================
sql = "SELECT COUNT(m.student_id) as ALUMNOS, sub.title, t.first_name, t.last_name FROM marks AS m JOIN subject_teacher AS st ON ( st.subject_id = m.subject_id) JOIN subjects AS sub ON ( sub.subject_id = m.subject_id) JOIN teachers AS t on ( t.teacher_id = st.teacher_id) GROUP BY sub.title ORDER BY sub.title"
connection.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Numero total alumnos por asignatura ");
        console.log(result);
    }
})




connection.end();