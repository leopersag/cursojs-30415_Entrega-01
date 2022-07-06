let respuesta= prompt ("Un hombre sin techo recoge colillas de cigarrillos de la calle. Puede hacer un cigarro con cinco colillas. Hoy está de suerte, ha encontrado 25 colillas. ¿Cuántos cigarrillos podrá hacer?");
let intentos = 0;
let adivinorespuesta = true;
while(respuesta != 6){
    intentos++;
    switch(intentos){
        case 2:
        alert("Respuesta incorrecta, última oportunidad! Aquí tiene una pista: la clave está en la reutilización");
        respuesta= prompt ("Un hombre sin techo recoge colillas de cigarrillos de la calle. Puede hacer un cigarro con cinco colillas. Hoy está de suerte, ha encontrado 25 colillas. ¿Cuántos cigarrillos podrá hacer?");
        break;

        case 3:
        alert("Oh! Se ha equivocado nuevamente. La respuesta es: 6. Aquí la explicación: hace 5 cigarrillos con las 25 colillas. Después los fuma y tiene 5 colillas más para hacer otro cigarro.");
        respuesta=6;
        adivinorespuesta = false;
        break;

        default:
        alert("respuesta incorrecta, intente nuevamente");
        respuesta= prompt ("Un hombre sin techo recoge colillas de cigarrillos de la calle. Puede hacer un cigarro con cinco colillas. Hoy está de suerte, ha encontrado 25 colillas. ¿Cuántos cigarrillos podrá hacer?");
        break;
    }
}

if(adivinorespuesta){
    alert("La respuesta es correcta. Felicitaciones!");
}else{
    alert("Hasta el próximo desafío!")
}

