function LlenarMatriz() {

    const x = document.getElementById('filas').value;
    const y = document.getElementById('columnas').value;
    table = "";
    let Mam = [];
    let numeros = [];

    for (let i = 0; i < x; i++) {
        numeros.push([]);
        for (let j = 0; j < y; j++) {
            numeros[i].push(Math.floor(Math.random() * 100));
        }
    }
    numeros.forEach(element => {
        Mam = Mam.concat(element);
    });
    max = Math.max.apply(null, Mam);
    min = Math.min.apply(null, Mam);
    for (let i = 0; i < x; i++) {
        table += "<tr>";
        for (let j = 0; j < y; j++) {
            data = numeros[i][j];
            if (max === numeros[i][j]) {
                table += "<td class='CVer'>" + data + "</td>";
            } else if (min === numeros[i][j]) {
                table += "<td class='CAma'>" + data + "</td>";
            } else {
                table += "<td>" + data + "</td>";
            }
        }

        table += "</tr>";
    }
    document.getElementById('tabla').innerHTML = table;
    document.getElementById('mayor').innerHTML = "El numero mayor es: " + max;
    document.getElementById('menor').innerHTML = "El numero menor es: " + min;

}



