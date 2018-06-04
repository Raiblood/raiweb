

// función para contador carro de compra

 // $(document).ready(function(){ 
 //    var i = 0;
 //     $('#incrementa').click(function(){
       
 //        if (i < 20 ) { /*Cambiar el >= 0 por < 10 si quieres limitar el incremento*/
 //            i++;
 //        } else if (i = i++) {
 //            i = 0;
 //        }
 //        document.getElementById("display").innerHTML = i;
 //        })
 //        // })
 //        $('button').click(function(){
 //          alert('Nuevo articulo en tu cesta')
 //        })


 //    });

 // asi tambie 

 // variable global
 var contar = 0
 // arranco función
$(document).ready(function(){
 // selector id #display pinte la variable
    $('#display').html(contar)
     // cuando pulse en boton class btn una callback añade  1 mas por click
    $('.btn').click(() => {
     contar++
     alert('Nuevo articulo en tu cesta')

     // y lo pinta en el span id #display
    $('#display').html(contar)
   });

});
   // fin ready    