function readImage (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('#pho').attr('src', e.target.result); // Renderizamos la imagen
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
var biblioteca = new Array();

function GuardarLibro() {
    var libro = new Object();

    libro.id = document.getElementById('txtID').value;
    libro.titulo = document.getElementById('txttitulo').value;
    libro.nombre = document.getElementById('txtnombre').value;
    libro.apellido = document.getElementById('txtapellido').value;   
    libro.genero = document.getElementById('txtgenero').value;
    libro.precio = document.getElementById('txtprecio').value;
    libro.imagen = document.getElementById('img').value;
    biblioteca.push(libro); 
    MostrarL();
     

    
}

function MostrarL() {
    grid="";
    for (var e in biblioteca) {
        grid+="<div class='col'>";
        grid+="<img src='' id='pho' width='60px' height='60px'>";
        grid+="<p>Nombre del autor: "+biblioteca[e].nombre +" "+ biblioteca[e].apellido+"</p>";
        grid+="<p>Titulo: "+biblioteca[e].titulo+"</p>";
        grid+="<p>Precio: "+biblioteca[e].precio+"</p>";
        grid+="</div>";
    }
       
    document.getElementById('datos').innerHTML = grid;
    
    console.log(biblioteca);
}