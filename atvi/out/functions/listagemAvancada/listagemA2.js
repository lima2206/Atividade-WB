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
var formatarData_1 = __importDefault(require("../formatarData"));
var ListagemA2 = /** @class */ (function (_super) {
    __extends(ListagemA2, _super);
    function ListagemA2(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.format = new formatarData_1.default();
        return _this;
    }
    ListagemA2.prototype.listar = function () {
        var _this = this;
        console.log('-----------------------------');
        console.log("1 - Homens");
        console.log("2 - Mulheres");
        console.log('=============================');
        var escolha = new input_1.default().receberNumero('Digite sua Escolha: ');
        console.log('-----------------------------');
        this.clientes.forEach(function (cliente) {
            //lista o cliente
            if (cliente.sexo == escolha - 1) {
                console.log('Nome: ' + cliente.nome);
                console.log('Nome Social: ' + cliente.nomeSocial);
                var sexo = function () {
                    if (cliente.sexo == 0) {
                        return 'Homem';
                    }
                    else {
                        return 'Mulher';
                    }
                };
                console.log("G\u00EAnero: ".concat(sexo()));
                console.log("CPF: ".concat(cliente.getCpf().getValor(), " Data de Emiss\u00E3o: ").concat(_this.format.dateToString(cliente.getCpf().getDataEmissao())));
                cliente.getRgs().forEach(function (rg, index) {
                    console.log("RG - ".concat(index + 1, ": ").concat(rg.getValor(), " - Data de Emiss\u00E3o: ").concat(_this.format.dateToString(rg.getDataEmissao())));
                });
                cliente.getTelefones().forEach(function (telefone, index) {
                    console.log("Tel - ".concat(index + 1, ": ").concat(telefone.getDdd(), "-").concat(telefone.getNumero()));
                });
                console.log('Produtos Consumidos:');
                cliente.getProdutosConsumidos().forEach(function (produto, index) {
                    console.log("Produto - ".concat(index + 1, ": ").concat(produto.nome, " - R$").concat(produto.valor));
                });
                console.log('Serviços Consumidos');
                cliente.getServiçosConsumidos().forEach(function (servico, index) {
                    console.log("Servi\u00E7o - ".concat(index + 1, ": ").concat(servico.nome, " - R$").concat(servico.valor));
                });
                console.log('----------------------------------');
            }
        });
    };
    return ListagemA2;
}(listagemA_1.ListagemA));
exports.default = ListagemA2;
