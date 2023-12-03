"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    //getters
    Empresa.prototype.getClientes = function () {
        return this.clientes;
    };
    Empresa.prototype.getProdutos = function () {
        return this.produtos;
    };
    Empresa.prototype.getServicos = function () {
        return this.servicos;
    };
    return Empresa;
}());
exports.Empresa = Empresa;
