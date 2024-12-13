let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");

const productos = [
    { nombre: "Pan", precio: 2000, stock: 5 },
    { nombre: "Leche", precio: 1500, stock: 5 },
    { nombre: "Carne", precio: 8000, stock: 5 },
    { nombre: "Papas", precio: 3000, stock: 5 },
    { nombre: "Jamon", precio: 6000, stock: 5 },
    { nombre: "Pan", precio: 2000, stock: 5 },
    { nombre: "Leche", precio: 1500, stock: 5 },
    { nombre: "Carne", precio: 8000, stock: 5 },
    { nombre: "Papas", precio: 3000, stock: 5 },
    { nombre: "Jamon", precio: 6000, stock: 5 }
];

function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `<li> 
           Prod: ${arrayProductos[i].nombre} - 
           Precio: $${arrayProductos[i].precio}        
            <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
            <input type="number" id="entrada${i}" placeholder="Ingrese cantidad">
            <button id="btn${i}">Comprar</button>
        </li>`;
    }

    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            comprar(i);
        });
    }
}

let total = 0;

function comprar(index) {
    const stockElement = document.getElementById(`stock${index}`);
    const entradaElement = document.getElementById(`entrada${index}`); 
    const stock = parseInt(stockElement.value);
    const cantidad = parseInt(entradaElement.value);
    const precio = productos[index].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        totalText.innerHTML = `Total: $${total}`;
        stockElement.value = stock - cantidad;
        alert(`Compra realizada exitosamente. Total: $${total}`);
    } else {
        alert('Cantidad no valida. Debe ser mayor que 0 y menor o igual al stock.');
    }
}

pintarProductos(productos);
