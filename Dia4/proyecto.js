


// ============== Eventos ==================
document.getElementById("mostrar-alumno").addEventListener("click", getAlumnos, false);
document.getElementById("crear-alumno").addEventListener("click", postAlumno , false);
document.getElementById("actualizar-alumno").addEventListener("click", putAlumno, false);
document.getElementById("eliminar-alumno").addEventListener("click", deleteAlumno , false);



// ================================= FUNCIONALIDADES CON ALUMNOS ===============================
async function getAlumnos(){
    let id = document.getElementById("id-alumno").value;
    let url = `http://localhost:3000/alumnos`
    if(id !== ""){

        url = `http://localhost:3000/alumnos?id=${id}`

    }
    let param = {
          method:"GET"
    }
    
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        if(Array.isArray(result)==true){
            console.log(result);
            mostrarAlumno(result);
        }else{
            let arrayNuevo = [];
            arrayNuevo.push(result);
            console.log(arrayNuevo)
            mostrarAlumno(arrayNuevo);
        }

    } catch(e){
        console.log(e);
    }

}

async function postAlumno(){
    try{
        let alumno = {"first_name" : document.getElementById("nombre-alumno").value,
                      "last_name"  : document.getElementById("apellido").value,
                      "group_id"   : document.getElementById("grupo").value
        };
        
        let url ="http://localhost:3000/alumnos";
        console.log(alumno)

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(alumno),
            method: "POST"
        }
        console.log(alumno);

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

async function putAlumno(){
    try{
        let alumno = {"student_id" : document.getElementById("id-alumno").value,
                      "first_name" : document.getElementById("nombre-alumno").value,
                      "last_name"  : document.getElementById("apellido").value,
                      "group_id"   : document.getElementById("grupo").value
        };

        
        let url ="http://localhost:3000/alumnos";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(alumno),
            method: "PUT"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

async function deleteAlumno(){
   try{
        let alumno = {"student_id" : document.getElementById("id-alumno").value};
        let url = `http://localhost:3000/alumnos`;
        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(alumno),
            method:"DELETE"
        }

        let data = await fetch(url,param);
        let result = await data.json();
        console.log(result);
   }catch(e){
       console.log(e);
   }

}


//===============FUNCIONES PARA MOSTRAR DATOS ===============================


function mostrarAlumno(alumnos) {

    let cuerpoTabla = document.getElementById("alumnos-tabla");
    cuerpoTabla.innerHTML = "";
    cuerpoTabla.innerHTML =`
    <tr>
    <th>ID</th>
    <th>NOMBRE</th>
    <th>APELLIDO</th>
    <th>GRUPO</th>
  </tr>`

    for(let alumno of alumnos){

        cuerpoTabla.innerHTML += `      <tr>
        <td>${alumno.student_id}</td>    
        <td>${alumno.first_name}</td>    
        <td>${alumno.last_name}</td>
        <td>${alumno.group_id}</td>     
      </tr>`
    }
}

