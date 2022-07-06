
class elemento{
    constructor (fechaIn, sku, linea, turno, imei, fallaLinea,){
        this.fechaIn = fechaIn;
        this.sku = sku;
        this.linea = linea;
        this.turno = turno;
        this.imei = imei;
        this.fallaLinea = fallaLinea;
        this.disponible = true;
    }
}

const arrPlacas = [];
const arrPantallas = [];

let comprobacion = prompt("Ingrese 'Placa' para agregar una placa, 'Pantalla' para agregar una pantalla o 'fin' para finalizar").toLowerCase();

// Ciclo para validar que el ingreso del usuario corresponda a alguna de las opciones dadas para la primer entrada

while (comprobacion != "fin" && comprobacion != "placa" && comprobacion != "pantalla"){
    alert("Valor incorrecto, por favor ingrese un valor válido")
    comprobacion = prompt("Ingrese 'Placa' para agregar una placa, 'Pantalla' para agregar una pantalla o 'fin' para finalizar").toLowerCase();
}


// Ciclo para el ingreso de elementos o finalizar

while (comprobacion != "fin"){

    if (comprobacion === "placa"){

        const fechaIn = new Date();
        const sku = prompt("Ingrese el modelo (placa)");
        const linea = prompt("Ingrese la linea (placa)");
        const turno = prompt("Ingrese el turno (placa)");
        const imei = prompt("Ingrese el imei (placa)");
        const fallaLinea = prompt("Ingrese la falla (placa)");

        arrPlacas.push(new elemento(fechaIn, sku, linea, turno, imei, fallaLinea,));
    }

    if (comprobacion === "pantalla"){

        const fechaIn = new Date();
        const sku = prompt("Ingrese el modelo (pantalla)");
        const linea = prompt("Ingrese la linea (pantalla)");
        const turno = prompt("Ingrese el turno (pantalla)");
        const sn = prompt("Ingrese el número de serie (pantalla)");
        const fallaLinea = prompt("Ingrese la falla (pantalla)");

        arrPantallas.push(new elemento(fechaIn, sku, linea, turno, sn, fallaLinea,));
    }

    comprobacion = prompt("Ingrese 'Placa' para agregar una placa, 'Pantalla' para agregar una pantalla o 'fin' para finalizar").toLowerCase();
 
    // Ciclo para validar que el ingreso del usuario corresponda a alguna de las opciones dadas

    while (comprobacion != "fin" && comprobacion != "placa" && comprobacion != "pantalla"){
        alert("Valor incorrecto, por favor ingrese un valor válido")
        comprobacion = prompt("Ingrese 'Placa' para agregar una placa, 'Pantalla' para agregar una pantalla o 'fin' para finalizar").toLowerCase();
    }

}

console.table(arrPlacas);
console.table(arrPantallas);

for (var Placas of arrPlacas){
    document.write("<h6> La placa " + Placas.imei + " del modelo " + Placas.sku + " de la línea " + Placas.linea + " del turno " + Placas.turno + " se ingresó con fecha: " + Placas.fechaIn + "<h6>");
}

for (var Pantallas of arrPantallas){
    document.write("<h6> La pantalla " + Pantallas.sn + " del modelo " + Pantallas.sku + " de la línea " + Pantallas.linea + " del turno " + Pantallas.turno + " se ingresó con fecha: " + Pantallas.fechaIn + "<h6>");
}