

//====================== EVENTOS =========================================

document.getElementById("nota-media").addEventListener("click", getNotaMedia , false);
document.getElementById("apuntadas").addEventListener("click", getApuntadas , false);
document.getElementById("impartidas").addEventListener("click", getImpartidas , false);


// ======================= GETS ADICIONALES ===============================

async function getNotaMedia(){
    let id = document.getElementById("id-adicional").value;
    let url = `http://localhost:3000/media?id=${id}`
    let param = {
          method:"GET"
    }
    
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        console.log(result);
        mostrarMedia(result);
        // if(Array.isArray(result)==true){
        //     console.log(result);
        //     mostrarAlumno(result);
        // }else{
        //     let arrayNuevo = [];
        //     arrayNuevo.push(result);
        //     console.log(arrayNuevo)
        //     mostrarAlumno(arrayNuevo);
        // }

    } catch(e){
        console.log(e);
    }

}


async function getImpartidas(){
    let id = document.getElementById("id-adicional").value;
    let url = `http://localhost:3000/impartidas`
    if(id !== ""){

        url = `http://localhost:3000/impartidas?id=${id}`

    }
    let param = {
          method:"GET"
    }
    
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        if(Array.isArray(result)==true){
            console.log(result);
            mostrarImpartidas(result);
        }else{
            let arrayNuevo = [];
            arrayNuevo.push(result);
            console.log(arrayNuevo)
            mostrarImpartidas(arrayNuevo);
        }

    } catch(e){
        console.log(e);
    }

}


async function getApuntadas(){
    let id = document.getElementById("id-adicional").value;
    let url = `http://localhost:3000/apuntadas`
    if(id !== ""){

        url = `http://localhost:3000/apuntadas?id=${id}`

    }
    let param = {
          method:"GET"
    }
    
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        if(Array.isArray(result)==true){
            console.log(result);
            mostrarApuntadas(result);
        }else{
            let arrayNuevo = [];
            arrayNuevo.push(result);
            console.log(arrayNuevo)
            mostrarApuntadas(arrayNuevo);
        }

    } catch(e){
        console.log(e);
    }

}



//======================== FUNCIONES PARA MOSTRAR DATOS ======================


function mostrarMedia(media) {

    let cuerpoTabla = document.getElementById("media-tabla");
    cuerpoTabla.innerHTML = "";
    cuerpoTabla.innerHTML =`
    <tr>
    <th>ID </th>
    </tr>
    <tr>
    <td>${media[0].media}</td>      
    </tr>`

}


function mostrarApuntadas(datos) {

    let cuerpoTabla = document.getElementById("apuntadas-tabla");
    cuerpoTabla.innerHTML = "";
    cuerpoTabla.innerHTML =`
    <tr>
    <th>NOMBRE</th>
    <th>APELLIDO</th>
    <th>ASIGNATURA</th>
  </tr>`

    for(let dato of datos){

        cuerpoTabla.innerHTML += `      <tr>
        <td>${dato.first_name}</td>    
        <td>${dato.last_name}</td>
        <td>${dato.title}</td>     
      </tr>`
    }
}

function mostrarImpartidas(datos) {

    let cuerpoTabla = document.getElementById("impartidas-tabla");
    cuerpoTabla.innerHTML = "";
    cuerpoTabla.innerHTML =`
    <tr>
    <th>NOMBRE</th>
    <th>APELLIDO</th>
    <th>ASIGNATURA</th>
  </tr>`

    for(let dato of datos){

        cuerpoTabla.innerHTML += `      <tr>   
        <td>${dato.first_name}</td>
        <td>${dato.last_name}</td>
        <td>${dato.title}</td>     
            
      </tr>`
    }
}


