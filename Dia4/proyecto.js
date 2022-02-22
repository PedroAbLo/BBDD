


// ============== Eventos ==================
document.getElementById("mostrar-alumno").addEventListener("click", getAlumnos, false);
document.getElementById("crear-alumno").addEventListener("click", postAlumno , false);
document.getElementById("actualizar-alumno").addEventListener("click", putAlumno, false);
document.getElementById("eliminar-alumno").addEventListener("click", deleteAlumno , false);
document.getElementById("mostrar-notas").addEventListener("click", getNotas, false);
document.getElementById("crear-notas").addEventListener("click", postNota , false);
document.getElementById("actualizar-notas").addEventListener("click", putNota, false);
document.getElementById("eliminar-notas").addEventListener("click", deleteNota , false);
document.getElementById("nota-media").addEventListener("click", getNotaMedia , false);
document.getElementById("apuntadas").addEventListener("click", getApuntadas , false);
document.getElementById("impartidas").addEventListener("click", getImpartidas , false);


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
        let alumno = {"student_id" : document.getElementById("id-alumno").value,
                      "first_name" : document.getElementById("nombre-alumno").value,
                      "last_name"  : document.getElementById("apellido").value,
                      "group_id"   : document.getElementById("grupo").value,
                      "añoIngreso" : document.getElementById("año").value
        };
        
        let url ="http://localhost:3000/alumnos";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: alumno,
            // body: JSON.stringify(alumno),
            method: "POST"
        }

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
                      "group_id"   : document.getElementById("grupo").value,
                      "añoIngreso" : document.getElementById("año").value
        };
        
        let url ="http://localhost:3000/alumnos";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(alumno),
            method: "POST"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

async function deleteAlumno() {
    let id = document.getElementById("id-alumno").value
    let url = `http://localhost:3000/alumnos?id=${id}`
    resultElement.innerHTML = "";
    try {
      const res = await fetch(url, { method: "delete" });
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: { "Content-Type": res.headers.get("Content-Type") },
        data: data,
      };
      console.log(result)
    } catch (err) {
      console.log(err);
    }
  }

// ================================= FUNCIONALIDADES CON NOTAS ===============================

async function getNotas(){
    let id = document.getElementById("id-notas").value;
    let url = `http://localhost:3000/notas`
    if(id !== ""){

        url = `http://localhost:3000/notas?id=${id}`

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

async function postNota(){
    try{
        let nota = {"mark_id"       : document.getElementById("id-notas").value,
                    "student_id"    : document.getElementById("alumno").value,
                    "subject_id"    : document.getElementById("asignatura").value,
                    "date"          : document.getElementById("fecha").value,
                    "mark"          : document.getElementById("nota").value
        };
        
        let url ="http://localhost:3000/notas";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(nota),
            method: "POST"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

async function putNota(){
    try{
        let nota = {  "mark_id"     : document.getElementById("id-notas").value,
                      "student_id"  : document.getElementById("alumno").value,
                      "subject_id"  : document.getElementById("asignatura").value,
                      "date"        : document.getElementById("fecha").value,
                      "mark"        : document.getElementById("nota").value
        };
        
        let url ="http://localhost:3000/notas";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(nota),
            method: "POST"
        }

        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}

async function deleteNota() {

    let resultElement = document.getElementById("id-notas");
    const id = resultElement.value;
    let url = `http://localhost:3000/notas?id=${id}`
    resultElement.innerHTML = "";
    try {
      const res = await fetch(url, { method: "delete" });
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: { "Content-Type": res.headers.get("Content-Type") },
        data: data,
      };
      console.log(result)
    } catch (err) {
      console.log(err);
    }
  }

// ================================= FUNCIONALIDADES CON ADICIONALES ===============================


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

function mostrarNota(notas){
    cuerpoTabla.innerHTML = "";
    cuerpoTabla.innerHTML =`
    <tr>
    <th>ID</th>
    <th>NOMBRE</th>
    <th>APELLIDO</th>
    <th>GRUPO</th>
  </tr>`
    for(let nota of notas){

        cuerpoTabla.innerHTML += `      <tr>
        <td>${nota.mark_id}</td>    
        <td>${nota.student_name}</td>    
        <td>${nota.subject_name}</td>
        <td>${nota.mark}</td>     
      </tr>`
    }
}