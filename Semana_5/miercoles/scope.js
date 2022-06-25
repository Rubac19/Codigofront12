

function nombreFunction(parametroA,parametroB){
    console.log(parametroA);
    console.log(parametroB);
}


function main(){
    nombreFunction(1,2);
    nombreFunction(4,3);
}

main();
console.log("Hola mundo");
console.info("Ga");
console.warn(":v");
console.error("ga");

let edad=prompt("Ingrse su edad");

if(edad>=18){
    alert("Bienvenido");
}else{
    alert("Alamos causa")
}

// debugger -> para detener la funcionavanzar paso a paso

function ejemploUno(){
    function suma(a,b){
        if(arguments.length>2){
            throw console.error("Solo dos argumentos");
        }
        return a+b;
    }
    suma(2,3);
    suma(2,3,5);
}

//ejemploUno();

function funtionException(){
    let message="";
    const nombre = prompt("Ingresa tu nombre:");
    try{
        if(nombre.length<5){
            throw "SHORT";
            
        }

        if(nombre.length>10){
            throw "LONG";
            
        }

        message="El nombre "+nombre+" es correcto";
    }catch(error){
        if(error=="SHORT"){
            message="El nombre "+nombre+" es muy corto";
        }

        if(error=="LONG"){
            message="El nombre "+nombre+" es muy largo";
        }
    }finally{
        alert(message);
    }
}

funtionException();