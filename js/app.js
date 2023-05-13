

/*

let egresos = { Renta: 900, Ropa: 400 }; //objeto
        let ingresos = { Quincena: 9000, Venta: 400 }; //objeto

        let lista = ["manzana","fresa","papaya"] //arreglo

*/

//quiero tener un arreglo de ingresos

// arrelo= [ (Salario,2000) , (Venta aurto,404040) ]

const ingreso1 = new Ingreso("Salario", 20000);
const ingreso2 = new Ingreso("Venta auto", 60000);
const egreso1 = new Egreso("Renta", 4000);
const egreso2 = new Egreso("Ropa", 800);



//arreglos cuyos elementos son objetos
const ingresos = [ingreso1, ingreso2]; //un arreglo de ingresos (objetos)
const egresos = [egreso1, egreso2]; //un arreglo de egresos 

/*
//hardcodeado
        let egresos = { Renta: 900, Ropa: 400 }; //objeto
        let ingresos = { Quincena: 9000, Venta: 400 }; //objeto
        console.log( de la renta de egresos)
        console.log(egresos.renta)
 */


const totalIngresos = () => {
    let totalIngresos = 0;
    //Itera el objeto ingresos en un ciclo for of. Recuerda que es necesario declarar la variable ingreso para poder iterar
    for (let ingreso of ingresos) {
        // ingreso = objeto , Ingreso {Descripción:"Salario", Valor :2000, Id:1}; Valor es privado, no puedo decir ingreso.valor 
        // tengo que decir ingreso.getValor();
        totalIngresos += ingreso.getValor;
        //console.log("la propiedad " + ingreso + " contiene " + ingresos[ingreso]);
    }
    return totalIngresos;
}


const totalEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        //egreso = objeto , Egreso { Descripción: "Renta", Valor: 4000, Id: 1}
        totalEgresos += egreso.getValor;
    }
    return totalEgresos;
}

//var presupuesto = totalIngresos() - totalEgresos(); // poner los paréntesis es ejecutar la función, si no, es como poner una declaración de la fn
//var porcentajeEgreso = totalEgresos() / totalIngresos();


const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos(); // poner los paréntesis es ejecutar la función, si no, es como poner una declaración de la fn
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
    console.log("el presupuesto es disponible es " + formatoMoneda(presupuesto));
    console.log("el porcentaje del egreso es " + formatoPorcentaje(porcentajeEgreso));

    let elementoPresupuesto = document.getElementById("presupuesto");
    let elementoPorcentaje = document.getElementById("porcentaje");
    let elementoIngresos = document.getElementById("ingresos");
    let elementoEgresos = document.getElementById("egresos");


    elementoPresupuesto.innerHTML = formatoMoneda(presupuesto);
    elementoPorcentaje.innerHTML = formatoPorcentaje(porcentajeEgreso);
    elementoIngresos.innerHTML = formatoMoneda(totalIngresos());
    elementoEgresos.innerHTML = formatoMoneda(totalEgresos());

}

// una función que recibe "un número" / "numeros" , les aplica un formato de Moneda y los regresa

const formatoMoneda = (numero) => {
    //validaciones 
    return numero.toLocaleString('en-US', { style: "currency", currency: "MXN", minimumIntegerDigits: 2 });  //toLocal es un metodo
}

//https://www.techonthenet.com/js/number_tolocalestring.php#:~:text=In%20JavaScript%2C%20toLocaleString()%20is,its%20value%20as%20a%20string.

const formatoPorcentaje = (numero) => {
    //validaciones
    return numero.toLocaleString('en-US', { style: "percent", minimumFractionDigits: 2 }); //método o función de un objeto

}

// una función como propiedad de un objeto, es un método o función de un objeto
//una función por si sola, es solo una función



function cargarApp() {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


const cargarIngresos = () => {
    let ingresosHTML = "";//declaración de variable vacia 
    for (let ingreso of ingresos) {
        //ingresosHTML.push(crearIngresoHTML(ingreso));
        ingresosHTML = ingresosHTML + crearIngresoHTML(ingreso);
    }
    //console.log(ingresosHTML);
    //enviar ingresos HTML a la lista igresos
    let listaIngresos = document.getElementsByClassName("lista-ingresos"); //encuentralo y traemelo aqui por que le quiero setear su contenido
    listaIngresos[0].innerHTML = ingresosHTML;
    //console.log(listaIngresos);
}




const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
<div class="elemento limpiarEstilos">

<div class="elemento_descripcion">${ingreso.getDescripcion}</div>

<div class="derecha limpiarEstilos">
    <div class="elemento_valor">${formatoMoneda(ingreso.getValor)}</div>
    <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
            <!-- nombre incorrecto en la sintaxis del PDF, nombre correcto en el CSS-->
            <ion-icon name="close-circle-outline" onclick=eliminarIngreso(${ingreso.getId});></ion-icon>
        </button>
    </div>
</div>
</div>
`;

    return ingresoHTML;
}

//function eliminarIngreso(id) {
//   console.log("ELIMINAR INGRESO")
//}


const cargarEgresos = () => {
    let egresosHTML = ""; //declaración de la variable vacia
    for (let egreso of egresos) {
        egresosHTML = egresosHTML + crearEgresoHTML(egreso);
    }

    let listaEgresos = document.getElementsByClassName("lista-egresos"); //encuentralo y traemelo aqui por que le quiero setear su contenido
    listaEgresos[0].innerHTML = egresosHTML;
}


const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">

    <div class="elemento_descripcion">${egreso.getDescripcion}</div>

    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.getValor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <!-- nombre incorrecto en la sintaxis del PDF, nombre correcto en el CSS-->
                <ion-icon name="close-circle-outline" onclick=eliminarEgreso(${egreso.getId});></ion-icon>
            </button>
        </div>

    </div>
</div>
    `;

    return egresoHTML;
}


const eliminarEgreso = (id) => {
    const isId = (element) => element.getId === id;  // **********************
    let indiceEliminar = egresos.findIndex(isId);
    //return indiceEliminar;
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

const eliminarIngreso = (id) => {
    const isId = (element) => element.getId === id;  // **********************
    let indiceEliminar = ingresos.findIndex(isId);
    //return indiceEliminar;
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}


const agregarDato = () => {
    let forma = document.getElementById("forma");
    //console.log(forma);
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = parseInt(document.getElementById("valor").value);
    if (valor != "" && descripcion != "" && valor >= 0) 
    {
        if (tipo == "ingreso") {
            ingresos.push(new Ingreso(descripcion, valor));

        } else {
            egresos.push(new Egreso(descripcion, valor));

        } 
        cargarCabecero();
        cargarEgresos();
        cargarIngresos();
    } else{
        console.warn("Favor de ingresar un tipo de dato número positivo mayor a cero");
    }


}





