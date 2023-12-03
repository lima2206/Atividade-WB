"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../../input/input"));
var listagemA_1 = require("../abstract/listagemA");
var ListagemA5 = /** @class */ (function (_super) {
    __extends(ListagemA5, _super);
    function ListagemA5(clientes) {
        var _this = _super.call(this) || this;
        _this.input = new input_1.default();
        _this.clientes = clientes;
        return _this;
    }
    ListagemA5.prototype.compProdutosCons = function (a, b) {
        return a.getProdutosConsumidos().length - b.getProdutosConsumidos().length;
    };
    ListagemA5.prototype.compServicosCons = function (a, b) {
        return a.getServiçosConsumidos().length - b.getServiçosConsumidos().length;
    };
    ListagemA5.prototype.listar = function () {
        console.log('-----------------------------');
        console.log("1 - Produtos");
        console.log("2 - Servi\u00E7os");
        console.log('=============================');
        var escolha = this.input.receberNumero('Digite sua Escolha: ');
        console.log('-----------------------------');
        switch (escolha) {
            case 1:
                this.clientes.sort(this.compProdutosCons);
                this.clientes.slice(0, 10).forEach(function (cliente, index) {
                    console.log("".concat(index + 1, "\u00B0"));
                    console.log("Nome: ".concat(cliente.nome));
                    console.log("CPF: ".concat(cliente.getCpf().getValor()));
                    console.log("Produtos Consumidos: ".concat(cliente.getProdutosConsumidos().length));
                    console.log('-----------------------------');
                });
                break;
            case 2:
                this.clientes.sort(this.compServicosCons);
                this.clientes.slice(0, 10).forEach(function (cliente, index) {
                    console.log("".concat(index + 1, "\u00B0"));
                    console.log("Nome: ".concat(cliente.nome));
                    console.log("CPF: ".concat(cliente.getCpf().getValor()));
                    console.log("Servi\u00E7os Consumidos: ".concat(cliente.getServiçosConsumidos().length));
                    console.log('-----------------------------');
                });
                break;
            default:
                console.log("\nOpera\u00E7\u00E3o Inv\u00E1lida!\n");
                this.listar();
                break;
        }
    };
    return ListagemA5;
}(listagemA_1.ListagemA));
exports.default = ListagemA5;
