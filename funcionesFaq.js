// // $(function(){
// // $('tituloCuestionarioFaq').hover(function(){
// // 	$('.cuestionariofaq').css({"width":"60%", "height":"60%"});




$(function(){
	$('#validarDatos').click(function(){
	var patronUsuario=/^[a-z\d_]{4,15}$/i;
    var usuario= $('#usuarioFaq').val();
    
		if(patronUsuario.test(usuario)==true){
			console.log('usuario correcto');
		}else{
			alert('usuario incorrecto');
		}

	var patronEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var mail= $('#emailFaq').val();

		if(patronEmail.test(mail)==true){
			console.log('mail correcto');
		}else{
			alert('mail incorrecto');
				}
	var textareaFaq=$('#textareaFaq').val();
	datosCorrectosFaq=false
    if(textareaFaq==''){
      alert('En qué podemos ayudarte, escríbelo');
      datosCorrectosFaq=false;
    }else{
      alert('En breve te solucionaremos las dudas');
      return false;
    }
	});
});


   