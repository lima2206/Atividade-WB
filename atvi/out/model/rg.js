"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RG = /** @class */ (function () {
    function RG(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }
    RG.prototype.getValor = function () {
        return this.valor;
    };
    RG.prototype.getDataEmissao = function () {
        return this.dataEmissao;
    };
    RG.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    RG.prototype.setDataEmissao = function (dataEmissao) {
        this.dataEmissao = dataEmissao;
    };
    return RG;
}());
exports.default = RG;
