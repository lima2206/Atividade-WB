"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefone = /** @class */ (function () {
    function Telefone(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    Telefone.prototype.getDdd = function () {
        return this.ddd;
    };
    Telefone.prototype.getNumero = function () {
        return this.numero;
    };
    Telefone.prototype.setDdd = function (ddd) {
        this.ddd = ddd;
    };
    Telefone.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    return Telefone;
}());
exports.default = Telefone;
