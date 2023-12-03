"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../input/input"));
var servico_1 = __importDefault(require("../model/servico"));
var CadastroServico = /** @class */ (function () {
    function CadastroServico(servicos) {
        this.input = new input_1.default;
        this.servicos = servicos;
    }
    CadastroServico.prototype.cadastrar = function () {
        //nome
        var nome = this.input.receberTexto('Digite o Nome do Serviço: ');
        //valor
        var valor = this.input.receberNumero('Digite o valor do Serviço: ');
        //Cria
        var servico = new servico_1.default(nome, valor);
        //Empurra
        this.servicos.push(servico);
        console.log('Cadastrado com Sucesso!');
    };
    return CadastroServico;
}());
exports.default = CadastroServico;
