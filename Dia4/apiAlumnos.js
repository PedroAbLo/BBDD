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


//=============VERBOS===========================

app.get("/alumnos", 
        function(request, response){
            let sql;
            let id = request.query.id;
            if(id == undefined){
                sql = "SELECT * FROM students";

            }else{
                sql = "SELECT * FROM students WHERE student_id = " + id;
                console.log(sql);  
            }
            connection.query(sql, (err,result)=>{
                    if (err){
                        console.log(err);
                    }else{
                        console.log(result)
                        response.send(result);
                    }
                })
        });
        
app.post("/alumnos", 
        function(request, response)
        {
            console.log(request.body);
            let sql = "INSERT INTO students (first_name, last_name, group_id, añoIngreso) " + 
                    "VALUES ('" + request.body.first_name + "', '" + 
                                  request.body.last_name + "', '" +
                                  request.body.group_id + "', '" +
                                  request.body.añoIngreso + "')";
            console.log(sql);                      
            connection.query(sql, (err, result)=>{
                if (err) 
                    console.log(err);
                else{
                    console.log(result);
                    if (result.insertId)
                        response.send(String(result.insertId));
                    else
                        response.send("-1");
                }
            })
        }
        );         

app.put("/alumnos", 
        function(request, response)
        {
            // let id = request.body.id;
            console.log(request.body);
            let params = [request.body.first_name, 
                          request.body.last_name, 
                          request.body.group_id,
                          request.body.añoIngreso,
                          request.body.id]

            let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , last_name = COALESCE(?, last_name) , " + 
            "group_id = COALESCE(?, group_id), añoIngreso = COALESCE(?, añoIngreso) WHERE student_id = ?" 

            console.log(sql); 
            connection.query(sql, params,(err, result)=>{
                if (err) 
                    console.log(err);
                else{
                    response.send(result);
                }
            })
        }
        ); 
        
app.delete("/alumnos", 
        function(request, response)
        {
            let id = request.body.id;
            console.log(request.body);
            let sql = "DELETE FROM students WHERE student_id = '" + id + "'";
            console.log(sql); 
            connection.query(sql, (err, result)=>{
                if (err) 
                    console.log(err);
                else 
                {
                    response.send(result);
                }
            })
        }
        ); 


app.use(function(req,res,next)
{
    respuesta = {error: true, codigo: 404, mensaje: 'URL no encontrada'};
    res.status(404).send(respuesta);
})





app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Servidor en puerto ", PORT);
});