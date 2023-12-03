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
var ListagemA1 = /** @class */ (function (_super) {
    __extends(ListagemA1, _super);
    function ListagemA1(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.input = new input_1.default();
        return _this;
    }
    ListagemA1.prototype.compProdutosCons = function (a, b) {
        return b.getProdutosConsumidos().length - a.getProdutosConsumidos().length;
    };
    ListagemA1.prototype.compServicosCons = function (a, b) {
        return b.getServiçosConsumidos().length - a.getServiçosConsumidos().length;
    };
    ListagemA1.prototype.listar = function () {
        console.log('-----------------------------');
        console.log("1 - Produtos");
        console.log("2 - Servi\u00E7os");
        console.log('=============================');
        var escolha = this.input.receberNumero('Digite sua Escolha: ');
        console.log('-----------------------------');
        switch (escolha) {
            case 1:
                //Sort em produtos consumidos e deixa os 10 primeiros
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
                //Acabei de perceber que não preciso fazer um loop, posso só chamar a função denovo :P
                console.log("\nOpera\u00E7\u00E3o Inv\u00E1lida!\n");
                this.listar();
                break;
        }
    };
    return ListagemA1;
}(listagemA_1.ListagemA));
exports.default = ListagemA1;
