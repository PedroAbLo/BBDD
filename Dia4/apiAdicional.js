let express = require("express");
let app = express();
let cors = require('cors');
let mysql = require("mysql2");
const PORT = 3000;

let connection = mysql.createConnection({
    host        : "localhost",
    user        : "root",
    password    : "casaatalias1985",
    database    : "codenotch2"
});

connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta");
    }
});

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


//=================== VERBOS ==========================

//============== MEDIA CON ID ==========================
app.get("/media", 
    function(request, response)
    {   let id = request.query.id;
        let sql = "SELECT AVG(mark) FROM marks WHERE student_id =" + id;
        console.log(sql);  
        connection.query(sql,(err, result) =>{
            if (err) 
                console.log(err);
            else 
            {
                console.log(result)
                response.send(result);
            }
        })
    }
); 

// ================ APUNTADAS CON Y SIN ID ======================

app.get("/apuntadas", 
        function(request, response)
        {
            let sql;
            let id = request.query.id;

            if(id === undefined){
                if (id == null){
                    sql = "SELECT s.first_name, s.last_name, sub.title FROM subjects AS sub JOIN marks as m ON ( m.subject_id = sub.subject_id) JOIN students as s ON ( m.student_id = s.student_id) ORDER BY s.first_name";
                }else{
                    sql = "SELECT title FROM subjects AS sub JOIN marks as m ON ( m.subject_id = sub.subject_id) WHERE student_id = " + id;
                }
    
                connection.query(sql, (err,result)=>{
                    if (err) 
                        console.log(err);
                    else{
                        response.send(result);
                    }
                })
            }else{
                let sql = "SELECT title FROM subjects AS sub JOIN marks as m ON ( m.subject_id = sub.subject_id) WHERE student_id = " + id;
                console.log(sql);  
                connection.query(sql, (err,result)=>{
                    if (err){
                        console.log(err);
                    }else{
                        console.log(result)
                        response.send(result);
                    }
                })
            }

        });

// ========================= IMPARTIDAS ==============================================

app.get("/impartidas", 
        function(request, response)
        {
            let sql;
            let id = request.query.id;

            if(id === undefined){
                if (id == null){
                    sql = "SELECT t.first_name, t.last_name, s.title FROM teachers AS t JOIN subject_teacher as st ON ( t.teacher_id = st.teacher_id) JOIN subjects AS s ON ( s.subject_id = st.subject_id) ORDER BY t.first_name ";
                }else{
                    sql = "SELECT t.first_name, t.last_name, s.title FROM teachers AS t JOIN subject_teacher as st ON ( t.teacher_id = st.teacher_id) JOIN subjects AS s ON ( s.subject_id = st.subject_id) WHERE t.teacher_id = " + id;
                }
    
                connection.query(sql, (err,result)=>{
                    if (err) 
                        console.log(err);
                    else{
                        response.send(result);
                    }
                })
            }else{
                let sql = "SELECT t.first_name, t.last_name, s.title FROM teachers AS t JOIN subject_teacher as st ON ( t.teacher_id = st.teacher_id) JOIN subjects AS s ON ( s.subject_id = st.subject_id) WHERE t.teacher_id = " + id;
                console.log(sql);  
                connection.query(sql, (err,result)=>{
                    if (err){
                        console.log(err);
                    }else{
                        console.log(result)
                        response.send(result);
                    }
                })
            }

        });
        
        


app.use(function(req,res,next)
{
    respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
    res.status(404).send(respuesta);
})





app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Servidor en puerto ", PORT);
});