
// Clase Padre "Dato" para el manejo de datos 



class Dato {
    constructor(descripción, valor) {
        this._descripcion = descripción; //los atributos con _ son privados y la forma de acceder es con Get
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

