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
var cpf_1 = __importDefault(require("../../model/cpf"));
var rg_1 = __importDefault(require("../../model/rg"));
var telefone_1 = __importDefault(require("../../model/telefone"));
var atualizacao_1 = __importDefault(require("../abstract/atualizacao"));
var formatarData_1 = __importDefault(require("../formatarData"));
var listagemClientes_1 = __importDefault(require("./listagemClientes"));
var AtualizacaoCliente = /** @class */ (function (_super) {
    __extends(AtualizacaoCliente, _super);
    function AtualizacaoCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.input = new input_1.default();
        _this.format = new formatarData_1.default();
        return _this;
    }
    AtualizacaoCliente.prototype.atualizar = function () {
        var _this = this;
        console.log('-----------------------------');
        console.log("\n*Atualizar Cliente*");
        var selecionar = new listagemClientes_1.default(this.clientes);
        var cliente = selecionar.selecionar();
        var attLoop = true;
        while (attLoop) {
            console.log('-----------------------------');
            console.log("1 - Nome: ".concat(cliente.nome));
            console.log("2 - Nome Social: ".concat(cliente.nomeSocial));
            console.log("3 - Sexo: ".concat(cliente.sexo));
            console.log("4 - CPF: ".concat(cliente.getCpf().getValor()));
            console.log("5 - RG(s):");
            cliente.getRgs().forEach(function (rg, i) {
                console.log("RG - ".concat(i + 1, ": ").concat(rg.getValor(), " "));
                console.log("Data de Emiss\u00E3o: ".concat(_this.format.dateToString(rg.getDataEmissao()), " "));
            });
            console.log("6 - Telefone(s): ");
            cliente.getTelefones().forEach(function (telefone) {
                console.log(telefone);
            });
            var escolha = this.input.receberNumero('Digite sua o que deja editar, 0 para retornar: ');
            console.log('-----------------------------');
            switch (escolha) {
                case 1:
                    var nome = this.input.receberTexto('Digite o nome: ');
                    cliente.nome = nome;
                    break;
                case 2:
                    var nomeSocial = this.input.receberTexto('Digite o nome Social: ');
                    cliente.nomeSocial = nomeSocial;
                    break;
                case 3:
                    var sexo = this.input.receberNumero('Insira seu sexo(0 para homi 1 para muié): ');
                    cliente.sexo = sexo;
                    break;
                case 4:
                    var cpf = this.input.receberTexto('Digite seu CPF: ');
                    var dataCpf = this.input.receberTexto('Insira a data de emissão no formado dd/mm/aaaa: ');
                    var dataCpfFormatada = this.format.formatarData(dataCpf);
                    cliente.setCpf(new cpf_1.default(cpf, dataCpfFormatada));
                    break;
                case 5:
                    console.log('Selecione o RG');
                    cliente.getRgs().forEach(function (rg, i) {
                        console.log("".concat(i + 1, "-").concat(rg.getValor()));
                    });
                    escolha = this.input.receberNumero('Digite o número do RG (0 para adicionar): ');
                    if (escolha != 0) {
                        for (var index = 0; index < cliente.getRgs().length; index++) {
                            if (escolha == index + 1) {
                                var rg = cliente.getRgs()[index];
                                var novoRg = this.input.receberTexto('Digite o RG: ');
                                var novoDataEmissao = this.input.receberTexto('Insira a data de emissão no formato dd/mm/aaaa: ');
                                var dataRgFormatada = this.format.formatarData(novoDataEmissao);
                                rg.setValor(novoRg);
                                rg.setDataEmissao(dataRgFormatada);
                            }
                        }
                        console.log('\nEscolha não encontrada');
                        console.log('-----------------------------');
                    }
                    else {
                        var novoRg = this.input.receberTexto('Digite o RG: ');
                        var novoDataEmissao = this.input.receberTexto('Insira a data de emissão no formato dd/mm/aaaa: ');
                        var dataRgFormatada = this.format.formatarData(novoDataEmissao);
                        cliente.getRgs().push(new rg_1.default(novoRg, dataRgFormatada));
                    }
                    break;
                case 6:
                    console.log('Selecione o Telefone');
                    cliente.getTelefones().forEach(function (telefone, i) {
                        console.log("".concat(i + 1, " - ").concat(telefone.getDdd(), "-").concat(telefone.getNumero()));
                    });
                    escolha = this.input.receberNumero('Digite o número do Telefone (0 para adicionar): ');
                    if (escolha != 0) {
                        for (var index = 0; index < cliente.getTelefones().length; index++) {
                            if (escolha == index + 1) {
                                var telefone = cliente.getTelefones()[index];
                                var novoTelefone = this.input.receberTexto('Digite o telefone no formato "DDD-Número": ');
                                var _a = novoTelefone.split('-'), ddd = _a[0], numero = _a[1];
                                telefone.setDdd(ddd);
                                telefone.setNumero(numero);
                            }
                        }
                        console.log('\nEscolha não encontrada');
                        console.log('-----------------------------');
                    }
                    else {
                        var novoTelefone = this.input.receberTexto('Digite o telefone no formato "DDD-Número": ');
                        var _b = novoTelefone.split('-'), ddd = _b[0], numero = _b[1];
                        cliente.getTelefones().push(new telefone_1.default(ddd, numero));
                    }
                    break;
                case 0:
                    attLoop = false;
                    break;
                default:
                    console.log('Comando Inválido');
            }
        }
    };
    return AtualizacaoCliente;
}(atualizacao_1.default));
exports.default = AtualizacaoCliente;
