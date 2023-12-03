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
var ListagemA4 = /** @class */ (function (_super) {
    __extends(ListagemA4, _super);
    function ListagemA4(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.todosProdutos = [];
        _this.todosServicos = [];
        return _this;
    }
    ListagemA4.prototype.agruparProdutos = function (lista) {
        var grupos = {};
        lista.forEach(function (produto) {
            var chave = "".concat(produto.nome, "_").concat(produto.valor);
            if (!grupos[chave]) {
                grupos[chave] = { produto: produto, quantidade: 1 };
            }
            else {
                grupos[chave].quantidade++;
            }
        });
        var resultadoOrdenado = Object.values(grupos).sort(function (a, b) { return b.quantidade - a.quantidade; });
        return resultadoOrdenado;
    };
    ListagemA4.prototype.agruparServicos = function (lista) {
        var grupos = {};
        lista.forEach(function (servico) {
            var chave = "".concat(servico.nome, "_").concat(servico.valor);
            if (!grupos[chave]) {
                grupos[chave] = { servico: servico, quantidade: 1 };
            }
            else {
                grupos[chave].quantidade++;
            }
        });
        var resultadoOrdenado = Object.values(grupos).sort(function (a, b) { return b.quantidade - a.quantidade; });
        return resultadoOrdenado;
    };
    ListagemA4.prototype.listar = function () {
        var _this = this;
        console.log('-----------------------------');
        console.log("1 - Produtos");
        console.log("2 - Servi\u00E7os");
        console.log('=============================');
        var escolha = new input_1.default().receberNumero('Digite sua Escolha: ');
        console.log('-----------------------------');
        console.log("1 - Homem");
        console.log("2 - Mulher");
        console.log('=============================');
        var escolhaSexo = new input_1.default().receberNumero('Digite sua Escolha: ');
        console.log('-----------------------------');
        switch (escolha) {
            case 1:
                this.clientes.forEach(function (cliente) {
                    if (cliente.sexo == escolhaSexo - 1) {
                        cliente.getProdutosConsumidos().forEach(function (produto) {
                            _this.todosProdutos.push(produto);
                        });
                    }
                });
                var todosProdutosAgrupados = (this.agruparProdutos(this.todosProdutos));
                todosProdutosAgrupados.forEach(function (produto, index) {
                    console.log("".concat(index + 1, "\u00B0"));
                    console.log("Produto: ".concat(produto.produto.nome));
                    console.log("Valor: R$".concat(produto.produto.valor));
                    console.log("Quantidade Vendido: ".concat(produto.quantidade));
                    console.log('-----------------------------');
                });
                break;
            case 2:
                this.clientes.forEach(function (cliente) {
                    if (cliente.sexo == escolhaSexo - 1) {
                        cliente.getServiçosConsumidos().forEach(function (servico) {
                            _this.todosServicos.push(servico);
                        });
                    }
                });
                var todosServicosAgrupados = (this.agruparServicos(this.todosServicos));
                todosServicosAgrupados.forEach(function (servico, index) {
                    console.log("".concat(index + 1, "\u00B0"));
                    console.log("Servi\u00E7o: ".concat(servico.servico.nome));
                    console.log("Valor: R$".concat(servico.servico.valor));
                    console.log("Quantidade Vendido: ".concat(servico.quantidade));
                    console.log('-----------------------------');
                });
                break;
            default:
                break;
        }
    };
    return ListagemA4;
}(listagemA_1.ListagemA));
exports.default = ListagemA4;
