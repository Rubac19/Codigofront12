/*fetch("https://62995fbc6f8c03a97841e0b2.mockapi.io/users")//petición al endpoint
.then((response) => {
    return response.json();//interpreta como formato json
})
.then((response)=>{//recibes datos de la promesa
    console.log("Aca obtuve la respuesta del servidor", response);
})
.catch((error)=>{//capturo en caso halla error
    console.log("error",error);
});*/


function createUser(){
    /* Retorna un objeto con valores del usuario */
    function getValue(){
        return{
            name:document.querySelector(".js_name").value,
            lastname:document.querySelector(".js_lastname").value,
            cellphone:document.querySelector(".js_cellphone").value,
            description:document.querySelector(".js_description").value,
            photo:document.querySelector(".js_photo").value,
        };
    }
    /* Funciona para guardar usuarios */
    function saveUser(user, callback){//callback -> funcion que se ejecuta dentro de otra funcion
        fetch("https://62995fbc6f8c03a97841e0b2.mockapi.io/users",{
            method:"POST",//metodo de registro de datos
            body:JSON.stringify(user),//transformo en formato json el objeto del script
            headers:{
                "Content-type":"application/json; charset=UTF-8"//formato del json
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((response)=>{
            callback();
        })
        .catch((error)=>{
            console.log("error",error);
        });
    }
    /* Funcion para obtener todos los usuarios */
    function getUsers(callback){
        fetch("https://62995fbc6f8c03a97841e0b2.mockapi.io/users")//petición al endpoint
        .then((usuarios) => {
            return usuarios.json();//interpreta como formato json
        })
        .then((usuarios)=>{//recibes datos de la promesa
            callback(usuarios);
        })
        .catch((error)=>{//capturo en caso halla error
            console.log("error",error)});
    }

    function makeCarUser(user){
        const cardUser = document.createElement('article');
        cardUser.innerHTML=`
        <div class="card">
            <img src=${user.photo} class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${user.name} ${user.lastname}</h5>
                <h5 class="card-title">${user.cellphone}</h5>
                <p class="card-text">${user.description}</p>
            </div>
            <button>X</button>
        </div>
     `;
        cardUser.classList.add("col","col-4","mb-4");
        cardUser.querySelector("button").onclick=function(){
            if(confirm("Estas seguro de eliminar esta carta?")){
                cardUser.remove();
            }
        };
        return cardUser;
    }
    
    function addDom(node,container){
        const app=document.getElementById(container);
        app.appendChild(node);
    }

    function eventForm(){
        const form = document.querySelector("form");
        form.onsubmit = function(event){
            event.preventDefault();
            //Se ejecuta saveUser, recibe los valores del usuario y con la funcion se pasa el user creado
            saveUser(getValue(), function(response){
            console.log("respuesta",response);   
            getUsers(function(users){
                users.forEach((user)=>{
                    addDom(makeCarUser(user),"app");
                })
            });
            });
        };
    }

    eventForm();

    getUsers(function(users){
        users.forEach((user)=>{
            addDom(makeCarUser(user),"app");
        })
    });
}

createUser();