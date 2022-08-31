


function saludar (){
    alert ( "Bienvenido " + nombre + " haz click en Aceptar para continuar ");
        
        
           
}
function comprarPasta(){
    pasta = prompt ("Elija una de nuestras variedades: \n 1: Sorrentinos \n 2: Spaghetti \n 3: Lasagna");
    adicional = prompt ("Desea agregar bebida? \n 1: Si \n 2: No");
    

    if (pasta === "1" && adicional === "2"){
        alert ("Elegiste sorrentinos: precio total 1500$");

    } else if ( pasta === "1" && adicional === "1" ){
        alert ("Elegiste sorrentinos con bebida: precio Total 1800$");

    } else if ( pasta === "2" && adicional === "2" ){
        alert ("Elegiste spaghetti: precio Total 1400$");

    } else if ( pasta === "2" && adicional === "1" ){
        alert ("Elegiste spaghetti con bebida: precio Total 1700$");

    } else if ( pasta === "3" && adicional === "1" ){
        alert ("Elegiste lasagna con bebida: precio Total 1900$");

    } else if ( pasta === "3" && adicional === "2" ){
        alert ("Elegiste lasagna: precio total 1600$");
    } 

    
    opcion = prompt ("Vuelva a elegir una opcion \n 2: Crear pedido \n 3 : Terminar");

    }

    function finalizarcompra (){
        if (pasta === "1"){
            alert (" Usted eligio Sorrentinos \n MUCHAS GRACIAS POR LA COMPRA!");   
        }
        
        else if (pasta === "2"){
            alert (" Usted eligio Spaghetti \n MUCHAS GRACIAS POR LA COMPRA!");
        }


        

        else if (pasta ==="3"){
            alert = (" Usted eligio Lasagna \n MUCHAS GRACIAS POR LA COMPRA!");
        }
    }


       




    let nombre = prompt ("Ingrese su Nombre");
    

    let pasta
    let sorrentinos 
    let spaghetti 
    let lasagna 
  

    saludar ();
    let opcion = prompt (" Ingrese una opcion \n 1: Elegir pastas (3 variedades unicas) \n 2: Finalizar compra \n 3: Terminar  ");

    while (opcion !== "3" ){
        if (opcion === "1") {
            comprarPasta ();

        }
        if (opcion === "2"){
            finalizarcompra ();
            opcion === "3"
            opcion === "1"
        }
    }
    

   
