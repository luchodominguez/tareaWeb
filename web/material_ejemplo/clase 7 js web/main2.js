let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");
let total = 0;

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
        lista.innerHTML +=
            `   <li class="forma">
                <p>Producto: ${arrayProductos[i].nombre}- Precio: $${arrayProductos[i].precio} </p>
                <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly >
                <input type="number" id="cantidad${i}" placeholder="Ingrese cantidad" >
                <button id="btn${i}" >Agregar al carrito</button>
            </li>
`
    }

    for(let i = 0; i< arrayProductos.length; i++){
        document.getElementById(`btn${i}`).addEventListener("click", ()=> {
            comprar(i, productos)
        } )
    }
}


function comprar(index, arrayProductos) {
    let stockElement = document.getElementById(`stock${index}`);
    let cantidadElement = document.getElementById(`cantidad${index}`);
    let stock = stockElement.value;
    let cantidad = cantidadElement.value;
    let precio = arrayProductos[index].precio;

    if(cantidad > 0 && cantidad <= stock){
        total += cantidad * precio;
        alert("Compra exitosa. Total $" + total) ;
        totalText.innerHTML = `Total: ${total}`
        stockElement.value = stock - cantidad;
    } else {
        alert("Compra invalida. La cantidad debe ser mayor a 0 y menor o igual al stock")
    }

}


pintarProductos(productos);
