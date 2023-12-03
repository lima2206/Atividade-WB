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
var cliente_1 = require("../../model/cliente");
var cpf_1 = __importDefault(require("../../model/cpf"));
var listagem_1 = __importDefault(require("../abstract/listagem"));
var formatarData_1 = __importDefault(require("../formatarData"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.input = new input_1.default();
        _this.format = new formatarData_1.default();
        _this.cliente = new cliente_1.Cliente('', '', new cpf_1.default('', new Date()), 0);
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        var _this = this;
        console.log('\n*Listagem de todos os Clientes:*');
        this.clientes.forEach(function (cliente, index) {
            console.log("N\u00FAmero: ".concat(index + 1));
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
        });
    };
    ListagemClientes.prototype.selecionar = function () {
        //Mostra os clientes
        console.log('\n*Selecione o Cliente:*');
        this.clientes.forEach(function (cliente, index) {
            console.log("N\u00FAmero: ".concat(index + 1));
            console.log('Nome: ' + cliente.nome);
            console.log('Nome Social: ' + cliente.nomeSocial);
            console.log('CPF: ' + cliente.getCpf().getValor());
            console.log('----------------------------------');
        });
        var escolha = this.input.receberNumero('Digite o número do Cliente (0 para nenhum): ');
        //Com certeza tem solução mas elegante, mas nesse ponto, cagay >:)
        //Acha o cliente na lista e retorna
        if (escolha != 0) {
            for (var index = 0; index < this.clientes.length; index++) {
                var cliente = this.clientes[index];
                if (escolha == index + 1) {
                    return cliente;
                }
            }
            console.log('Escolha não encontrada');
        }
        //Não sei oq mandar além de um cliente vazio
        return this.cliente;
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
