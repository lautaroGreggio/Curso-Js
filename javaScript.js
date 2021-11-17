class producto {
    constructor(tipo,color,origen) {
        this.tipo = tipo;
        this.color = color;
        this.origen = origen;
        this.info = `Soy un ${this.tipo}, fui fabricado en ${this.origen} y mi color es ${this.color}`;
    }
    verInfo() {
        console.log(this.info)
    }
}

let monitor = new producto('monitor', 'negro', 'China')
let teclado = new producto('teclado', 'negro', 'Argentina')
let auricular = new producto('auricular', 'blanco', 'Taiwan')

monitor.verInfo();
teclado.verInfo();
auricular.verInfo();



//Desafio N°6 Arrays

let mercaderia = ['placas madres', 'procesadores', 'mouses', 'gabinetes', 'memorias ram', 'pad' ] ;

for (let i = 0; i < 6; i++) {
    console.log(mercaderia[i]);
}
//Desafio complementario utilizando sort (Acomodar alfabeticamente)

mercaderia.sort((a,b) => {
    if (a==b) {
        return 0;
    }
    if (a<b) {
        return -1;
    }
    return 1;
})
console.log(mercaderia);

let precio, total, cuotas, resultado;
function ingresarValores(){
    precio = parseInt(prompt('Buen dia, porfavor indique el precio del producto a calcular:'));
    cuotas = parseInt(prompt('Porfavor indique en numero de pagos:\n1 - (5% de descuento)\n3 - (Sin interés)\n6 - (Sin interés)\n12 - (10% de interés)'));
}
const calculoPrecio = () => {
    if(cuotas == 1){
        total = precio - (precio * 0.05);
    } else if(cuotas == 3){
        total = precio;
    } else if(cuotas == 6){
        total = precio;
    } else if(cuotas == 12){
        total = precio + (precio * 0.1);
    } else {
        alert('El número de pagos ingresado es inválido, intente nuevamente.');
        ingresarValores();
    }
}
function cuotasTotal(){
    ingresarValores();
    calculoPrecio();
    resultado = total / cuotas;
    if(cuotas > 1){
        alert('El total a pagar es: $' + total + ' en ' + cuotas + ' pagos de $' + resultado);
    } else {
        alert('El total en un pago es: $' + total);
    }
}
cuotasTotal();