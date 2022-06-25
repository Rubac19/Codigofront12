/*Ejercicio 1 */
const p = document.querySelectorAll("p");
const a = document.querySelectorAll("a");
function cambiarDesignP(node,color,tamanio,fuente){
    node.style.color=color;
    node.style.fontSize=tamanio;
    node.style.fontFamily=fuente;
}

function cambiarDesignA(node,href,texto){
    node.href=href;
    node.textContent=texto;
}

function removerP(){
    this.removeAttribute("style");
}

//p[0].onmouseout=removerP;
setTimeout(() => {
    cambiarDesignP(p[0],"red","20px","arial");
    cambiarDesignA(a[0],"https://google.com","Primer parrafo");
}, 5000);


/*Ejercicio 2 */
const ul = document.querySelector("ul");
function modificaLI(color,background,fontSize){
    let i=0;
    for(i=0;i<4;i++){
        ul.children[i].textContent="Hola mundo";
        ul.children[i].style.color=color;
        ul.children[i].style.backgroundColor=background;
        ul.children[i].style.fontSize=Number(fontSize.substring(0,2))+i+"px";
    }
}
modificaLI("white","black","14px");

/*Ejercicio 3 */
const div = document.querySelector("div");

function modificarDIV(node,backgroundColor,fontSize,color,fontFamily){
    node.style.color=color;
    node.style.fontSize=fontSize;
    node.style.fontFamily=fontFamily;
    node.style.backgroundColor=backgroundColor;
}

modificarDIV(div.firstElementChild,"red","11px","white","arial");
modificarDIV(div.firstElementChild.nextElementSibling,"blue","13px","red","times");
modificarDIV(div.lastElementChild,"white","15px","red","arial");

