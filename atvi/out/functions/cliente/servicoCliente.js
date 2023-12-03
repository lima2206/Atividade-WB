"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagemServicos_1 = __importDefault(require("../servicos/listagemServicos"));
var listagemClientes_1 = __importDefault(require("./listagemClientes"));
var ServicoCliente = /** @class */ (function () {
    function ServicoCliente(clientes, servicos) {
        this.clientes = clientes;
        this.servicos = servicos;
    }
    ServicoCliente.prototype.adicionar = function () {
        var selecionarCliente = new listagemClientes_1.default(this.clientes);
        var cliente = selecionarCliente.selecionar();
        var selecionarServico = new listagemServicos_1.default(this.servicos);
        var servico = selecionarServico.selecionar();
        cliente.getServiçosConsumidos().push(servico);
        console.log('\nCadastrado com Sucesso');
    };
    ServicoCliente.prototype.deletar = function () {
        var selecionarCliente = new listagemClientes_1.default(this.clientes);
        var cliente = selecionarCliente.selecionar();
        var servicos = cliente.getServiçosConsumidos();
        var selecionarServico = new listagemServicos_1.default(servicos);
        var servico = selecionarServico.selecionar();
        for (var i = 0; i < servicos.length; i++) {
            if (servicos[i] == servico) {
                servicos.splice(i, 1);
                break;
            }
        }
        console.log('\nRemovido com Sucesso');
    };
    return ServicoCliente;
}());
exports.default = ServicoCliente;
