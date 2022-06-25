/* CCSOM */
const button = document.querySelector("button");
const body = document.querySelector("body");

function ejemploUno(){
    button.onclick=function(){
        console.log("Funcion!!!");
        body.style.background="red";
        console.log(window.getComputedStyle(body).background);
    };
}

/*
CLASSLIST
Interface para manejo de clases
add = agrega una clase
remove = remueve clase
toggle = agrega o quita
contains = devuelve verdadero so la clase existe en el elemento
replace = reemplaza una clase
*/
function ejemploDos(){
    button.onclick = function(){
        // body.classList.add("bgyellow");
        // body.classList.toggle("bgyellow");
        // body.classList.remove("bgred");
        console.log(body.classList.contains("bgyellow"));
        if(body.classList.contains("bgred")){
            body.classList.add("bgyellow");
            body.classList.remove("bgred");
        }else{
            body.classList.add("bgred");
            body.classList.remove("bgyellow");
        }
        body.classList.replace("clase-a-reemplazar","bgblue");
    };
}

//ejemploDos();

function ejemploTres(){
    button.onclick = function(){
        const app = document.getElementById("app");
        const div = document.createElement("div");
        div.innerHTML='<article class="card mb-4"> <img src="https://picsum.photos/200/300" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Titulo del articulo</h5> <p class="card-text">Parrafo del articulo.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> <button>Eliminar</button></article>';
        console.log("%O",div); 
        div.classList.add("col");
        app.appendChild(div);//agregar a la pagina el html, de manera dinamica
        /*Eliminando lo creado */
        div.querySelector("button").onclick = function(){
            console.log("Se esta disparando",div);
            if(confirm("Estas seguro que desea eliminar?")){
                app.removeChild(div);//div.remove();
            }  
        };
    }
}
ejemploTres();
