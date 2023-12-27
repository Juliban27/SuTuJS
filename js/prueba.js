let ids = [];

const productos = {
    CPUs: [
        { nombre: "AMD Ryzen 7 7800X3D", precio: 1901043 },
        { nombre: "Intel Core i9-13900KS", precio: 3080741 },
    ],
    DiscosDuros: [{ nombre: "Samsung 970 EVO", precio: 489930 }],
    Teclados: [
        { nombre: "Razer BlackWidow V4", precio: 885572 },
        { nombre: "Corsair K70 CORE", precio: 465692 },
    ],
    Mouse: [
        { nombre: "Logitech G305", precio: 139720 },
    ],
    Laptops: [
        { nombre: "MSI Pulse GL66", precio: 6770086 },
    ],
    GPUs: [
        { nombre: "4090 TI Founders Edition", precio: 6325500 },
    ],
    Audifonos: [
        { nombre: "HyperX Cloud III", precio: 275926 },
    ],
    Motherboards: [
        { nombre: "Asus ROG MAXIMUS Z690 HERO EVA", precio: 2752025 },
    ],
    PSU: [
        { nombre: "NZXT PSU C850", precio: 550371 },
    ],
    Cooler: [
        { nombre: "NZXT Kraken 240", precio: 571540 },
    ],
};

let eleccionUsuario = {
    CPUs: [],
    DiscosDuros: [],
    Teclados: [],
    Mouse: [],
    Laptops: [],
    GPUs: [],
    Audifonos: [],
    Motherboards: [],
    PSU: [],
    Cooler: [],
};

let costo_total = 0;


function limpiarLocalStorage() {
    localStorage.removeItem('eleccionUsuario');
    localStorage.removeItem('costo_total');


    eleccionUsuario = {
        CPUs: [],
        DiscosDuros: [],
        Teclados: [],
        Mouse: [],
        Laptops: [],
        GPUs: [],
        Audifonos: [],
        Motherboards: [],
        PSU: [],
        Cooler: [],
    };
};




