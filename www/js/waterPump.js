
//manual
var manual = document.getElementById('checkManual');
console.log('checkManual' + manual.checked);
manual.checked = true;


//automatico
var estado = "OFF";

if (estado == "ON") {
  manual.disabled = true;
  document.querySelector(".manual").style.opacity = 0.5;
} else {

}

var automatico = document.getElementById('checkAutomatico');
console.log('checkAutomatico' + automatico.checked);



//Encender/apagar bomba Manualmente
manual.addEventListener('click', function () {
  if (manual.checked) {
    console.log('El elemento no está marcado');
   
   $.ajax({
      url: " https://f8ea-2806-10a6-15-7eab-b987-943d-2e97-d7b8.ngrok-free.app/apagar_bomba",
      type: "POST",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.error(error); 
      }
    });
    setTimeout(function() {
      manual.disabled = false;
      document.querySelector(".manual").style.opacity = 1;
    }, 3000);
    // Deshabilita el checkbox temporalmente
    manual.disabled = true;
    document.querySelector(".manual").style.opacity = 0.5;

  } else {
    console.log('El elemento está marcado');
    $.ajax({
      url: " https://f8ea-2806-10a6-15-7eab-b987-943d-2e97-d7b8.ngrok-free.app/encender_bomba",
      type: "POST",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.error(error);
      }
    });
    setTimeout(function() {
      manual.disabled = false;
      document.querySelector(".manual").style.opacity = 1;
    }, 3000);
    // Deshabilita el checkbox temporalmente
    manual.disabled = true;
    document.querySelector(".manual").style.opacity = 0.5;
  }
});
