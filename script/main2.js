let puertos = parseInt(prompt("Ingrese la cantidad de puertos de la estación"));
while (isNaN(puertos)){
    puertos = parseInt(prompt("Valor incorrecto!! Por favor ingrese la cantidad de puertos de la estación"));
}

let testeos = "testeos";
let fallas = "fallas";

for (let qtyPuertos = 1; qtyPuertos <= puertos; qtyPuertos++) {
    window [testeos +(qtyPuertos).toString()] = parseInt(prompt(`Ingrese cantidad Total de testeos del puerto #${qtyPuertos}`));
    
    while (isNaN(window [testeos +(qtyPuertos).toString()])){
        window [testeos +(qtyPuertos).toString()] = parseInt(prompt(`Valor incorrecto!! Por favor ingrese la cantidad total de testeos del puerto #${qtyPuertos}`));
    }
   
    window [fallas +(qtyPuertos).toString()] = parseInt(prompt(`ingrese cantidad de fallas del puerto #${qtyPuertos}`));
   
    while (isNaN(window [fallas +(qtyPuertos).toString()]) || window [testeos +(qtyPuertos).toString()] < window [fallas +(qtyPuertos).toString()]){;
       if(isNaN(window [fallas +(qtyPuertos).toString()])){
        window [fallas +(qtyPuertos).toString()] = parseInt(prompt(`Valor incorrecto! Por favor ingrese la cantidad de fallas del puerto #${qtyPuertos}`));   
       }else {window [fallas +(qtyPuertos).toString()] = parseInt(prompt(`El valor de fallas no puede ser mayor al valor de testeos total, por favor ingrese la cantidad de fallas del puerto #${qtyPuertos} teniendo en cuenta que el valor total de testeos de dicho puerto es ${window [testeos +(qtyPuertos).toString()]}`));
        }
    } 
}

function sumatoria(variable,cantidad){
    let suma = 0;
    for(let qtyPuertos = 1; qtyPuertos<=cantidad; qtyPuertos++){
        suma = suma + window [variable +(qtyPuertos).toString()];
    }
    return suma;
}

const eficiencia = (a,b)=>(a-b)/a*100;
const ineficiencia = (a)=>100-a;

let resultado = eficiencia (sumatoria(testeos,puertos),sumatoria(fallas,puertos)).toFixed(2);
let resultadoError = ineficiencia(resultado).toFixed(2);

alert(`Testeos: ${sumatoria(testeos,puertos)}
Fallas: ${sumatoria(fallas,puertos)}
Eficiencia: ${resultado}%
Ineficiencia: ${resultadoError}%`);
