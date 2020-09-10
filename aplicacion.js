$(document).ready(function(){
    $("#boton1").click(function(){
        $(".Titulo").toggle();
    });
    $("#boton2").click(function(){
        $("h1").text("Chile Campeon")
    });
    $(".Cuerpo").mouseenter(function(){
        $(".Cuerpo").css("color","palevioletred")
    })
    $(".Cuerpo").mouseleave(function(){
        $(".Cuerpo").css("color","black")
    })
});
    