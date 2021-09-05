var biblioteca = new Array();

function guradar_libro(obj) {
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
    
    
}