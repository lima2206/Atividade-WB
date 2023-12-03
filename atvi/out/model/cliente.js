"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, sexo) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.sexo = sexo;
        this.dataCadastro = new Date();
        this.rgs = [];
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    // Getters
    Cliente.prototype.getCpf = function () {
        return this.cpf;
    };
    Cliente.prototype.getRgs = function () {
        return this.rgs;
    };
    Cliente.prototype.getDataCadastro = function () {
        return this.dataCadastro;
    };
    Cliente.prototype.getTelefones = function () {
        return this.telefones;
    };
    Cliente.prototype.getProdutosConsumidos = function () {
        return this.produtosConsumidos;
    };
    Cliente.prototype.getServiçosConsumidos = function () {
        return this.servicosConsumidos;
    };
    //Setters
    Cliente.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    Cliente.prototype.setRG = function (lista) {
        this.rgs = lista;
    };
    Cliente.prototype.setTelefone = function (lista) {
        this.telefones = lista;
    };
    Cliente.prototype.setProdutosConsumidos = function (lista) {
        this.produtosConsumidos = lista;
    };
    Cliente.prototype.setServicosConsumidos = function (lista) {
        this.servicosConsumidos = lista;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
