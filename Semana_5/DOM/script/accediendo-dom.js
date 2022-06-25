/*getElementById captura a los elementos segun su ID*/
console.log(document.getElementById("h2"));
/*getElementByTagName captura a los elementos segun su Etiqueta,todas las etiquetas*/
const h2Todos = document.getElementsByTagName("h2");
console.log("H2 primero ",h2Todos[0]);
console.log("H2 segundo ",h2Todos[1]);
/*querySelector solo al atrapa al primero que encuentra*/
console.log("querySelector Por eqtiqueta ",document.querySelector("h2"));
console.log("querySelector Por id ",document.querySelector("#h2"));
console.log("querySelector Por clase ",document.querySelector(".h2"));
console.log("querySelector Por atributo ",document.querySelector("[class='h2']"));

/*querySelectorAll atrapa a todos los elementos(clase, etiqueta,id, etc)*/
console.log("querySelectorAll Por eqtiqueta ",document.querySelectorAll("h2"));

function modificando(nodo,color,fontSize,background,fontFamily){
    nodo.style.color=color;
    nodo.style.fontSize=fontSize;
    nodo.style.backgroundColor=background;
    nodo.style.fontFamily=fontFamily;
}

function capturando(){
    modificando(document.querySelector(".h2"),"white","45px","red","arial");
    modificando(document.querySelector(".h3"),"red","45px","white","arial");
}

capturando();