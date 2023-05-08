

/*

class Dato {
    constructor(descripción, valor) {
        this._descripcion = descripción;
        this._valor = valor;
    }
    get getDescripción() {
        return this._descripción;
    }
    set setDescripción(descripción) {
        this._descripción = descripción;
    }
    get getValor() {
        return this._valor;
    }
    set setValor(valor) {
        this._valor = valor;
    }
}

*/


class Ingreso extends Dato {
    //Define la variable estática contadorIngresos e igualala a cero
   static contadorIngresos = 0; //Igual que el método estatico puedes llamarla sin que instancies una clase / puedes llamar por fuera sin que hagas un objeto de esta clase
    constructor(descripción, valor) {
        super(descripción, valor); //se invoca al constructor de la clase padre
        Ingreso.contadorIngresos = Ingreso.contadorIngresos + 1;
        this._id = Ingreso.contadorIngresos;
    }
    get getId() {
        return this._id;
    }

    //no se agrega el método set por que este valor no deberá ser modificado

}



/*
const ingreso = new Ingreso("Venta ropa",500);
Ingreso {descripción:"Venta ropa", valor:300, id:1}
const ingreso2 = new Ingreso("Sueldo",2000);
Ingreso(descripción:"Sueldo", valor:2000, id:2);
*/