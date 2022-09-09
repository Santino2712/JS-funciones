/*function saludar (){
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
  let opcion = prompt (" Ingrese una opcion \n 1: Elegir pastas (3 variedades unicas) \n 2: Finalizar compra \n 3: Para ver la pagina y mas informacion  ");

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
  
  




*/

/*const productos = [
  { id: 1, producto: "Sorrentinos", precio: 1500 },
  { id: 2, producto: "Ravioles", precio: 1500 },
  { id: 3, producto: "ñoquis", precio: 1500 },
  { id: 4, producto: "Spaghetti", precio: 1400 },
  { id: 5, producto: "Lasagna", precio: 1600 },
];

for (const producto of productos) {
  console.log(producto.id);
  console.log(producto.producto);
  console.log("$" + producto.precio);
  
}
*/

/*function saludar() {
  alert("Bienvenido " + nombre + " haz click en Aceptar para continuar ");
}
function comprarPasta() {
  pasta = prompt(
    "Elija una de nuestras variedades: \n 1: Sorrentinos \n 2: Spaghetti \n 3: Lasagna"
  );
  adicional = prompt("Desea agregar bebida? \n 1: Si \n 2: No");
}

if (pasta === "1" && adicional === "2") {
  alert("Elegiste sorrentinos: precio total 1500$");
} else if (pasta === "1" && adicional === "1") {
  alert("Elegiste sorrentinos con bebida: precio Total 1800$");
} else if (pasta === "2" && adicional === "2") {
  alert("Elegiste spaghetti: precio Total 1400$");
} else if (pasta === "2" && adicional === "1") {
  alert("Elegiste spaghetti con bebida: precio Total 1700$");
} else if (pasta === "3" && adicional === "1") {
  alert("Elegiste lasagna con bebida: precio Total 1900$");
} else if (pasta === "3" && adicional === "2") {
  alert("Elegiste lasagna: precio total 1600$");
}
opcion = prompt(
  "Vuelva a elegir una opcion \n 2: Crear pedido \n 3 : Terminar"
);

function finalizarcompra() {
  if (pasta === "1") {
    alert(" Usted eligio Sorrentinos \n MUCHAS GRACIAS POR LA COMPRA!");
  } else if (pasta === "2") {
    alert(" Usted eligio Spaghetti \n MUCHAS GRACIAS POR LA COMPRA!");
  } else if (pasta === "3") {
    alert = " Usted eligio Lasagna \n MUCHAS GRACIAS POR LA COMPRA!";
  }
}

let nombre = prompt("Ingrese su Nombre");

let pasta;
let sorrentinos;
let spaghetti;
let lasagna;

saludar();
let opcion = prompt(
  " Ingrese una opcion \n 1: Elegir pastas (3 variedades unicas) \n 2: Finalizar compra \n 3: Terminar  "
);

while (opcion !== "3") {
  if (opcion === "1") {
    comprarPasta();
  }
  if (opcion === "2") {
    finalizarcompra();
    opcion === "3";
    opcion === "1";
  }
}
*/

/*const productos = [
  { nombre: "ssorrentinos", precio: 1500 },
  { nombre: "spaghetti", precio: 1400 },
  { nombre: "lasagna", precio: 1600 },
];

let carrito = [];

let seleccion = prompt("Desea comprar pastas? si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingrese una opcion");
  seleccion = prompt("Desea comprar pastas? si o no");
}
if (seleccion == "si") {
  alert("A continuacion nuestras pastas");
  let TodosLosProductos = productos.map(
    (producto) => producto.nombre + "" + producto.precio + "$"
  );
  alert(TodosLosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Los esperamos pronto");
}
while (seleccion != "no") {
  let producto = prompt("agrega un producto al carrito");
  let precio = 0;
}
if (
  producto == "sorrentinos" ||
  producto == "spaghetti" ||
  producto == "lasagna"
) {
  switch (producto) {
    case "sorrentinos":
      precio = 1500;
      break;
    case "spaghetti":
      precio = 1400;
      break;
    case "lasagna":
      precio = 1600;
      break;
    default:
      break;
  }

  let unidades = parseInt(prompt("cuantas unidades quiere"));

  carrito.push({ producto, unidades, precio });
  console.log(carrito);
} else {
  alert("no tenemos ese producto");
}

seleccion = prompt("desea seguir comprando?");

while (seleccion === "no") {
  alert("gracias por la compra, hasta pronto");
  carrito.forEach((carritoFinal) => {
    console.log(
      `producto: ${carritoFinal.producto}, unidades : ${carrito.unidades},
      total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`
    );
  });
  break;
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log("el total a pagar por su compra es: ${total}");
*/

