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
var delete_1 = __importDefault(require("../abstract/delete"));
var listagemServicos_1 = __importDefault(require("./listagemServicos"));
var DeleteServico = /** @class */ (function (_super) {
    __extends(DeleteServico, _super);
    function DeleteServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        return _this;
    }
    DeleteServico.prototype.deletar = function () {
        var selecionarServico = new listagemServicos_1.default(this.servicos);
        var servico = selecionarServico.selecionar();
        for (var i = 0; i < this.servicos.length; i++) {
            if (this.servicos[i] == servico) {
                this.servicos.splice(i, 1);
                console.log('\nRemovido com Sucesso');
            }
        }
    };
    return DeleteServico;
}(delete_1.default));
exports.default = DeleteServico;
