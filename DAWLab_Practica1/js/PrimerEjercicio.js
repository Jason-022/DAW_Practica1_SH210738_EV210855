x = 0, y = 0;


function Llenar_Matriz() {
   
    x = document.getElementById('filas').value;
    y = document.getElementById('columnas').value;
    console.log(x,y);
    var AlNu= new let[x,y]

    

    for(let filas = 0; filas<x; filas++ ){
        for (let columnas = 0; columnas < y; columnas++) {
            AlNu[filas,columnas]= Math.random()
           
        }
    }
    
   


}
function Mostrar() {
    tabla+="<table>";
    for(let filas = 0; filas<x; filas++ ){
        
        for (let columnas = 0; columnas < y; columnas++) {
            document.getElementById('tabla').innerHTML = AlNu[filas,columnas]
           
        }
        
        
    }
    

}