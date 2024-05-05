
let container=document.getElementById("principal");


let contenedorBusqueda = document.createElement("div");
contenedorBusqueda.setAttribute("class", "container");
container.appendChild(contenedorBusqueda);

let h1 = document.createElement("h1");
h1.textContent = "Pelis Search API";
contenedorBusqueda.appendChild(h1);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "inputSearch");
contenedorBusqueda.appendChild(input);

let button = document.createElement("button");
button.setAttribute("id", "btnSearch");
button.setAttribute("class", "rgb");
button.textContent = "Search";
contenedorBusqueda.appendChild(button);

let resultContainer= document.createElement("div");
resultContainer.setAttribute("id", "results");
container.appendChild(resultContainer);

