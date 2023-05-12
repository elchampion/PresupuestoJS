
// Clase Padre "Dato" para el manejo de datos 



class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion; //los atributos con _ son privados y la forma de acceder es con Get
        this._valor = valor;
    }
    get getDescripcion() {
        return this._descripcion;
    }

    set setDescripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get getValor() {
        return this._valor;
    }

    set setValor(valor) {
        this._valor = valor;
    }

}


