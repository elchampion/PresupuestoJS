

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
    constructor(descripción, valor) {
        super(descripción, valor);
        this._id
    }
    get getId() {
        return this._id;
    }

    //no se agrega el método set por que este valor no deberá ser modificado

}