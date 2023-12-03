"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("../model/cliente");
var cpf_1 = __importDefault(require("../model/cpf"));
var produto_1 = __importDefault(require("../model/produto"));
var rg_1 = __importDefault(require("../model/rg"));
var servico_1 = __importDefault(require("../model/servico"));
var PreencherBanco = /** @class */ (function () {
    function PreencherBanco(empresa) {
        this.empresa = empresa;
    }
    PreencherBanco.prototype.preencher = function () {
        var prod1 = new produto_1.default('Batom', 5);
        var prod2 = new produto_1.default('Maquiagem', 13);
        var prod3 = new produto_1.default('Lixas de Unha', 6);
        var prod4 = new produto_1.default('Esmalte', 7);
        this.empresa.getProdutos().push(prod1, prod2, prod3, prod4);
        var serv1 = new servico_1.default('Maquiagem', 18);
        var serv2 = new servico_1.default('Massagem', 50);
        var serv3 = new servico_1.default('Alisamento de Cabelo', 80);
        var serv4 = new servico_1.default('Tratamento de Calvíce', 150);
        this.empresa.getServicos().push(serv1, serv2, serv3, serv4);
        var data = new Date();
        var listaRG = [];
        listaRG.push(new rg_1.default('123', data));
        var cpf = new cpf_1.default('123456', data);
        var cl1 = new cliente_1.Cliente('Vitor', 'Lima', cpf, 0);
        cl1.setRG(listaRG);
        var cl2 = new cliente_1.Cliente('Isaque', 'Elis', cpf, 0);
        cl2.setRG(listaRG);
        var cl3 = new cliente_1.Cliente('Maria', 'Barbosa', cpf, 0);
        cl3.setRG(listaRG);
        var cl4 = new cliente_1.Cliente('Luana', 'Almeida', cpf, 0);
        cl4.setRG(listaRG);
        this.empresa.getClientes().push(cl1, cl2, cl3, cl4);
    };
    return PreencherBanco;
}());
exports.default = PreencherBanco;
