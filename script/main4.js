
class elemento{
    constructor (fechaIn, sku, linea, turno, imei, fallaLinea, fechaOut, estado,){
        this.fechaIn = fechaIn;
        this.sku = sku;
        this.linea = linea;
        this.turno = turno;
        this.imei = imei;
        this.fallaLinea = fallaLinea;
        this.fechaOut = fechaOut;
        this.estado = estado;
        this.disponible = true;
    }

    salida(){
        this.fechaOut = new Date();
        this.estado = prompt(`Ingrese el estado final para el elemento ${this.imei}: \nOK\nSCP\nRMA`).toUpperCase();
        while (this.estado != "OK" && this.estado != "SCP" && this.estado != "RMA"){
            alert("Valor incorrecto, por favor ingrese un valor válido");
            this.estado = prompt(`Ingrese el estado final para el elemento ${this.imei}: \nOK\nSCP\nRMA`).toUpperCase();
        }
        this.disponible = false;
    }
}

class stock{
    constructor (modelo, cantidad){
        this.modelo = modelo;
        this.cantidad = cantidad;
    }
}

const arrPlacas = [];
const arrPantallas = [];

//Ciclo principal
    let queHacer = parseInt(prompt("Ingrese: \n1: para agregar elementos  \n2: para dar salida a un elemento \n3: para ver los reportes \n4: para terminar"));

    // Ciclo para validar que el ingreso del usuario corresponda a alguna de las opciones dadas
    while (queHacer != 1 && queHacer != 2 && queHacer != 3 && queHacer != 4){
        alert("Valor incorrecto, por favor ingrese un valor válido");
        queHacer = parseInt(prompt("Ingrese: \n1: para agregar elementos  \n2: para dar salida a un elemento \n3: para ver los reportes \n4: para terminar"));
    }

    // Ciclo que realiza tareas 1., 2. y 3. hasta que se ingrese 4 (Terminar)
    while (queHacer != 4){

        // 1. Agregar elemento        
        if(queHacer == 1){

            let comprobacion = prompt("Ingrese: \n'Placa' para agregar una placa \n'Pantalla' para agregar una pantalla  \n'fin' para finalizar").toLowerCase();

            // Ciclo para validar que el ingreso del usuario corresponda a alguna de las opciones dadas
            while (comprobacion != "fin" && comprobacion != "placa" && comprobacion != "pantalla"){
                alert("Valor incorrecto, por favor ingrese un valor válido");
                comprobacion = prompt("Ingrese: \n'Placa' para agregar una placa \n'Pantalla' para agregar una pantalla  \n'fin' para finalizar").toLowerCase();
            }

            // Ciclo para el ingreso de elementos o finalizar
            while (comprobacion != "fin"){

                const fechaIn = new Date();
                
                let sku = prompt(`Ingrese el modelo (${comprobacion})`);
                // Verificación de ingreso distinto de vacio
                while(sku ==""){
                    sku = prompt (`Ingrese el modelo (${comprobacion})`);
                }
                //Verificación de "cancelar" el proceso
                if(sku == null){
                    alert ("No se guardó el registro");
                    break;
                }              
                
                let linea = prompt(`Ingrese la linea (${comprobacion})`);
                // Verificación de ingreso distinto de vacio
                while(linea ==""){
                    linea = prompt (`Ingrese el linea (${comprobacion})`);
                }
                //Verificación de "cancelar" el proceso
                if(linea == null){
                    alert ("No se guardó el registro");
                    break;
                }

                let turno = prompt(`Ingrese el turno (${comprobacion})`);
                // Verificación de ingreso distinto de vacio
                while(turno ==""){
                    turno = prompt (`Ingrese el turno (${comprobacion})`);
                }
                //Verificación de "cancelar" el proceso
                if(turno == null){
                    alert ("No se guardó el registro");
                    break;
                }

                let imei = prompt(`Ingrese el imei/sn (${comprobacion})`);
                // Verificación de ingreso distinto de vacio
                while(imei ==""){
                    imei = prompt (`Ingrese el imei/sn (${comprobacion})`);
                }
                //Verificación de "cancelar" el proceso
                if(imei == null){
                    alert ("No se guardó el registro");
                    break;
                }
                
                let fallaLinea = prompt(`Ingrese la falla (${comprobacion})`);
                // Verificación de ingreso distinto de vacio
                while(fallaLinea ==""){
                    fallaLinea = prompt (`Ingrese la falla (${comprobacion})`);
                }
                //Verificación de "cancelar" el proceso
                if(fallaLinea == null){
                    alert ("No se guardó el registro");
                    break;
                }
                
                if (comprobacion === "placa"){
                    arrPlacas.push(new elemento(fechaIn, sku, linea, turno, imei, fallaLinea,));
                }

                if (comprobacion === "pantalla"){
                    arrPantallas.push(new elemento(fechaIn, sku, linea, turno, imei, fallaLinea,));
                }

                comprobacion = prompt("Ingrese: \n'Placa' para agregar una placa \n'Pantalla' para agregar una pantalla  \n'fin' para finalizar").toLowerCase();
            
                // Ciclo para validar que el ingreso del usuario corresponda a alguna de las opciones dadas
                while (comprobacion != "fin" && comprobacion != "placa" && comprobacion != "pantalla"){
                    alert("Valor incorrecto, por favor ingrese un valor válido");
                    comprobacion = prompt("Ingrese: \n'Placa' para agregar una placa \n'Pantalla' para agregar una pantalla  \n'fin' para finalizar").toLowerCase();
                }
            }
        }

        // 2. Dar salida a un elemento        
        if(queHacer == 2){

            let darSalida = prompt("Ingrese:\nEl imei de la placa o el SN de la pantalla \n'Salir' para volver al menu anterior").toLowerCase();
            
            while (darSalida != "salir"){

                let existePlaca = arrPlacas.some(elemento => elemento.imei === darSalida);
                let existePantalla = arrPantallas.some(elemento => elemento.imei === darSalida);
   
                while (!(existePlaca || existePantalla || darSalida == "salir")){;
                    alert("Valor no encontrado, por favor ingrese otro valor");
                    darSalida = prompt("Ingrese:\nEl imei de la placa o el SN de la pantalla \n'Salir' para volver al menu anterior").toLowerCase();
                }

                if (darSalida === "salir"){
                    break;
                }

                //Si es una placa --> dar salida al elemento
                if (existePlaca){
                    for (const placa of arrPlacas){
                        if (placa.imei === darSalida){
                            placa.salida();
                        }
                    }
                }

                //Si es una pantalla --> dar salida al elemento
                if (existePantalla){
                    for (const pantalla of arrPantallas){
                        if (pantalla.imei === darSalida){
                            pantalla.salida();
                        }
                    }
                }
                
                darSalida = prompt("Ingrese:\nEl imei de la placa  \nEl SN de la pantalla \n'Salir' para volver al menu anterior").toLowerCase();
            }
        }
            
        // 3. Ver reportes        
        if(queHacer == 3){

            const arrStockPlacas = [];
            const arrStockPantallas = [];

            // Tabla de todos los movimientos de los elementos
            console.table(arrPlacas);
            console.table(arrPantallas);

            // Tabla solo con elementos disponibles
            console.table(arrPlacas.filter(e => e.disponible == true));
            console.table(arrPantallas.filter(e => e.disponible == true));

            // Generación de un array con los modelos (sku) que tienen elementos disponibles
            let uniquePlacas = [...new Set(arrPlacas.filter(e => e.disponible == true).map(e => e.sku))];
            let uniquePantallas = [...new Set(arrPantallas.filter(e => e.disponible == true).map(e => e.sku))];

            // Generación de objeto (modelo con elementos disponibles, cantidad de elementos disponibles del modelo)
            for (const mod of uniquePlacas){
                arrStockPlacas.push(new stock(mod, arrPlacas.filter(e => e.sku == mod).filter(e => e.disponible == true).length));
            }

            for (const mod of uniquePantallas){
                arrStockPantallas.push(new stock(mod, arrPantallas.filter(e => e.sku == mod).filter(e => e.disponible == true).length));
            }

            // Tabla de stocks actual
            console.table(arrStockPlacas);
            console.table(arrStockPantallas);
        }

        queHacer = parseInt(prompt("Ingrese: \n1: para agregar elementos  \n2: para dar salida a un elemento \n3: para ver los reportes \n4: para terminar"));
            
        // Ciclo para validar que el ingreso del usuario corresponda a alguna de las opciones dadas
        while (queHacer != 1 && queHacer != 2 && queHacer != 3 && queHacer != 4){
            alert("Valor incorrecto, por favor ingrese un valor válido");
            queHacer = parseInt(prompt("Ingrese: \n1: para agregar elementos  \n2: para dar salida a un elemento \n3: para ver los reportes \n4: para terminar"));
        }

    }

    // 4. Terminar
    document.write("<h5>Los datos fueron guardados en la base de datos<h5>");
   
