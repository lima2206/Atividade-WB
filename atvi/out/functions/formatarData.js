"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormatarData = /** @class */ (function () {
    function FormatarData() {
        this.formatarData = function (data) {
            var dataF = data.split('/');
            var dia = parseInt(dataF[0]);
            var mes = parseInt(dataF[1]);
            var ano = parseInt(dataF[2]);
            var date = new Date(ano, mes - 1, dia);
            return date;
        };
        this.dateToString = function (data) {
            var dia = data.getDate();
            var mes = data.getMonth();
            var ano = data.getFullYear();
            var date = "".concat(dia, "/").concat(mes + 1, "/").concat(ano);
            return date;
        };
    }
    return FormatarData;
}());
exports.default = FormatarData;
