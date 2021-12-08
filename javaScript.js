class producto {
    constructor(nombre, marca, precio, envio) {
    this.nombre = nombre
    this.marca = marca
    this.precio = precio
    this.envio = envio
    }
}

let producto1 = new producto(' monitor', ' Zowie', 100000, ' gratuito' )
let producto2 = new producto(' teclado', ' Redragon', 5000, ' gratuito' )
let producto3 = new producto(' mouse', ' Hyperx', 3000, 800 )
let producto4 = new producto(' procesador', ' Intel i5 9gen', 60000, ' gratuito' )
let producto5 = new producto(' memoria ssd', ' Kingston 960 gb', 14000, ' gratuito' )
let producto6 = new producto(' mouse pad', ' Logitech', 2500, 900 )

let productos = [producto1 , producto2, producto3, producto4, producto5, producto6]

let divProductos = document.getElementById('divProductos')

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
    <div class="card presentacionProductos" id="producto${indice + 1}" style="width: 18rem;">
        <img src="./imagenes/producto${indice + 1}.jpg" class="card-img-top" alt="...">
        <div class="card-body cardProducto">
            <h5 class="card-title">producto ${indice + 1}</h5>
            <p class="card-text">nombre:${producto.nombre}</p>
            <p class="card-text">marca:${producto.marca}</p>
            <p class="card-text">precio:${producto.precio}</p>
            <p class="card-text">envio:${producto.envio}</p>
            <a href="#" id="botonComprar" class="btn btn-dark">Comprar</a>
        </div>
    </div>
    `
}) 

let botonComprar = document.getElementById('botonComprar');

botonComprar.addEventListener('click',avisoCompra);

function avisoCompra() {
    alert('¿Estas a punto de comprar este objeto, estas seguro/a?')
};

/// 30/11

class Pedidos {
    constructor(componentes, formaPago, tipoEnvio) {
        this.componentes = componentes;
        this.formaPago = formaPago;
        this.tipoEnvio = tipoEnvio;
    }

    datosDeCommpra() {
        return (`${this.componentes} - ${this.formaPago} - ${this.tipoEnvio}`)
    }
}

let informacionDeCompra = []

let formulario = document.getElementById('formCompra');

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let datosFormulario = new FormData(e.target)
    let pedido = new Pedidos(datosFormulario.get('componentes'), datosFormulario.get('formaPago'), datosFormulario.get('tipoEnvio'))
    informacionDeCompra.push(pedido)

    localStorage.setItem('informacionDeCompra', JSON.stringify(informacionDeCompra))

    formulario.reset()
} )

//let areaDeCompras = document.getElementById('areaDeCompras')
//Reemplazo de un elemento para cumnplir con un desafio de JQuery
let areaDeCompras = $('#areaDeCompras')

document.getElementById('botonComprar').addEventListener('click', () => {
    let parseador = JSON.parse(localStorage.getItem('tareas'))

})

const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show')
    
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})


