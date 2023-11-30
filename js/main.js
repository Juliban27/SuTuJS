/*
const R7_7800X = 1901043;
const NZXT_Kraken = 571540;
const Samsung_970 = 489930; 
const MSI_Pulse = 6770086; 
const RTX_4090FE = 6325500; 
const HyperX_Cloud3 = 275926; 
const BlackWidow_V4 = 885572;
const Logitech_G305  = 139720;
const ROG_MAXIMUS_Z690 = 2752025; 
const Corsair_K70 = 465692; 
const PSU_C850 = 550371; */

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

const eleccionUsuario = {
    CPUs: [],
    DiscosDuros: [],
    Teclados: [],
    Mouse: [],
    GPUs: [],
    Audifonos: [],
    Motherboards: [],
    PSU: [],
    Cooler: [],
};

















let costo_total= 0;

function calculadora_costos(){

alert("¡Bienvenido a la calculadora de costos de SuTu!")
let continuar;

do{
    
    let eleccion = prompt("Selecciona el numero de la categoría del producto que deseas comprar: 1.CPUs, 2.Discos Duros, 3.Teclados, 4.Mouse, 5.Laptops, 6.GPUs, 7.Audifonos, 8.Motherboards, 9.PSUs, 10.Coolers, 11.Ver Todo ");


    if ((eleccion == "1") || (eleccion == "2") || (eleccion == "3") || (eleccion == "4") || (eleccion == "5") || (eleccion == "6") || (eleccion == "7") || (eleccion == "8") || (eleccion == "9") || (eleccion == "10") || (eleccion == "11")){

    switch(eleccion){
        case "1":
            let cpu_eleccion = prompt("Actualmente existen 2 CPUs en la tienda elige el numero de la quieras agregar: 1.AMD Ryzen 7 7800X3D, 2.Intel Core i9-13900KS, 3.Agregar Ambos")
            switch (cpu_eleccion) {
                case "1":
                    eleccionUsuario.CPUs.push(productos.CPUs[0]);
                    break;
                case "2":
                    eleccionUsuario.CPUs.push(productos.CPUs[1]);
                    break;
                case "3":
                    eleccionUsuario.CPUs.push(productos.CPUs[0], productos.CPUs[1],);
                    break;
                default:
                    alert("Opción no válida para CPUs");
            }
            break;

        case "2":
            let HDD_eleccion = prompt("Actualmente existe 1 Disco duro en la tienda elige el numero de el quieras agregar: 1.Samsung 970 EVO")
            switch (HDD_eleccion) {
                case "1":
                    eleccionUsuario.DiscosDuros.push(productos.DiscosDuros[0]);
                    break;
                default:
                    alert("Opción no válida para Discos Duros");
            }
            break;

        case "3":
            let teclado_eleccion = prompt("Actualmente existen 2 teclados en la tienda elige el numero de el quieras agregar: 1.Razer BlackWidow V4, 2.Corsair K70 CORE, 3.Agregar Ambos")
            switch (teclado_eleccion) {
                case "1":
                    eleccionUsuario.Teclados.push(productos.Teclados[0]);
                    break;
                case "2":
                    eleccionUsuario.Teclados.push(productos.Teclados[1]);
                    break;
                case "3":
                    eleccionUsuario.Teclados.push(productos.Teclados[0], productos.Teclados[1]);
                    break;
                default:
                    alert("Opción no válida para Teclados");
            }
            break;

        case "4":
            let mouse_eleccion = prompt("Actualmente existe 1 Mouse en la tienda elige el numero de el quieras agregar: 1.Logitech G 305 LIGHTSPEED")
            switch (mouse_eleccion) {
                case "1":
                    eleccionUsuario.Mouse.push(productos.Mouse[0]);
                    break;
                default:
                    alert("Opción no válida para Mouse");
            }
            break;

        case "5":
            let laptops_eleccion = prompt("Actualmente existe 1 Laptop en la tienda elige el numero de la quieras agregar: 1.MSI Pulse GL66 15.6")
            switch (laptops_eleccion) {
                case "1":
                    eleccionUsuario.Laptops.push(productos.Laptops[0]);
                    break;
                default:
                    alert("Opción no válida para Laptops");
            }
            break;

        case "6":
            let gpu_eleccion = prompt("Actualmente existe 1 GPU en la tienda elige el numero de la quieras agregar: 1.GeForce RTX 4090 Founders Edition")
            switch (gpu_eleccion) {
                case "1":
                    eleccionUsuario.GPUs.push(productos.GPUs[0]);
                    break;
                default:
                    alert("Opción no válida para GPUs");
            }
            break;

        case "7":
            let audifonos_eleccion = prompt("Actualmente existe 1 Audifono en la tienda elige el numero de el quieras agregar: 1.HyperX Cloud III")
            switch (audifonos_eleccion) {
                case "1":
                    eleccionUsuario.Audifonos.push(productos.Audifonos[0]);
                    break;
                default:
                    alert("Opción no válida para Audifonos");
            }
            break;

        case "8":
                let motherboard_eleccion = prompt("Actualmente existe 1 motherboard en la tienda elige el numero de la quieras agregar: 1.Asus ROG MAXIMUS Z690 HERO EVA")
                switch (motherboard_eleccion) {
                    case "1":
                        eleccionUsuario.Motherboards.push(productos.Motherboards[0]);
                        break;
                    default:
                        alert("Opción no válida para Motherboards");
                }
                break;

        case "9":
                let PSU_eleccion = prompt("Actualmente existe 1 PSU en la tienda elige el numero de la quieras agregar: 1.NZXT PSU C850")
                switch (PSU_eleccion) {
                    case "1":
                        eleccionUsuario.PSU.push(productos.PSU[0]);
                        break;
                    default:
                        alert("Opción no válida para PSUs");
                }
                break;
                    
        case "10":
                let cooler_eleccion = prompt("Actualmente existe 1 cooler en la tienda elige el numero de el quieras agregar: 1.NZXT Kraken 240")
                switch (cooler_eleccion) {
                    case "1":
                        eleccionUsuario.Cooler.push(productos.Cooler[0]);
                        break;
                    default:
                        alert("Opción no válida para Coolers");
                }
                break;

        case "11":
                let general_eleccion = prompt("1.AMD Ryzen 7 7800X3D, 2.Intel Core i9-13900KS, 3.Samsung 970 EVO, 4.Razer BlackWidow V4, 5.Corsair K70 CORE, 6.Logitech G 305 LIGHTSPEED, 7.MSI Pulse GL66 15.6, 8.GeForce RTX 4090 Founders Edition, 9.HyperX Cloud III, 10.Asus ROG MAXIMUS Z690 HERO EVA, 11.NZXT PSU C850, 12.NZXT Kraken 240, 13.Agregar Todo")
                switch (general_eleccion) {
                    case "1":
                    eleccionUsuario.CPUs.push(productos.CPUs[0]);
                    break;
                case "2":
                    eleccionUsuario.CPUs.push(productos.CPUs[1]);
                    break;
                case "3":
                    eleccionUsuario.DiscosDuros.push(productos.DiscosDuros[0]);
                    break;
                case "4":
                    eleccionUsuario.Teclados.push(productos.Teclados[0]);
                    break;
                case "5":
                    eleccionUsuario.Teclados.push(productos.Teclados[1]);
                    break;
                case "6":
                    eleccionUsuario.Mouse.push(productos.Mouse[0]);
                    break;
                case "7":
                    eleccionUsuario.Laptops.push(productos.Laptops[0]);
                    break;
                case "8":
                    eleccionUsuario.GPUs.push(productos.GPUs[0]);
                    break;
                case "9":
                    eleccionUsuario.Audifonos.push(productos.Audifonos[0]);
                    break;
                case "10":
                    eleccionUsuario.Motherboards.push(productos.Motherboards[0]);
                    break;
                case "11":
                    eleccionUsuario.PSU.push(productos.PSU[0]);
                    break;                
                case "12":
                    eleccionUsuario.Cooler.push(productos.Cooler[0]);
                    break;
                case "13":
                    eleccionUsuario.CPUs.push(productos.CPUs[0], productos.CPUs[1],);
                    eleccionUsuario.DiscosDuros.push(productos.DiscosDuros[0]);
                    eleccionUsuario.Teclados.push(productos.Teclados[0], productos.Teclados[1]);
                    eleccionUsuario.Mouse.push(productos.Mouse[0]);
                    eleccionUsuario.Laptops.push(productos.Laptops[0]);
                    eleccionUsuario.GPUs.push(productos.GPUs[0]);
                    eleccionUsuario.Audifonos.push(productos.Audifonos[0]);
                    eleccionUsuario.Motherboards.push(productos.Motherboards[0]);
                    eleccionUsuario.PSU.push(productos.PSU[0]);
                    eleccionUsuario.Cooler.push(productos.Cooler[0]);
                    break;
                    default:
                        alert("Opción no válida");
                }
                break;

    }



    if (eleccionUsuario.CPUs && eleccionUsuario.CPUs.length > 0) {
        costo_total += eleccionUsuario.CPUs.reduce((total, cpu) => total + cpu.precio, 0);
    }
    if (eleccionUsuario.DiscosDuros && eleccionUsuario.DiscosDuros.length > 0) {
        costo_total += eleccionUsuario.DiscosDuros.reduce((total, discoDuro) => total + discoDuro.precio, 0);
    }
    if (eleccionUsuario.Teclados && eleccionUsuario.Teclados.length > 0) {
        costo_total += eleccionUsuario.Teclados.reduce((total, teclado) => total + teclado.precio, 0);
    }
    if (eleccionUsuario.Mouse && eleccionUsuario.Mouse.length > 0) {
        costo_total += eleccionUsuario.Mouse.reduce((total, mouse) => total + mouse.precio, 0);
    }
    if (eleccionUsuario.Laptops && eleccionUsuario.Laptops.length > 0) {
        costo_total += eleccionUsuario.Laptops.reduce((total, laptops) => total + laptops.precio, 0);
    }
    if (eleccionUsuario.GPUs && eleccionUsuario.GPUs.length > 0) {
        costo_total += eleccionUsuario.GPUs.reduce((total, gpu) => total + gpu.precio, 0);
    }
    if (eleccionUsuario.Audifonos && eleccionUsuario.Audifonos.length > 0) {
        costo_total += eleccionUsuario.Audifonos.reduce((total, audifonos) => total + audifonos.precio, 0);
    }
    if (eleccionUsuario.Motherboards && eleccionUsuario.Motherboards.length > 0) {
        costo_total += eleccionUsuario.Motherboards.reduce((total, motherboards) => total + motherboards.precio, 0);
    }
    if (eleccionUsuario.PSU && eleccionUsuario.PSU.length > 0) {
        costo_total += eleccionUsuario.PSU.reduce((total, psu) => total + psu.precio, 0);
    }
    if (eleccionUsuario.Cooler && eleccionUsuario.Cooler.length > 0) {
        costo_total += eleccionUsuario.Cooler.reduce((total, cooler) => total + cooler.precio, 0);
    }



    alert("El acumulado es: COP " + costo_total)

    }else{
        alert("Selecciona un numero presente en la lista")
    }
    continuar = prompt("¿Quieres realizar otra operación? (si/no)").toLowerCase();
} 

while (continuar === 'si');
if (costo_total > 0) {
    alert("El costo total es: COP " + costo_total);
    alert("Gracias por usar la calculadora de costos de SuTu. ¡Hasta luego!");
} else {
    alert("Gracias por usar la calculadora de costos de SuTu. ¡Hasta luego!");
}


}

calculadora_costos();