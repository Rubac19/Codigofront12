const p = document.querySelectorAll("p");
console.log(p);
console.log(p[0]);
p[0].innerHTML="<b> Hola mundo </b>";
p[1].textContent="<b> Hola mundo </b>";
p[2].style.backgroundColor="red";
p[2].style.color="white";
p[3].setAttribute("style","color:red;background-color:black");
p[3].setAttribute("class","clase-agregada");
p[3].setAttribute("id","id-agregada");

//Metodo de tiempo
setTimeout(() => {
    p[3].removeAttribute("style");
    p[3].removeAttribute("class");
    p[3].removeAttribute("id");
}, 2000);