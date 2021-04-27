$(document).ready(function () {
    $('#adjuntar').click(function() {
        $('#agregarTexto').data('himno', {
            estribillo: "Colo-Colo, Colo-Colo, el equipo que ha sabido ser campeón Y en las lides deportivas pone siempre su chileno corazón Colo-Colo, Colo-Colo, representa nuestra raza sin igual Por su empuje y coraje en las canchas como Colo-Colo no hay"
        });
        $("h6").text($("#agregarTexto").data("himno").estribillo);
    });
    $('#obtenerData').click(function() {
        $("#dataAgregada").text("Se agregó el estribillo del himno: " +
            $("#agregarTexto").data("himno").estribillo)
    });
    $('#limpiar').click(function() {
        $("h6").text("");
        $("#dataAgregada").text("");;
    });

    // addclass

    $("#adjuntarclase").click(function(){
        $("#segundotexto").addClass("text-danger");
      });
      $('#limpiaraddclass').click(function() {
        $("#segundotexto").removeClass('text-danger')
    });

    //Toggle

    $('#insignia').on('click',function(){
        $('#respuesta').toggle();
     });

     //Append

     $("#boton").click(function(){
        $("#parrafo").append("<h1>Colo-Colo es lo mas grande de Chile.");
    }); 

    //Val

    $('#textoVal').click(function(e) {
        e.preventDefault();
        const valor = $('input:text').val();
       
        $('#Val').text('Usted ingresó este texto: ' + valor);
    });

    // Fade in

    $('#fadeIn').click(function() {
        $('#imagenfade').fadeIn("slow");
    });

    $('#fadeOut').click(function() {
        $('#imagenfade').fadeOut("slow");
    });

    //Focus

    $("input").focus(function(){
        $("span").css("display", "inline").fadeOut(2000);
      });

      //hide y show text

    $('#escondetexto').click(function() {
        $('#parrafodetexto').hide();
    });

    $('#muestratexto').click(function() {
        $('#parrafodetexto').show();
    });

    // Slide
    $('#subir').click(function() {
        $('#slidetexto').slideUp("slow");
    });

    $('#bajar').click(function() {
        $('#slidetexto').slideDown("slow");
    });
});