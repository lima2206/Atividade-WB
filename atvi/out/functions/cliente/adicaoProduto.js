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
var adicao_1 = __importDefault(require("../abstract/adicao"));
var listagemProdutos_1 = __importDefault(require("../produto/listagemProdutos"));
var listagemClientes_1 = __importDefault(require("./listagemClientes"));
var AdicaoProduto = /** @class */ (function (_super) {
    __extends(AdicaoProduto, _super);
    function AdicaoProduto(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.produtosConsumidos = [];
        return _this;
    }
    AdicaoProduto.prototype.adicionar = function () {
        var selecionarCliente = new listagemClientes_1.default(this.clientes);
        var cliente = selecionarCliente.selecionar();
        var selecionarProduto = new listagemProdutos_1.default(this.produtos);
        var produto = selecionarProduto.selecionar();
        cliente.getProdutosConsumidos().push(produto);
        console.log('\nCadastrado com Sucesso');
    };
    return AdicaoProduto;
}(adicao_1.default));
exports.default = AdicaoProduto;
