   //funcion para que se mueva el logo se deselice con un retardo y que los iconos giren y cambien de color


$(document).ready(function(){
	  $(".logo").delay(8000).addClass('animated bounceInDown');
	  $('.social').delay(20000).addClass('animated fadeInLeftBig');
	  $('.tecno').delay(20000).addClass('animated fadeInRightBig');
    $('.icono').hover(function(){
        $(this).css("color", "#e34b12").addClass('animated flip');
        }, function(){
        $(this).css("color", "white").removeClass('animated flip');
    });
    
});
	
// $('#fotoEquipo1, #fotoEquipo2, #fotoEquipo3, #fotoEquipo4').hover()(function{
//     $(this).addClass('animated wobble');
        
//     });

$(document).ready(function(){
    $("#fotoEquipo1").hover(function(){
        $(this).addClass("animated wobble");
        },function(){
        $(this).removeClass('animated wobble')
    });
    $("#fotoEquipo2").hover(function(){
        $(this).addClass("animated wobble");
        },function(){
        $(this).removeClass('animated wobble');
    });
    $("#fotoEquipo3").hover(function(){
        $(this).addClass("animated wobble");
        },function(){
        $(this).removeClass('animated wobble');
    });
    $("#fotoEquipo4").hover(function(){
        $(this).addClass("animated wobble");
        },function(){
        $(this).removeClass('animated wobble');
    });
});   
      


