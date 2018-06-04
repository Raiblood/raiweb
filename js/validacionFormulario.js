
  $(function(){
    $('#validar-registro').click(function(){

    var nombre=$('#nombre-registro').val();
    var apellido=$('#apellido-registro').val();
    var usuario=$('#usuario-registro').val();
    var datosCorrectos=true;

    if(nombre==''){
      alert('El nombre es obligatorio');
      datosCorrectos=false;
    }else{
      console.log('nombre correcto');
    }

    if(apellido==''){
      alert('El apellido es obligatorio');
      datosCorrectos=false;
    }else{
      console.log('apellido correcto');
    }

    if(usuario==''){
        alert('Usuario incorrecto');
          datosCorrectos=false;
       }else{
        console.log('usurio correcto');
    }

    var patronEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email= $('#mail-registro').val();

    if(email=='' || !patronEmail.test(email)){
        alert('Mail incorrecto');
        datosCorrectos=false;
      }else{
        console.log('Mail correcto');
    }

    var password1=$('#pass-registro1').val();
    var patronPassword=/^([A-Za-z0-9]{4,16})$/;
    var password2=$('#pass-registro2').val();

    if(password1=='' || !patronPassword.test(password1)){
        alert('Password incorrecto');
        datosCorrectos=false;
      }else{
        console.log('Password correcto');
    }

    if(password2==password1){
      console.log('password correcto');
    }else{
      alert('Password diferente');
      return false;
    }

  });
}); 


$(function(){
   $('#validarSesion').click(function(){
        var usuarioSesion=$('#usuario-sesion').val();
        var contrasenia=$('#contrasenia-sesion').val();
        datosCorrectos=true;
    if(usuarioSesion==""){
      alert('El Usuario es un campo obligatorio');
      datosCorrectos=false;
    }else{
      alert('Bienvenid@ '+ usuario)
    }

    if(contrasenia==""){
    alert('Contraseña es un campo obligatorio');
    datosCorrectos=false;
    }else{
      console.log('Bienvenid@ '+ usuario);
    return false;
    }
  });

}); 
