function addUser() {
    /*
     Funcion que retorna valores del formulario
    */
    function getValues() {
      const values = {
        name: document.querySelector(".js_name").value,
        lastname: document.querySelector(".js_lastname").value,
        age: document.querySelector(".js_age").value,
        country: document.querySelector(".js_country").value,
        photo: document.querySelector(".js_photo").value,
        email: document.querySelector(".js_email").value,
        description: document.querySelector(".js_description").value,
      };
  
      return values;
    }
  
    /*
    Funcion para construir un elemento tipo card
    */
    function makeCard(values) {
      const card = document.createElement("article");
      card.innerHTML = `
          <div class="card">
              <img src=${values.photo} class="card-img-top" >
              <div class="card-body">
                  <h5 class="card-title">${values.name} ${values.lastname}</h5>
                  <h5 class="card-title">${values.age}</h5>
                  <h5 class="card-title">${values.country}</h5>
                  <h5 class="card-title">${values.email}</h5>
                  <p class="card-text">${values.description}</p>
              </div>
              <button>X</button>
          </div>
      `;
  
      card.classList.add("col", "col-4", "mb-4");
      card.querySelector("button").onclick = function () {
        if (confirm("Estas seguro que deseas eliminar esta carta?")) {
          card.remove();
        }
      };
  
      return card;
    }
  
    /*
    Funcion para construir un elemento tipo row
    */
    function makeRow(values) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${values.name} ${values.lastname}</td>
          <td>${values.age}</td>
          <td>${values.country}</td>
          <td><img width="40"
           height="40" src=${values.photo}/></td>
          <td>${values.email}</td>
          <td>${values.description}</td>
      `;
  
      return tr;
    }
  
    /*
    Agregar elementos nodo en el document
    */
    function addDom(node, container) {
      const app = document.getElementById(container);
      app.appendChild(node);
    }
  
    const form = document.querySelector("form"); // atrapo el formulario
    form.onsubmit = function (event) {
      event.preventDefault();
      addDom(makeCard(getValues()), "app");
      addDom(makeRow(getValues()), "tableBody");
      form.reset();
    }; // registro el evento submit
  }
  
  addUser();