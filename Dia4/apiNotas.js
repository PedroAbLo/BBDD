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

app.get("/notas", 
        function(request, response){
            let sql;
            let id = request.query.id;
            if(id == undefined){
                sql = "SELECT m.mark_id, s.first_name, sub.title, m.mark FROM marks AS m JOIN subjects AS sub ON ( sub.subject_id = m.subject_id) JOIN students AS s ON (s.student_id = m.student_id)";

            }else{
                sql = "SELECT m.mark_id, s.first_name, sub.title, m.mark FROM marks AS m JOIN subjects AS sub ON ( sub.subject_id = m.subject_id) JOIN students AS s ON (s.student_id = m.student_id) WHERE m.student_id = " + id;
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
        
app.post("/notas", 
        function(request, response)
        {
            console.log(request.body);
            let sql = `INSERT INTO marks (student_id, subject_id, mark) VALUES (${request.body.student_id},  ${request.body.subject_id}, ${request.body.mark})`;
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

app.put("/notas", 
        function(request, response)
        {
            // let id = request.body.id;
            console.log(request.body);
            let params = [request.body.student_id, 
                          request.body.subject_id, 
                          request.body.mark]
                          

            let sql = `UPDATE marks SET student_id = COALESCE(?, student_id) , subject_id = COALESCE(?, subject_id) , mark = COALESCE(?, mark) WHERE mark_id = ` + request.body.mark_id; 
        
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
        
app.delete("/notas", 
        function(request, response)
        {
            let id = request.body.mark_id;
            console.log(request.body);
            let sql = "DELETE FROM marks WHERE mark_id = " + id;
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