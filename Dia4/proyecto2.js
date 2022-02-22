

//========================== EVENTOS =====================================================

document.getElementById("mostrar-notas").addEventListener("click", getNotas, false);
document.getElementById("crear-notas").addEventListener("click", postNota , false);
document.getElementById("actualizar-notas").addEventListener("click", putNota, false);
document.getElementById("eliminar-notas").addEventListener("click", deleteNota , false);


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
            mostrarNota(result);
        }else{
            let arrayNuevo = [];
            arrayNuevo.push(result);
            console.log(arrayNuevo)
            mostrarNota(arrayNuevo);
        }

    } catch(e){
        console.log(e);
    }

}

async function postNota(){
    try{
        let nota = {"student_id"    : document.getElementById("alumno").value,
                    "subject_id"    : document.getElementById("asignatura").value,
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
                      "mark"        : document.getElementById("nota").value
        };
        
        let url ="http://localhost:3000/notas";

        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(nota),
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

async function deleteNota() {

    try{
        let notas = {"mark_id" : document.getElementById("id-notas").value};
        let url = `http://localhost:3000/notas`;
        let param = {
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(notas),
            method:"DELETE"
        }

        let data = await fetch(url,param);
        let result = await data.json();
        console.log(result);
   }catch(e){
       console.log(e);
   }
  }

  // ============ FUNCION PARA MOSTRAR NOTAS =====================

  function mostrarNota(notas){

    let cuerpoTabla = document.getElementById("notas-tabla");
    cuerpoTabla.innerHTML = "";
    cuerpoTabla.innerHTML =`
    <tr>
    <th>ID</th>
    <th>ALUMNO</th>
    <th>ASIGNATURA</th>
    <th>NOTA</th>
  </tr>`
    for(let nota of notas){

        cuerpoTabla.innerHTML += `      <tr>
        <td>${nota.mark_id}</td>    
        <td>${nota.first_name}</td>    
        <td>${nota.title}</td>
        <td>${nota.mark}</td>     
      </tr>`
    }
}