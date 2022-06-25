const form = document.querySelector("form");
const aumentar = document.querySelector(".aumentar");
function crear (event){
    event.preventDefault();
    console.log("ga");
    const div = document.createElement("div");
    const nombre = document.querySelector(".js_Nombre");
    const apellido = document.querySelector(".js_Apellido");
    const edad = document.querySelector(".js_Edad");
    const pais = document.querySelector(".js_Pais");
    const imagen = document.querySelector(".js_URL");
    const email = document.querySelector(".js_email");
    const descripcion = document.querySelector(".js_txtA");
    let concatenar = nombre.value +" "+ apellido.value;
    let imagenValor = imagen.value;
    let string = '<br><br><div class="card" style="width: 18rem;"> <img src='+imagenValor +
    ' class="card-img-top" alt="..."> <div class="card-body">' +
    ' <h5 class="card-title"> '+concatenar+' </h5>'+
    ' <div class="ordenar"> <p class="card-text"><strong>Edad: </strong> </p> <p> '+ edad.value +' </p> </div>'+
    ' <div class="ordenar"> <p class="card-text"><strong>Pais: </strong></p> <p> '  +pais.value+' </p> </div>'+
    ' <div class="ordenar"> <p class="card-text"><strong>Email: </strong></p> <p> '  +email.value+' </p> </div>'+
    ' <div class="ordenar"> <p class="card-text">'  +descripcion.value+' </p> </div>'+
    ' </div> <button class="Eliminar">X</button>';
    div.innerHTML = string;
    aumentar.appendChild(div);
}

const nombre = document.querySelector(".js_Nombre");
function validar(event){
    event.preventDefault();
    if(nombre.value.length < 5){
        alert("el nombre debe ser de 5 digitos");
        return;
    }else{
        form.addEventListener("submit",crear);
    }

    this.submit();
}

nombre.onkeyup = function(){
    if(nombre.value.length < 5){
        nombre.style.color="red";
    }else{
        nombre.style.color="black";
    }
};

form.addEventListener("submit",validar);
