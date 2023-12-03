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
var input_1 = __importDefault(require("../input/input"));
var listagem_1 = __importDefault(require("./listagem"));
// Classe para listagem específica requerida pelo cliente
var listagemAvancada = /** @class */ (function (_super) {
    __extends(listagemAvancada, _super);
    function listagemAvancada() {
        return _super.call(this) || this;
    }
    listagemAvancada.prototype.listar = function () {
        console.log('Listagem Avançada de Clientes');
        console.log('=============================');
        console.log("Op\u00E7\u00F5es: ");
        console.log("1 - 10 Clientes que mais consumiram produtos em quantidade");
        console.log('-----------------------------');
        console.log("2 - Todos os Clientes por G\u00EAnero");
        console.log('-----------------------------');
        console.log("3 - Servi\u00E7os ou Produtos mais consumidos");
        console.log('-----------------------------');
        console.log("4 - Servi\u00E7os ou Produtos mais consumidos por G\u00EAnero");
        console.log('-----------------------------');
        console.log("5 - 10 Clientes que menos consumiram produtos");
        console.log('-----------------------------');
        console.log("6 - 10 Clientes que mais consumiram produtos em valor");
        console.log('-----------------------------');
        console.log("0 - Sair");
        console.log('=============================');
        var escolha = new input_1.default().receberNumero('Digite sua Escolha: ');
        switch (escolha) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 0:
            //Sair
            case 0:
                break;
            default:
                console.log("\nOpera\u00E7\u00E3o Inv\u00E1lida!\n");
        }
    };
    return listagemAvancada;
}(listagem_1.default));
exports.default = listagemAvancada;
