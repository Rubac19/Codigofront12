//Atrapando elementos
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
console.log("h1 -> ",h1);
console.log("h1 %O",h1);
//Modificando al elemento
h1.style.color="blue";
h1.style.fontSize="35px";
h1.innerHTML="Hola mundo desde JS";

h2.style.color="blue";
h2.style.fontSize="30px";
h2.innerHTML="Hola mundo desde JS en h2";
//Eventos del elemento
//Primera forma
/*h1.onmouseover = function(){//el mouse sobre el elemento
    this.style.fontSize=String(Number(this.style.fontSize.replace("px",""))+1)+"px";
    this.style.color="red";
};

h1.onmouseout = function(){
    this.style.fontSize=String(Number(this.style.fontSize.replace("px",""))-1)+"px";
    this.style.color="blue";
};

h1.onclick = function(){
    this.style.color="black";
};*/


//Segunda Forma
function addSize(){
    this.style.fontSize=String(Number(this.style.fontSize.replace("px",""))+1)+"px";
    this.style.color="red";
}

function removeSize(){
    this.style.fontSize=String(Number(this.style.fontSize.replace("px",""))-1)+"px";
    this.style.color="blue";
}

h1.onmouseover = addSize;
h1.onmouseout = removeSize;
h2.onmouseover = addSize;
h2.onmouseout = removeSize;