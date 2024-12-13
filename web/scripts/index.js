let divPaneles = document.getElementById("contenedorPaneles");

let carrito = [];
let cantidadCarrito = 0;

let productos = [
  {
    nombre: "Jabón Líquido Ariel",
    imagen: "images/jabonLiquido.png",
    descripcion: "Jabón Líquido Ariel 2,7 Litros",
    precio: 3000,
    stock: 20,
  },
  {
    nombre: "Paquete Oreo",
    producto: "masitas",
    imagen: "images/masitasOreo.png",
    descripcion: "Oreo Rellenas Con Crema Sabor Original 354 Gr.",
    precio: 1500,
    stock: 25,
  },
  {
    nombre: "Fideos Capelettini",
    imagen: "images/fideosCapelettini.png",
    descripcion: "Giacomo Capelettini Queso Y Jamon 500 Grs",
    precio: 3000,
    stock: 22,
  },
  {
    nombre: "Kétchup",
    imagen: "images/ketchup.png",
    descripcion: "Ketchup Clásico Hellmann's Doypack 250 Gr.",
    precio: 1200,
    stock: 30,
  },
  {
    nombre: "Coca-Cola",
    imagen: "images/cocaCola.png",
    descripcion: "Coca-Cola Original 2,25L",
    precio: 1550,
    stock: 25,
  },
  {
    nombre: "Queso Rallado",
    imagen: "images/quesoRallado.png",
    descripcion: "queso rallado la Serenisima 150 gr",
    precio: 1500,
    stock: 40,
  },
  {
    nombre: "Pan Lactal",
    imagen: "images/panLactal.png",
    descripcion: "Bimbo Pan de Mesa Blanco 400g",
    precio: 3460,
    stock: 20,
  },
  {
    nombre: "CIF",
    imagen: "images/detergente.png",
    descripcion: "Cif Active gel Limón Verde x500ml",
    precio: 1930,
    stock: 20,
  },
];

function rePintar() {
  divPaneles.innerHTML = "";
  pintarProductos(carrito, productos);
}

function calcularTotal(listaCarrito) {
  let total = 0;

  for (let i = 0; i < listaCarrito.length; i++) {
    total += listaCarrito[i].precio * listaCarrito[i].cantidad;
  }
  pintarTotal(total);
}

function pintarTotal(total) {
  let parrafo = document.getElementById("totalPagar");

  parrafo.innerText = `$ ${total}`;
}

function pintarProductos(listaCarrito, arrayProductos) {
  for (let i = 0; i < arrayProductos.length; i++) {
    divPaneles.innerHTML += `
        <li class="tarjeta">
          <img src="${arrayProductos[i].imagen}" alt="${arrayProductos[i].descripcion}" />
          <p><span class="tituloTarjeta">${arrayProductos[i].nombre}</span></p>
          <p><span class="descripcionTarjeta">${arrayProductos[i].descripcion}</span></p>
          <p>$<span class="precioTarjeta"> ${arrayProductos[i].precio}</span></p>
          <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
          <input type="number" id="entrada${i}" class="inputEntrada" placeholder="Ingrese la cantidad" min="0" max="${arrayProductos[i].stock}">
          <button id="btn${i}" class="btnTarjeta"> Agregar al carrito</button>
        </li>
        `;
  }

  for (let i = 0; i < arrayProductos.length; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", () => {
      let cantidad = document.getElementById(`entrada${i}`).value;
      arrayProductos[i].stock -= cantidad;
      rePintar();
      añadirCarrito(listaCarrito, cantidad, i, arrayProductos);
    });
  }
}

function añadirCarrito(listaCarrito, cantidad, index, arrayProductos) {
  let añadir = {
    nombre: `${arrayProductos[index].nombre}`,
    precio: `${arrayProductos[index].precio}`,
    cantidad: `${cantidad}`,
  };
  listaCarrito.push(añadir);
  console.log(
    `El producto: '${arrayProductos[index].nombre}' x${cantidad} fue añadido a la lista. Precio: $${arrayProductos[index].precio}c/u`
  );
  console.log(listaCarrito);
  calcularTotal(listaCarrito);
}

function comprar(carrito) {
  if (!carrito.length < 1) {
    alert("Compra realizada con éxito 🛒");
  } else {
    alert("No agregaste nada al carrito.");
  }
}

document.getElementById("btnComprar").addEventListener("click", () => {
  comprar(carrito);
});
pintarProductos(carrito, productos);
