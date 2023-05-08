

/*

let egresos = { Renta: 900, Ropa: 400 }; //objeto
        let ingresos = { Quincena: 9000, Venta: 400 }; //objeto

        let lista = ["manzana","fresa","papaya"] //arreglo

*/

//quiero tener un arreglo de ingresos

// arrelo= [ (Salario,2000) , (Venta aurto,404040) ]

const ingreso1 = new Ingreso("Salario", 20000);
const ingreso2 = new Ingreso("Venta auto", 50000);
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
    var presupuesto = totalIngresos() - totalEgresos(); // poner los paréntesis es ejecutar la función, si no, es como poner una declaración de la fn
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
    console.log("el presupuesto es disponible es " + formatoMoneda(presupuesto));
    console.log("el porcentaje del egreso es " + formatoPorcentaje(porcentajeEgreso));
    //
    //
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
