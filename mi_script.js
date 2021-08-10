document.addEventListener('DOMContentLoaded', function () {

    //Números de enlaces en la página
    let resultado = "";
    let numEnlaces = document.getElementsByTagName('a');
    resultado += "En el documento hay: " + numEnlaces.length + " enlaces <br>";
    alert ("En el documento hay: " + numEnlaces.length + " enlaces");

    //Dirección del penúltimo enlace 
    resultado += "El penúltimo enlace apunta a " + numEnlaces[numEnlaces.length-2].href + "<br>";
    alert("El penúltimo enlace apunta a " + numEnlaces[numEnlaces.length-2].href);

    //Número de enlaces que apuntan a http://prueba 
    let contador = 0
    for(enlace of numEnlaces){
        if(enlace.href === "http://prueba" || enlace.href === "http://prueba/"){
            contador++;
        }
    }
    resultado += contador + " enlaces que apuntan a prueba. <br>";
    alert("Hay " + contador + " enlaces que apuntan a prueba.");

    //Número de enlaces del tercer párrafo
    let párrafos = document.getElementsByTagName("p");
    numEnlaces = párrafos[2].getElementsByTagName("a");
    resultado += "En el párrafo 3 hay " + numEnlaces.length + " enlaces <br>";
    alert("En el tercer párrafo hay " + numEnlaces.length + " enlaces")

    let div = document.createElement("div");
    div.id = "información";
    div.innerHTML = resultado;
    document.body.appendChild(div);



}
)
