// alert("Hola")

//para ejecutar una funcion despues de tantos milisegundos
// setTimeout(()=>{
//     alert("Hola 2 segundos despues")
// }, 2000 );


//ejecutar una funcion por intervalos de tiempo
//para cortar el intervalo hay que usar clearInterval

let i = 10;

function contador() {
    let timer = setInterval(() => {
        if (i === 0) {
            clearInterval(timer);
            alert("Cuenta finalizada");
        } else {
            console.log(i);
            --i
        }
    }, 1000);
}

// contador()

// setInterval(() => {
//     console.log(i);
//     i++
// }, 1000 ) 

// Date objeto investigar como hacer un reloj 

console.log(1);

setTimeout(() => {
    console.log(2)
}, 2000);

console.log(3);

setTimeout(() => {
    console.log(4)
}, 1000);
