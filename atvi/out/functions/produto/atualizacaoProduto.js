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
var atualizacao_1 = __importDefault(require("../abstract/atualizacao"));
var listagemProdutos_1 = __importDefault(require("./listagemProdutos"));
var AtualizacaoProduto = /** @class */ (function (_super) {
    __extends(AtualizacaoProduto, _super);
    function AtualizacaoProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.input = new input_1.default();
        return _this;
    }
    AtualizacaoProduto.prototype.atualizar = function () {
        console.log('-----------------------------');
        console.log("\n*Atualizar Produto*");
        var selecionar = new listagemProdutos_1.default(this.produtos);
        var produto = selecionar.selecionar();
        var attLoop = true;
        while (attLoop) {
            console.log('-----------------------------');
            console.log("1 - Nome: ".concat(produto.nome));
            console.log("2 - Valor: R$".concat(produto.valor));
            var escolha = this.input.receberNumero('Digite sua o que deja editar, 0 para retornar: ');
            console.log('-----------------------------');
            switch (escolha) {
                case 1:
                    var nome = this.input.receberTexto('Digite o nome: ');
                    produto.nome = nome;
                    break;
                case 2:
                    var valor = this.input.receberNumero('Digite o valor: R$');
                    produto.valor = valor;
                    break;
                case 0:
                    attLoop = false;
                    break;
                default:
                    console.log('Comando Inválido');
            }
        }
    };
    return AtualizacaoProduto;
}(atualizacao_1.default));
exports.default = AtualizacaoProduto;
