"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = __importDefault(require("../../input/input"));
var listagemA1_1 = __importDefault(require("./listagemA1"));
var listagemA2_1 = __importDefault(require("./listagemA2"));
var listagemA3_1 = __importDefault(require("./listagemA3"));
var listagemA4_1 = __importDefault(require("./listagemA4"));
var listagemA5_1 = __importDefault(require("./listagemA5"));
var listagemA6_1 = __importDefault(require("./listagemA6"));
// Classe para listagem específica requerida pelo cliente
var ListagemAvancada = /** @class */ (function () {
    function ListagemAvancada(empresa) {
        this.empresa = empresa;
    }
    ListagemAvancada.prototype.listar = function () {
        var Loop = true;
        while (Loop) {
            console.log('=============================');
            console.log('Listagem Avançada de Clientes');
            console.log('=============================');
            console.log("Op\u00E7\u00F5es: ");
            console.log("1 - 10 Clientes que mais consumiram Produtos ou Servi\u00E7os em quantidade");
            console.log("2 - Todos os Clientes por G\u00EAnero");
            console.log("3 - Servi\u00E7os ou Produtos mais consumidos");
            console.log("4 - Servi\u00E7os ou Produtos mais consumidos por G\u00EAnero");
            console.log("5 - 10 Clientes que menos consumiram Produtos ou Servi\u00E7os em quantidade");
            console.log("6 - 5 Clientes que mais consumiram Produtos ou Servi\u00E7os em valor");
            console.log("0 - Sair");
            console.log('=============================');
            var escolha = new input_1.default().receberNumero('Digite sua Escolha: ');
            switch (escolha) {
                case 1:
                    var listar1 = new listagemA1_1.default(this.empresa.getClientes());
                    listar1.listar();
                    break;
                case 2:
                    var listar2 = new listagemA2_1.default(this.empresa.getClientes());
                    listar2.listar();
                    break;
                case 3:
                    var listar3 = new listagemA3_1.default(this.empresa.getClientes());
                    listar3.listar();
                    break;
                case 4:
                    var listar4 = new listagemA4_1.default(this.empresa.getClientes());
                    listar4.listar();
                    break;
                case 5:
                    var listar5 = new listagemA5_1.default(this.empresa.getClientes());
                    listar5.listar();
                    break;
                case 6:
                    var listar6 = new listagemA6_1.default(this.empresa.getClientes());
                    listar6.listar();
                    break;
                //Sair
                case 0:
                    Loop = false;
                    break;
                default:
                    console.log("\nOpera\u00E7\u00E3o Inv\u00E1lida!\n");
            }
        }
    };
    return ListagemAvancada;
}());
exports.default = ListagemAvancada;
