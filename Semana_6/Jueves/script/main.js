const btn_one = document.querySelector(".js_btn_one");
/*De esta manera si escribes dos eventos de onclick el ultimo reescribe al primer, y asi es con los demas eventos */
btn_one.onclick = function(){
    console.log("Hola mundo 1");
};

/*En cambio con addEventListener se ejecutan todas las funciones que hay*/
const btn_two = document.querySelector(".js_btn_two");

function eventOne(){
    console.log("Hola mundo 2");
}

function eventTwo(){
    console.log("Hola mundo 3");
}

btn_two.addEventListener("click",eventOne);
btn_two.addEventListener("click",eventTwo);

setTimeout(()=>{
    btn_two.removeEventListener("click",eventOne);
},5000);

function leerPersona(event){
    event.preventDefault();
    const name = document.querySelector(".js_name");
    const lastname = document.querySelector(".js_lastname");
    alert("Hola "+name.value+" "+lastname.value);
};

const form = document.querySelector("form");

form.addEventListener("submit",leerPersona);

const name1 = form.querySelector(".js_name");
const lastname1 = form.querySelector(".js_lastname");

function seleccionarInput(){
    this.style.backgroundColor=this.dataset.colorBg;
    this.classList.add("is-active");//classList manipula clases, con add agregas la clase al elemento
}

function salirInput(){
    this.style.backgroundColor="";
    this.classList.remove("is-active");
}

name1.addEventListener("mouseenter",seleccionarInput);
lastname1.addEventListener("mouseenter",seleccionarInput);

name1.addEventListener("mouseout",salirInput);
lastname1.addEventListener("mouseout",salirInput);