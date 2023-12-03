"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../input/input"));
var cliente_1 = require("../model/cliente");
var cpf_1 = __importDefault(require("../model/cpf"));
var rg_1 = __importDefault(require("../model/rg"));
var formatarData_1 = __importDefault(require("./formatarData"));
var CadastroCliente = /** @class */ (function () {
    function CadastroCliente(clientes) {
        this.rgs = [];
        this.clientes = clientes;
        this.input = new input_1.default();
    }
    CadastroCliente.prototype.cadastrar = function () {
        //nome
        var nome = this.input.receberTexto('Digite seu nome: ');
        var nomeSocial = this.input.receberTexto('Digite seu nome social: ');
        //cpf
        var cpf = this.input.receberTexto('Digite seu CPF: ');
        var dataCpf = this.input.receberTexto('Insira a data de emissão no formado dd/mm/aaaa: ');
        var format = new formatarData_1.default();
        var dataCpfFormatada = format.formatarData(dataCpf);
        //sexo
        var sexo = this.input.receberNumero('Insira seu sexo(0 para homi 1 para muié): ');
        //RG não pensei em forma mais elegante de pedir e colocar dentro da Array
        var rgloop = true;
        while (rgloop) {
            var rg = this.input.receberTexto('Digite seu(s) rg(s) Caso não tenha mais digite 0: ');
            switch (rg) {
                case '0':
                    rgloop = false;
                    break;
                default:
                    var dataRg = this.input.receberTexto('Insira a data de emissão no formado dd/mm/aaaa: ');
                    var dataRgFormatada = format.formatarData(dataRg);
                    this.rgs.push(new rg_1.default(rg, dataRgFormatada));
                    console.log(new rg_1.default(rg, dataRgFormatada));
                    break;
            }
        }
        //Criação do cliente
        var cliente = new cliente_1.Cliente(nome, nomeSocial, new cpf_1.default(cpf, dataCpfFormatada), sexo);
        cliente.setRG(this.rgs);
        //empurra para lista
        this.clientes.push(cliente);
        console.log('Cadastro com Sucesso');
    };
    return CadastroCliente;
}());
exports.default = CadastroCliente;
