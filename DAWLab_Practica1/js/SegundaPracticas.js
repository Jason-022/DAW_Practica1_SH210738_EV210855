var biblioteca = new Array();

function GuradarLibro(obj) {
    var Libro = new Object();

    Libro.ID = document.getElementById('txtID').value;
    Llibro.titulo = document.getElementById('txttitulo').value;
    Llibro.nombre = document.getElementById('txtnombre').value;
    Llibro.apellido = document.getElementById('txtapellido').value;   
    Llibro.genero = document.getElementById('txtgenero').value;
    Llibro.pais = document.getElementById('txtpais').value;
    Llibro.precio = document.getElementById('txtprecio').value;
    Llibro.imagen = document.getElementById('img').value; 
    biblioteca.push(libro); 
    MostrarL();

    
}

function MostrarL() {
   
        for (var e in biblioteca) {
            document.getElementById('img').innerHTML = biblioteca[e].imagen;
            document.getElementById('Autor').innerHTML = biblioteca[e].nombre + biblioteca[e].apellido ;
            document.getElementById('Libro').innerHTML = biblioteca[e].ID + biblioteca[e].titulo;
            document.getElementById('Precio').innerHTML = biblioteca[e].precio;
        }
        
    
   
}