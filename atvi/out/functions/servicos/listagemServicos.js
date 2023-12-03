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
var servico_1 = __importDefault(require("../../model/servico"));
var listagem_1 = __importDefault(require("../abstract/listagem"));
var ListagemServicos = /** @class */ (function (_super) {
    __extends(ListagemServicos, _super);
    function ListagemServicos(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.input = new input_1.default();
        _this.servico = new servico_1.default('', 0);
        return _this;
    }
    ListagemServicos.prototype.listar = function () {
        console.log('\n*Listagem de todos os Serviços*');
        this.servicos.forEach(function (servico) {
            console.log('Serviço: ' + servico.nome);
            console.log('Serviço: R$' + servico.valor);
            console.log('-----------------------------');
        });
    };
    ListagemServicos.prototype.selecionar = function () {
        console.log('\n*Selecione o Produto:*');
        this.servicos.forEach(function (servico, index) {
            console.log("N\u00FAmero: ".concat(index + 1));
            console.log('Produto: ' + servico.nome);
            console.log('Valor: R$' + servico.valor);
            console.log('----------------------------------');
        });
        var escolha = this.input.receberNumero('Digite o número do Serviço (0 para nenhum): ');
        if (escolha != 0) {
            for (var index = 0; index < this.servicos.length; index++) {
                var servico = this.servicos[index];
                if (escolha == index + 1) {
                    return servico;
                }
            }
            console.log('Escolha não encontrada');
        }
        return this.servico;
    };
    return ListagemServicos;
}(listagem_1.default));
exports.default = ListagemServicos;