class Producto {
  constructor(nombre, precio, aderezo) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

function saludar() {
  alert(
    "Bienvenido " +
      nombre.toUpperCase() +
      " Gracias por elegirnos, a continuación te presentamos nuestras pastas"
  );
}

function mostrarPrecios() {
  const show = [];
  productos.map((productos) => {
    const item = `\n${productos.nombre} ${productos.precio}`;
    show.push(item);
  });
  alert("PRECIOS: en PESOS" + show);
}

function despedir() {
  alert(
    "Muchas gracias por elegirnos " +
      nombre.toUpperCase() +
      ", que disfrutes !!!"
  );
}

const productos = [
  { nombre: "sorrentinos de Jamon y Queso", precio: 2000 },
  { nombre: "Spaghetti con salsa bolognesa", precio: 1500 },
  { nombre: "Ñoquis de papa con bolognesa", precio: 1800 },
  { nombre: "Lasagna especial de la casa", precio: 2500 },
];

let nombre = prompt("Bienvenido a La Ponderosa, ingrese su nombre");

if (nombre !== "") {
  let carrito = [];
  let producto;
  let adicion;
  let metodoPago;

  saludar();
  let opcion = prompt(
    "Ingrese una opción \n 1: Comprar  \n 2: Finalizar Compra  \n 8: Precios \n 0: Terminar"
  );

  function cargarPedido(carrito) {
    let nombre = prompt("Ingrese el Nombre de la PASTA");
    let precio = Number(prompt("Ingrese Precio"));

    const newProduct = new Producto(nombre, precio);
    carrito.push(newProduct);
    console.log(carrito);
  }

  function mostrarProductos() {
    carrito.forEach((producto) => {
      console.log(
        `Usted eligió ${producto.nombre} por un precio de ${producto.precio}`
      );
    });
  }

  function comprarProducto() {
    producto = prompt(
      "Elija una de nuestras pastas: \n 1: sorrentinos \n 2: Spaghetti \n 3: Lasagna"
    );
    adicion = prompt("¿Desea agregar Bebidas a su Pedido? \n 1: Si \n 2: No");
    if (producto === "1" && adicion === "1") {
      alert(
        `Elegiste sorrentinos con bebida para la compra, monto total: ${
          productos[0].precio + productos[3].precio
        } pesos`
      );
    } else if (producto === "1" && adicion === "2") {
      alert(
        `Elegiste sorrentino para tu compra, monto total: ${productos[0].precio} pesos`
      );
    } else if (producto === "2" && adicion === "1") {
      alert(
        "Elegiste spaghetti con bebida para tu compra, monto total: " +
          (productos[1].precio + productos[3].precio) +
          " pesos"
      );
    } else if (producto === "2" && adicion === "2") {
      alert(
        "Elegiste spaghetti para tu compra, monto total: " +
          productos[1].precio +
          " pesos"
      );
    } else if (producto === "3" && adicion === "1") {
      alert(
        "Elegiste lasagna con bebida para tu compra, monto total: " +
          (productos[2].precio + productos[3].precio) +
          " pesos"
      );
    } else if (producto === "3" && adicion === "2") {
      alert(
        "Elegiste lasagna para tu compra, monto total: " +
          productos[2].precio +
          " pesos"
      );
    } else if (producto > "3") {
      alert("ERROR");
    }
    opcion = prompt(
      "Vuelve a ingresar una opción \n 2: Finalizar Compra \n 9: Terminar"
    );
  }

  function finalizarCompra() {
    let resultado = carrito.reduce((accum, producto) => {
      return accum + producto.precio;
    }, 0);

    console.log(`Total del Carrito: ${resultado} Pesos`);
  }

  while (opcion !== "0") {
    if (opcion === "1") {
      comprarProducto();
    }
    if (opcion === "2") {
      metodoPago = prompt(
        "¿Con que método desea pagar? \n 1: Tarjeta \n 2: Efectivo 15% Off"
      );
      switch (metodoPago) {
        case "1":
          alert("Paga con Tarjeta");
          break;
        case "2":
          alert("Paga en Efectivo");
          break;
        default:
          console.log("No ha ingresado metodo de pago");
          break;
      }
      alert("Su pedido esta siendo preparado y será enviado a la brevedad!!!");
      opcion = "0";
    }
    if (opcion === "3") {
      cargarPedido(carrito);
      mostrarProductos(carrito);

      opcion = "9";
    }
    if (opcion === "4") {
      finalizarCompra(carrito);
      opcion = "9";
    }
    if (opcion === "9") {
      opcion = prompt(
        "Ingrese una opción \n 1: Comprar  \n 2: Finalizar   \n 8: Precios \n 0: Terminar"
      );
    }
    if (opcion === "8") {
      mostrarPrecios();

      opcion = "9";
    }
  }

  despedir();
} else {
  alert("Debe ingresar por lo menos un nombre");
}
