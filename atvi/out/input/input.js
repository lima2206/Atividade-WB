"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.receberTexto = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var texto = prompt(mensagem);
        return texto;
    };
    Input.prototype.receberNumero = function (mensagem) {
        var prompt = (0, prompt_sync_1.default)();
        var numero = parseInt(prompt(mensagem));
        return numero;
    };
    return Input;
}());
exports.default = Input;
