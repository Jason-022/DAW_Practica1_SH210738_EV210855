function Llenar_Matriz() {
   
    x = document.getElementById('filas').value;
    y = document.getElementById('columnas').value;
     max= 1;
     min = 500;
    table="";


            for (i = 0; i < x; i++)
            {
                for ( j = 0; j < y; j++)
                {
                    tabla[i, j] = Math.floor(Math.random() * (max - min + 1)) + min;
                }
            }

            for (i = 0; i < x; i++){
            
                table += "<tr>";
                for ( j = 0; j < y; j++)
                {
                   data = tabla[i,j];
                    table += "<td>"+data+"</td>";
                    
                    
                }
            
                table += "</tr>";
            }
            max = Math.max(data);
            min = Math.min(data);
            document.getElementById('tabla').innerHTML=table;
            document.getElementById('mayor').innerHTML="El numero mayor es: "+max;
            document.getElementById('menor').innerHTML="El numero menor es: "+min;

}
    
   

