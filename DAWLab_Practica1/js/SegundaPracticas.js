
var biblioteca = new Array();

function GuardarLibro() {
    var Libro = new Object();
    let IMG = new FileReader();
    IMG.readAsDataURL(document.getElementById('img').files[0]);
    
    Libro.ID = document.getElementById('txtID').value;
    Libro.titulo = document.getElementById('txttitulo').value;
    Libro.nombre = document.getElementById('txtnombre').value;
    Libro.apellido = document.getElementById('txtapellido').value;   
    Libro.genero = document.getElementById('txtgenero').value;
    Libro.pais = document.getElementById('txtpais').value;
    Libro.precio = document.getElementById('txtprecio').value;
    Libro.imagen = IMG; 
    
    
    biblioteca.push(Libro); 
    
    document.getElementById('formulario').reset();
    MostrarL();
     


}

function MostrarL() {
    
    

        for (var e in biblioteca) {
            
            biblioteca[e].imagen.onload = ()=>{
                document.getElementById('imagen').src = biblioteca[e].imagen.result;
             }
             
            
            document.getElementById('Autor').innerHTML = biblioteca[e].nombre + biblioteca[e].apellido ;
            document.getElementById('Libro').innerHTML = biblioteca[e].ID + biblioteca[e].titulo;
            document.getElementById('Precio').innerHTML = biblioteca[e].precio;
        }
        
    
    console.log(biblioteca);
}