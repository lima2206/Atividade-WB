"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../../input/input"));
var cliente_1 = require("../../model/cliente");
var cpf_1 = __importDefault(require("../../model/cpf"));
var rg_1 = __importDefault(require("../../model/rg"));
var telefone_1 = __importDefault(require("../../model/telefone"));
var formatarData_1 = __importDefault(require("../formatarData"));
var CadastroCliente = /** @class */ (function () {
    function CadastroCliente(clientes) {
        this.clientes = clientes;
        this.input = new input_1.default();
        this.rgs = [];
        this.telefones = [];
        this.format = new formatarData_1.default();
    }
    CadastroCliente.prototype.cadastrar = function () {
        //nome
        var nome = this.input.receberTexto('Digite seu nome: ');
        var nomeSocial = this.input.receberTexto('Digite seu nome social: ');
        //cpf
        var cpf = this.input.receberTexto('Digite seu CPF: ');
        var dataCpf = this.input.receberTexto('Insira a data de emissão no formado dd/mm/aaaa: ');
        var dataCpfFormatada = this.format.formatarData(dataCpf);
        //sexo
        var sexo = this.input.receberNumero('Insira seu sexo(0 para homi 1 para muié): ');
        //RG não pensei em forma mais elegante de pedir e colocar dentro da Array
        var Loop = true;
        while (Loop) {
            var rg = this.input.receberTexto('Digite seu rg Caso não tenha mais digite 0: ');
            switch (rg) {
                case '0':
                    Loop = false;
                    break;
                default:
                    var dataRg = this.input.receberTexto('Insira a data de emissão no formao dd/mm/aaaa: ');
                    var dataRgFormatada = this.format.formatarData(dataRg);
                    this.rgs.push(new rg_1.default(rg, dataRgFormatada));
                    break;
            }
        }
        //Telefone
        Loop = true;
        while (Loop) {
            var telefone = this.input.receberTexto('Digite seu telefone no formato "DDD-Número" Caso não tenha mais digite 0: ');
            switch (telefone) {
                case '0':
                    Loop = false;
                    break;
                default:
                    var _a = telefone.split('-'), ddd = _a[0], numero = _a[1];
                    this.telefones.push(new telefone_1.default(ddd, numero));
                    break;
            }
        }
        //Criação do cliente
        var cliente = new cliente_1.Cliente(nome, nomeSocial, new cpf_1.default(cpf, dataCpfFormatada), sexo);
        cliente.setRG(this.rgs);
        cliente.setTelefone(this.telefones);
        //empurra para lista
        this.clientes.push(cliente);
        console.log('Cadastro com Sucesso');
    };
    return CadastroCliente;
}());
exports.default = CadastroCliente;
