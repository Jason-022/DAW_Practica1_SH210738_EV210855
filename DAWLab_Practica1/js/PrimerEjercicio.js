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
                    tabla[i, j] = Math.floor(Math.random() * (max - min + 1)) + min;;
                }
            }

            for (i = 0; i < x; i++){
            
                table += "<tr>";
                
                
                for ( j = 0; j < y; j++)
                {
                    table += "<td>"+tabla[i,j]+"</td>";
                    
                }
                table += "</tr>";
            }
            document.getElementById('tabla').innerHTML=table;

}
    
   

