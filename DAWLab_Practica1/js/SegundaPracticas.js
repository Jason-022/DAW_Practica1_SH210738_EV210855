var biblioteca = new Array();

function GuradarLibro(obj) {
    new Libro = new Object();

    libro.ID = document.getElementById('txtID').value;
    libro.titulo = document.getElementById('txttitulo').value;
    libro.nombre = document.getElementById('txtnombre').value;
    libro.apellido = document.getElementById('txtapellido').value;   
    libro.genero = document.getElementById('txtgenero').value;
    libro.pais = document.getElementById('txtpais').value;
    libro.precio = document.getElementById('txtprecio').value;
    libro.imagen = document.getElementById('img').value; 
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