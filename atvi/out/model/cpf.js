"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CPF = /** @class */ (function () {
    //método construtor
    function CPF(valor, dataEmissão) {
        this.valor = valor;
        this.dataEmissão = dataEmissão;
    }
    //getters
    CPF.prototype.getValor = function () {
        return this.valor;
    };
    CPF.prototype.getDataEmissao = function () {
        return this.dataEmissão;
    };
    return CPF;
}());
exports.default = CPF;
