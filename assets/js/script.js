$(document).ready(function(){

    let num1= 0;
    let num2 = 0;
    let resultado = 0;



    $("#resultado").css("color","red");
    $("#resultado").css("font-size","1.2rem");
    $("#resultado").hide();

    //un selector de etiqueta
    $("h1").click(function(){
        $(this).text("¡somos el mejor pais de chile hermano!")
    });

    $("#btnSumar").click(function(){
       // e.preventDevault();
        //console.log("me estoy llamando bien")
    
        //$("#error1").css("color,red");
       //if(num1 == ""){
        //console.log("hola");
       //}       
        
       $("#error1").text("");
       $("#error2").text("");
       $("#resultado").text("");

       if($("#numero1").val()==="") {

       
            $("#error1").text("debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        if($("#numero2").val()==="") {

       
           $("#error2").text("debe agregar el primer numero");
           $("#error2").css("color","red");
           return;
        }

        
        num1 = parseInt($("#numero1").val())
        num2 = parseInt($("#numero2").val())
        resultado =  num1 + num2;
        
        
        $("#resultado").show();
        $("#resultado").text(resultado);
    });

    $("#btnLimpiar").click(function(){
        $
     });


    


    

});

let resultado = document.getElementById("resultado");
            resultado.style.displaty = "none";
            resultado.style.displaty = "block";


// let btnSumar = document.getElementById("btnSumar");

// let idchile = document.getElementById("idchile");
// idchile.addEventListener("click", function(){
//    idchile.innerHTML = "No tengo porque estar de acuerdo con lo quye pienso";
// })