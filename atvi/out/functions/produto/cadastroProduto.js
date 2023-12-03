"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../../input/input"));
var produto_1 = __importDefault(require("../../model/produto"));
var CadastroProduto = /** @class */ (function () {
    function CadastroProduto(produtos) {
        this.input = new input_1.default();
        this.produtos = produtos;
    }
    CadastroProduto.prototype.cadastrar = function () {
        //nome
        var nome = this.input.receberTexto('Digite o Nome do Produto: ');
        //valor
        var valor = this.input.receberNumero('Digite o Valor do produto: R$');
        //Criação do produto
        var produto = new produto_1.default(nome, valor);
        //empurra para a lista
        this.produtos.push(produto);
        console.log('Cadastro com Sucesso!');
    };
    return CadastroProduto;
}());
exports.default = CadastroProduto;