document.addEventListener('DOMContentLoaded', function () {
function obtenerIds1() {
//Se obtienen los ids a traves de un queryselector buscando los elementos en el html con una etiqueta "boton-lista" se genera una iteración en la variable elementos, luego creamos un condicional que revise si el elemento iterado tiene un id lo envíe al array ids.
    let elementos = document.querySelectorAll('.boton-lista');


    elementos.forEach(function(elemento) {

        if (elemento.id) {

            ids.push(elemento.id);
        }
    });

    return(ids);
    
}


function locura(){
// la función lo que hace es crear un bucle el cual itere sobre el array ids, este for crea una variable llamada i y se va sumando 1 a si misma cada vez que el bucle se ejecuta, esto hace que el bucle se ejecute hasta que la i sea mayor que la cantidad de elementos en ids.

// Lo que se ejecuta dentro del bucle es 2 condicionales, la primera verifica si hay algun boton presionado, la segunda con el switch ejecuta un inner html el cual cada vez que se presiona un boton especifico crea la lista de los objetos que hay en la pagina.
    for (let i = 0; i < ids.length; i++) {
        let botonSeleccionado = document.getElementById(ids[i]);

        if (botonSeleccionado) {
            botonSeleccionado.addEventListener('click', function() {

                switch (this.id) {
                    case ids[0]:
                        let creacionLista = document.getElementById("lista-js");
                        creacionLista.innerHTML = "<h2 class='h2Lista'>CPUs</h2><ul><li><h3>AMD Ryzen 7 7800X3D $1901043 <button class='boton-lista1' id='lista-boton1a'>Añadir</button></h3></li> <li><h3>Intel Core i9-13900KS $3080741<button class='boton-lista1' id='lista-boton1b'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[1]:
                        let creacionLista2 = document.getElementById("lista-js");
                        creacionLista2.innerHTML = "<h2 class='h2Lista'>Discos Duros</h2><ul><li><h3>Samsung 970 EVO $489930 <button class='boton-lista1' id='lista-boton2a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[2]:
                        let creacionLista3 = document.getElementById("lista-js");
                        creacionLista3.innerHTML = "<h2 class='h2Lista'>Teclados</h2><ul><li><h3>Razer BlackWidow V4 $885572 <button class='boton-lista1' id='lista-boton3a'>Añadir</button></h3></li> <li><h3>Corsair K70 CORE $465692 <button class='boton-lista1' id='lista-boton3b'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[3]:
                        let creacionLista4 = document.getElementById("lista-js");
                        creacionLista4.innerHTML = "<h2 class='h2Lista'>Mouse</h2><ul><li><h3>Logitech G305 $139720<button class='boton-lista1' id='lista-boton4a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[4]:
                        let creacionLista5 = document.getElementById("lista-js");
                        creacionLista5.innerHTML = "<h2 class='h2Lista'>Laptops</h2><ul><li><h3>MSI Pulse GL66 $6770086<button class='boton-lista1' id='lista-boton5a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[5]:
                        let creacionLista6 = document.getElementById("lista-js");
                        creacionLista6.innerHTML = "<h2 class='h2Lista'>GPUs</h2><ul><li><h3>4090 TI Founders Edition $6325500<button class='boton-lista1' id='lista-boton6a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[6]:
                        let creacionLista7 = document.getElementById("lista-js");
                        creacionLista7.innerHTML = "<h2 class='h2Lista'>Audifonos</h2><ul><li><h3>HyperX Cloud III $275926<button class='boton-lista1' id='lista-boton7a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[7]:
                        let creacionLista8 = document.getElementById("lista-js");
                        creacionLista8.innerHTML = "<h2 class='h2Lista'>Motherboards</h2><ul><li><h3>Asus ROG MAXIMUS Z690 HERO EVA $2752025<button class='boton-lista1' id='lista-boton8a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[8]:
                        let creacionLista9 = document.getElementById("lista-js");
                        creacionLista9.innerHTML = "<h2 class='h2Lista'>PSUs</h2><ul><li><h3>NZXT PSU C850 $550371<button class='boton-lista1' id='lista-boton9a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[9]:
                        let creacionLista10 = document.getElementById("lista-js");
                        creacionLista10.innerHTML = "<h2 class='h2Lista'>Cooler</h2><ul><li><h3>MSI Pulse GL66 $6770086<button class='boton-lista1' id='lista-boton10a'>Añadir</button></h3></li></ul>";
                        break;
                    case ids[10]:
                        let creacionLista11 = document.getElementById("lista-js");
                        creacionLista11.innerHTML = "<h2 class='h2Lista'>Todos los productos</h2><ul><li><h3>AMD Ryzen 7 7800X3D $1901043 <button class='boton-lista1' id='lista-boton1a'>Añadir</button></h3></li> <li><h3>Intel Core i9-13900KS $3080741<button class='boton-lista1' id='lista-boton1b'>Añadir</button></h3></li><li><h3>Samsung 970 EVO $489930 <button class='boton-lista1' id='lista-boton2a'>Añadir</button></h3></li><li><h3>Razer BlackWidow V4 $885572 <button class='boton-lista1' id='lista-boton3a'>Añadir</button></h3></li> <li><h3>Corsair K70 CORE $465692 <button class='boton-lista1' id='lista-boton3b'>Añadir</button></h3></li><li><h3>Logitech G305 $139720<button class='boton-lista1' id='lista-boton4a'>Añadir</button></h3></li><li><h3>MSI Pulse GL66 $6770086<button class='boton-lista1' id='lista-boton5a'>Añadir</button></h3></li><li><h3>4090 TI Founders Edition $6325500<button class='boton-lista1' id='lista-boton6a'>Añadir</button></h3></li><li><h3>HyperX Cloud III $275926<button class='boton-lista1' id='lista-boton7a'>Añadir</button></h3></li><li><h3>Asus ROG MAXIMUS Z690 HERO EVA $2752025<button class='boton-lista1' id='lista-boton8a'>Añadir</button></h3></li><li><h3>NZXT PSU C850 $550371<button class='boton-lista1' id='lista-boton9a'>Añadir</button></h3></li><li><h3>MSI Pulse GL66 $6770086<button class='boton-lista1' id='lista-boton10a'>Añadir</button></h3></li></ul>";
                        break;
                    default:
                        console.log("No valid button ID.");
                }
                console.log('Button clicked: ' + this.id);
            });
        }
    }
};

function locura1() {
//

    let contendorProductosJS1 = document.getElementById("contendorProductosJS");

    document.getElementById("lista-js").addEventListener('click', function (event) {
        if (event.target.classList.contains('boton-lista1')) {
            let categoria = null;
            let indice = null;

            switch (event.target.id) {
                case 'lista-boton1a':
                    categoria = 'CPUs';
                    indice = 0;
                    break;
                case 'lista-boton1b':
                    categoria = 'CPUs';
                    indice = 1;
                    break;
                case 'lista-boton2a':
                    categoria = 'DiscosDuros';
                    indice = 0;
                    break;
                case 'lista-boton3a':
                    categoria = 'Teclados';
                    indice = 0;
                    break;
                case 'lista-boton3b':
                    categoria = 'Teclados';
                    indice = 1;
                    break;
                case 'lista-boton4a':
                    categoria = 'Mouse';
                    indice = 0;
                    break;
                case 'lista-boton5a':
                    categoria = 'Laptops';
                    indice = 0;
                    break;
                case 'lista-boton6a':
                    categoria = 'GPUs';
                    indice = 0;
                    break;
                case 'lista-boton7a':
                    categoria = 'Audifonos';
                    indice = 0;
                    break;
                case 'lista-boton8a':
                    categoria = 'Motherboards';
                    indice = 0;
                    break;
                case 'lista-boton9a':
                    categoria = 'PSU';
                    indice = 0;
                    break;
                case 'lista-boton10a':
                    categoria = 'Cooler';
                    indice = 0;
                    break;
                default:
                    console.log("No valid button ID.");
            }

            if (categoria !== null && indice !== null) {
                const producto = productos[categoria][indice];
                const carrito = eleccionUsuario[categoria];

                const productoEnCarrito = carrito.find(item => item.nombre === producto.nombre);

                if (productoEnCarrito) {
                    productoEnCarrito.cantidad += 1;
                } else {
                    carrito.push({ ...producto, cantidad: 1 });
                }


                actualizarCarrito();
            }
        }
    });
}

function actualizarCarrito() {
    const contendorProductosJS1 = document.getElementById("contendorProductosJS");
    contendorProductosJS1.innerHTML = "";

    for (const categoria in eleccionUsuario) {
        eleccionUsuario[categoria].forEach(producto => {
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `<td>${producto.nombre}</td><td>x${producto.cantidad}</td><td>$${producto.precio * producto.cantidad}</td>`;
            contendorProductosJS1.appendChild(nuevaFila);
        });
    }
    localStorage.setItem('eleccionUsuario', JSON.stringify(eleccionUsuario));
    localStorage.setItem('costo_total', JSON.stringify(costo_total));
    actualizarCostoTotal();
}

function cargarSeleccionDesdeLocalStorage() {
    let eleccionUsuarioLocalStorage = localStorage.getItem('eleccionUsuario');
    let costo_totalLocalStorage = localStorage.getItem('costo_total');

    if (eleccionUsuarioLocalStorage !== null && costo_totalLocalStorage !== null) {
        eleccionUsuario = JSON.parse(eleccionUsuarioLocalStorage);
        costo_total = JSON.parse(costo_totalLocalStorage);

        // Update the cart and total cost on the page
        actualizarCarrito();
    }
}

cargarSeleccionDesdeLocalStorage();
function actualizarCostoTotal() {
    costo_total = 0;

    for (const categoria in eleccionUsuario) {
        eleccionUsuario[categoria].forEach(producto => {
            costo_total += producto.precio * producto.cantidad;
        });
    }
    document.getElementById("totalTabla").textContent = "$" + costo_total;
}

let verids = obtenerIds1();
locura();
locura1();
limpiar();
console.log("IDs encontrados:", verids);

function limpiarCarrito(){
    for (const categoria in eleccionUsuario) {
        eleccionUsuario[categoria] = [];
    }
    costo_total = 0;
    actualizarCarrito();
    actualizarCostoTotal();
    costo_total = 0;
    eleccionUsuario = {
        CPUs: [],
        DiscosDuros: [],
        Teclados: [],
        Mouse: [],
        Laptops: [],
        GPUs: [],
        Audifonos: [],
        Motherboards: [],
        PSU: [],
        Cooler: [],
    };
}

function limpiar(){
    const botonLimpiar = document.getElementById("boton-limpiar")
    botonLimpiar.addEventListener("click", ()=>{
    limpiarLocalStorage();
    limpiarCarrito();
    });
}



});

