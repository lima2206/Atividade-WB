"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagemProdutos_1 = __importDefault(require("../produto/listagemProdutos"));
var listagemClientes_1 = __importDefault(require("./listagemClientes"));
var ProdutoCliente = /** @class */ (function () {
    function ProdutoCliente(clientes, produtos) {
        this.clientes = clientes;
        this.produtos = produtos;
    }
    ProdutoCliente.prototype.adicionar = function () {
        var selecionarCliente = new listagemClientes_1.default(this.clientes);
        var cliente = selecionarCliente.selecionar();
        var selecionarProduto = new listagemProdutos_1.default(this.produtos);
        var produto = selecionarProduto.selecionar();
        cliente.getProdutosConsumidos().push(produto);
        console.log('\nCadastrado com Sucesso');
    };
    ProdutoCliente.prototype.deletar = function () {
        var selecionarCliente = new listagemClientes_1.default(this.clientes);
        var cliente = selecionarCliente.selecionar();
        var produtos = cliente.getProdutosConsumidos();
        var selecionarProduto = new listagemProdutos_1.default(produtos);
        var produto = selecionarProduto.selecionar();
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i] == produto) {
                produtos.splice(i, 1);
                break;
            }
        }
        console.log('\nRemovido com Sucesso');
    };
    return ProdutoCliente;
}());
exports.default = ProdutoCliente;
