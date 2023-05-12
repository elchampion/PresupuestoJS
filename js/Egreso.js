
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

class Egreso extends Dato {
    // Define una vairable estática contarEgresos inicializada en 0.
    static contarEgresos = 0;
    constructor(descripción, valor) {
        super(descripción, valor);
        Egreso.contarEgresos = Egreso.contarEgresos + 1;
        this._id = Egreso.contarEgresos; // this.id=contarEgresos++; ¿funcionaria?

    }
    get getId() {
        return this._id;
    }

}

