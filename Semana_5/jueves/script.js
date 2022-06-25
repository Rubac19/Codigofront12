function suma(a,b){
    return a+b;
}

function ejercicio2(){
    let notas = [0, 0, 0, 0];
    notas[0] = Number(prompt("Ingrese la primera nota"));
    notas[1] = Number(prompt("Ingrese la segunda nota"));
    notas[2] = Number(prompt("Ingrese la tercera nota"));
    notas[3] = Number(prompt("Ingrese la cuarta nota"));
    let promedio = (notas[0]+notas[1]+notas[2]+notas[3])/4
    return promedio;
}

let computadora = {
    marca:"acer",
    anio:2010,
    setMarca: function(marca){
        this.marca=marca;
    },
    getAnio: function(){
        return this.anio;
    },
};
let alumnos = {
    nombres:[],
    setAlumno: function(nombre){
        this.nombres.push(nombre);
    },
    getAlumno: function(nombre){
        return this.nombres.find((el) => el.nombre==nombre);
    },
};


//Constructor de objetos

let iphone = {
    nombre: "iphone",
    modelo: 11,
    marca: "apple",
    numeroSerie: 1234,
    procendencia: "usa",
    getInfo: function () {
      return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
    },
  };
  
  let android = {
    nombre: "android",
    modelo: 12,
    marca: "huawey",
    numeroSerie: 1234,
    procendencia: "usa",
    getInfo: function () {
      return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
    },
  };
  
  let huawey = {
    nombre: "huawey",
    modelo: 12,
    marca: "abc",
    numeroSerie: 1234,
    procendencia: "usa",
    getInfo: function () {
      return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
    },
  };
  
  let firefox = new Object(); // {}
  firefox.nombre = "firefox";
  firefox.modelo = "firefox";
  firefox.marca = "apple";
  firefox.numeroSerie = 1234;
  firefox.procendencia = "usa";
  firefox.getInfo = function () {
    return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
  };
  
  /*CONSTRUCTOR DE OBJETOS */
  function makeMobile(props) {
    this.nombre = props.nombre;
    this.modelo = props.modelo;
    this.marca = props.marca;
    this.numeroSerie = props.numeroSerie;
    this.procedencia = props.procedencia;
    this.getInfo = function () {
      return `El nombre del producto es ${this.nombre} el modelo es ${this.modelo} de la marca ${this.marca}`;
    };
  }
  
  let celularUno = new makeMobile({
    nombre: "celularUno",
    modelo: "modeloUno",
    marca: "marcaUno",
    numeroSerie: "unoserie",
    procedencia: "china",
  });
  
  console.log("celularUno", celularUno.getInfo());
  
  let celuLarDos = new makeMobile({
    nombre: "celulardos",
    modelo: "modelodos",
    marca: "marcados",
    numeroSerie: "dosserie",
    procedencia: "china",
  });
  
  console.log("celuLarDos", celuLarDos.getInfo());