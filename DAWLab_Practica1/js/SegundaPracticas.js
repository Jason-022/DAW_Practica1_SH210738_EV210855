
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
    document.getElementById('formulario').reset();
    MostrarL(Libro);



}

function MostrarL(Libro) {
    let template = "";



    template += `
            <div id="libro" class="col-md-6">
            <div class="d-flex flex-row">
            <img id="imagen${Libro.ID}" width="100px" height="100px"><br>
            <div class="d-flex flex-column mx-2">
            <label>Autor: ${Libro.nombre + " " + Libro.apellido}</label>
            <label>Titulo: ${Libro.titulo}</label>          
            <label> Precio: $ ${Libro.precio}</label>
            </div>
            </div>
        </div>
            `;
    Libro.imagen.onload = () => {
        document.getElementById('imagen'.concat(Libro.ID)).src = Libro.imagen.result;
    }




    document.getElementById('biblioteca').innerHTML += template;


}
