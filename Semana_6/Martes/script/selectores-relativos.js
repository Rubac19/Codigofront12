const ul = document.querySelector("ul");
// firstElementChild, primer elemento
console.log("ul -> ",ul.firstElementChild);
// lastElementChild, ultimo elemento
console.log("ul -> ",ul.lastElementChild);
//Siguiente elemento ul.firstElementChild.nextElementSibling
console.log("ul -> ",ul.firstElementChild.nextElementSibling);
// children
console.log("ul -> ",ul.children);
console.log("ul -> ",ul.children[0]);
console.log("ul -> ",ul.children[1]);
// sibbling next, siguiente elemento
console.log("ul -> ",ul.nextElementSibling);
// Atrpar el padre
console.log("ul -> ",ul.parentElement);
// closest, ir a cualquier padre
console.log(document.querySelector("li").closets("h1"));