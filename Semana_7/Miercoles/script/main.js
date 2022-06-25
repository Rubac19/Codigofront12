/* OPCIONES DE MENU */
function opcionesMenu(){
    const a =document.querySelector(".js_salir");
    a.onclick = function(){
        if(confirm("Esta seguro que quiere salir del programa")){
            a.href="https://www.google.com.pe/";
        }
    }
}
/* OBTENIENDO VALORES DEL FORM*/ 
function obtenerValores(){
    return{
        nombre:document.querySelector(".js_name").value,
        apellido:document.querySelector(".js_lastname").value,
        telefono:document.querySelector(".js_cellphone").value,
        direccion:document.querySelector(".js_direccion").value,
        photo:document.querySelector(".js_photo").value,
        alias:document.querySelector(".js_alias").value,
    };
}

function obtenerValoresEdit(){
    return{
        nombre:document.querySelector(".js_name_edit").value,
        apellido:document.querySelector(".js_lastname_edit").value,
        telefono:document.querySelector(".js_cellphone_edit").value,
        direccion:document.querySelector(".js_direccion_edit").value,
        photo:document.querySelector(".js_photo_edit").value,
        alias:document.querySelector(".js_alias_edit").value,
    };
}

/* CREACIÓN DE TARJETAS */
function makeCard(student){
    const card = document.createElement('article');
    card.innerHTML=`
    <div class="card">
        <img src=${student.photo} class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title text-center">${student.nombre} ${student.apellido}</h5>
            <p class="card-text text-center">${student.alias}</p>
            <p class="card-text text-center">${student.telefono}</p>
            <p class="card-text text-center">${student.direccion}</p>
            <div class="text-center mt-3">
                <button class="js_delete ">Eliminar</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="js_edit ">Editar</button>
            </div>  
        </div>
    </div>
    `;
    //Agregando clases al Article
    card.classList.add("col","col-4","mb-4");

    /* METODO DELETE */
    card.querySelector(".js_delete").onclick = function(){
        if(confirm("Estas seguro de eliminar este Estudiante")){
            fetch(`https://62995fbc6f8c03a97841e0b2.mockapi.io/Estudiante/${student.id}`,{
                method:'DELETE',
            }).then(function(respuesta){
                return respuesta.json()
            }).then(function(respuesta){
                card.remove();
                alert(`Estudiante ${student.nombre} ${student.apellido} eliminado de la Base de Datos`);
            });
        }
    };

    //Llenar form de editar
    card.querySelector(".js_edit").onclick = function(){
        document.querySelector(".js_name_edit").value=student.nombre;
        document.querySelector(".js_lastname_edit").value=student.apellido;
        document.querySelector(".js_cellphone_edit").value=student.telefono;
        document.querySelector(".js_direccion_edit").value=student.direccion;
        document.querySelector(".js_photo_edit").value=student.photo;
        document.querySelector(".js_alias_edit").value=student.alias;
        document.querySelector(".js_id_edit").value=student.id;
    }

    return card;
}

function addDom(node,container){
    const app = document.getElementById(container);
    app.appendChild(node);
}

/* METODO GET */
function leer(callback){
    fetch("https://62995fbc6f8c03a97841e0b2.mockapi.io/Estudiante")
    .then(function(respuesta){
        return respuesta.json()
    }).then(function(estudiante){
        callback(estudiante)
    });
}

function obtenerEstudiantes(){
    const perf = document.getElementById("perfiles");
    perf.innerHTML="";
    leer(function(estudiantes){
        estudiantes.forEach((student)=>{
            //crear las tarjetas
            addDom(makeCard(student),"perfiles");
        })
    });
}

/* METODO POST */
function registrarUsuario(){
    const form = document.querySelector("form");
    form.onsubmit = function(event){
        event.preventDefault();
        fetch("https://62995fbc6f8c03a97841e0b2.mockapi.io/Estudiante",{
            method:"POST",
            body: JSON.stringify(obtenerValores()),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function(respuesta){
            return respuesta.json()
        }).then(function(repuesta){
            obtenerEstudiantes();
            form.reset();
        });
    }
}

/* METODO EDIT */
function editarFormulario(){
    const form = document.querySelector(".js_form_edit");
    const btnClose = document.querySelector(".js_close");
    form.onsubmit = function(event){
        event.preventDefault();
        let id = form.querySelector(".js_id_edit").value; 
        fetch(`https://62995fbc6f8c03a97841e0b2.mockapi.io/Estudiante/${id}`,{
            method:"PUT",
            body:JSON.stringify(obtenerValoresEdit()),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(function(respuesta){
            respuesta.json()
        }).then(function(respuesta){
            obtenerEstudiantes();
            btnClose.click();
        });
    };

}
obtenerEstudiantes();
registrarUsuario();
editarFormulario();
opcionesMenu();