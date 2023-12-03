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
var produto_1 = __importDefault(require("../../model/produto"));
var listagem_1 = __importDefault(require("../abstract/listagem"));
var ListagemProdutos = /** @class */ (function (_super) {
    __extends(ListagemProdutos, _super);
    function ListagemProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.input = new input_1.default();
        _this.produto = new produto_1.default('', 0);
        return _this;
    }
    ListagemProdutos.prototype.listar = function () {
        console.log('\n*Listagem de todos os Produtos:*');
        this.produtos.forEach(function (produto) {
            console.log('Produto: ' + produto.nome);
            console.log('Valor: R$' + produto.valor);
            console.log('-----------------------------');
        });
    };
    ListagemProdutos.prototype.selecionar = function () {
        console.log('\n*Selecione o Produto:*');
        this.produtos.forEach(function (produto, index) {
            console.log("N\u00FAmero: ".concat(index + 1));
            console.log('Produto: ' + produto.nome);
            console.log('Valor: R$' + produto.valor);
            console.log('----------------------------------');
        });
        var escolha = this.input.receberNumero('Digite o número do Produto (0 para nenhum): ');
        if (escolha != 0) {
            for (var index = 0; index < this.produtos.length; index++) {
                var produto = this.produtos[index];
                if (escolha == index + 1) {
                    return produto;
                }
            }
            console.log('Escolha não encontrada');
        }
        return this.produto;
    };
    return ListagemProdutos;
}(listagem_1.default));
exports.default = ListagemProdutos;
