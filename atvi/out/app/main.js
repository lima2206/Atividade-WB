"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cadastroCliente_1 = __importDefault(require("../functions/cliente/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../functions/produto/cadastroProduto"));
var listagemClientes_1 = __importDefault(require("../functions/cliente/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../functions/produto/listagemProdutos"));
var input_1 = __importDefault(require("../input/input"));
var empresa_1 = require("../model/empresa");
var cadastroServico_1 = __importDefault(require("../functions/servicos/cadastroServico"));
var listagemServicos_1 = __importDefault(require("../functions/servicos/listagemServicos"));
var deleteCliente_1 = __importDefault(require("../functions/cliente/deleteCliente"));
var atualizacaoCliente_1 = __importDefault(require("../functions/cliente/atualizacaoCliente"));
var deleteProduto_1 = __importDefault(require("../functions/produto/deleteProduto"));
var deleteServico_1 = __importDefault(require("../functions/servicos/deleteServico"));
var atualizacaoProduto_1 = __importDefault(require("../functions/produto/atualizacaoProduto"));
var atualizacaoServico_1 = __importDefault(require("../functions/servicos/atualizacaoServico"));
var produtoCliente_1 = __importDefault(require("../functions/cliente/produtoCliente"));
var servicoCliente_1 = __importDefault(require("../functions/cliente/servicoCliente"));
var listagemAvancada_1 = __importDefault(require("../functions/listagemAvancada/listagemAvancada"));
var preencherBanco_1 = __importDefault(require("../functions/preencherBanco"));
console.log("Bem Vindo ao cadastro de clientes WB!");
var empresa = new empresa_1.Empresa();
var execucao = true;
var preencher = new preencherBanco_1.default(empresa);
preencher.preencher();
while (execucao) {
    console.log('=============================');
    console.log("Op\u00E7\u00F5es: ");
    console.log("1 - Cliente");
    console.log("2 - Produto");
    console.log("3 - Servi\u00E7o");
    console.log('-----------------------------');
    console.log("4 - Listagem Avan\u00E7adada");
    console.log('-----------------------------');
    console.log("0 - Sair");
    console.log('=============================');
    var input = new input_1.default();
    var escolha = input.receberNumero("Escolha sua op\u00E7\u00E3o: ");
    console.log("\nOp\u00E7\u00F5es: ");
    switch (escolha) {
        case 1:
            console.log("1 - Cadastrar novo Cliente");
            console.log("2 - Listar Clientes");
            console.log("3 - Adicionar Produto em um Cliente ");
            console.log("4 - Deletar Produto em um Cliente");
            console.log("5 - Adicionar Servi\u00E7o em um Cliente");
            console.log("6 - Deletar Servi\u00E7o em um Cliente");
            console.log("7 - Atualizar Cliente");
            console.log("8 - Deletar Cliente");
            console.log("0 - Sair");
            console.log('=============================');
            var escolha_1 = input.receberNumero("Escolha sua op\u00E7\u00E3o: ");
            switch (escolha_1) {
                //Cadastrar Cliente
                case 1:
                    var cadastroC = new cadastroCliente_1.default(empresa.getClientes());
                    cadastroC.cadastrar();
                    break;
                //Listar Clientes
                case 2:
                    var listarC = new listagemClientes_1.default(empresa.getClientes());
                    listarC.listar();
                    break;
                //Add produto em um cliente
                case 3:
                    var addP = new produtoCliente_1.default(empresa.getClientes(), empresa.getProdutos());
                    addP.adicionar();
                    break;
                //Del produto em um cliente
                case 4:
                    var delP = new produtoCliente_1.default(empresa.getClientes(), empresa.getProdutos());
                    delP.deletar();
                    break;
                //Add Serviço em um cliente
                case 5:
                    var addS = new servicoCliente_1.default(empresa.getClientes(), empresa.getServicos());
                    addS.adicionar();
                    break;
                //Del Serviço em um cliente
                case 6:
                    var delS = new servicoCliente_1.default(empresa.getClientes(), empresa.getServicos());
                    delS.deletar();
                    break;
                //Atualizar Cliente
                case 7:
                    var atualizarC = new atualizacaoCliente_1.default(empresa.getClientes());
                    atualizarC.atualizar();
                    break;
                //Deletar Cliente
                case 8:
                    var deletarC = new deleteCliente_1.default(empresa.getClientes());
                    deletarC.deletar();
                    break;
                case 0:
                    break;
                default:
            }
            break;
        case 2:
            console.log("1 - Cadastrar novo Produto");
            console.log("2 - Listar Produtos");
            console.log("3 - Atualizar Produto");
            console.log("4 - Deletar Produto");
            console.log("0 - Sair");
            console.log('=============================');
            escolha_1 = input.receberNumero("Escolha sua op\u00E7\u00E3o: ");
            switch (escolha_1) {
                //Cadastrar Produto
                case 1:
                    var cadastroP = new cadastroProduto_1.default(empresa.getProdutos());
                    cadastroP.cadastrar();
                    break;
                //Listar Produtos
                case 2:
                    var listarP = new listagemProdutos_1.default(empresa.getProdutos());
                    listarP.listar();
                    break;
                //Atualizar Produto
                case 3:
                    var atualizarP = new atualizacaoProduto_1.default(empresa.getProdutos());
                    atualizarP.atualizar();
                    break;
                //Deletar Produto
                case 4:
                    var deletarP = new deleteProduto_1.default(empresa.getProdutos());
                    deletarP.deletar();
                    break;
                case 0:
                    break;
                default:
            }
            break;
        case 3:
            console.log("1 - Cadastrar novo Servi\u00E7o");
            console.log("2 - Listar Servi\u00E7os");
            console.log("3 - Atualizar Servi\u00E7o");
            console.log("4 - Deletar Servi\u00E7o");
            console.log("0 - Sair");
            console.log('=============================');
            escolha_1 = input.receberNumero("Escolha sua op\u00E7\u00E3o: ");
            switch (escolha_1) {
                //Cadastrar Serviço
                case 1:
                    var cadastroS = new cadastroServico_1.default(empresa.getServicos());
                    cadastroS.cadastrar();
                    break;
                //Listar Serviços
                case 2:
                    var listarS = new listagemServicos_1.default(empresa.getServicos());
                    listarS.listar();
                    break;
                //Atualizar Serviço
                case 3:
                    var atualizarS = new atualizacaoServico_1.default(empresa.getServicos());
                    atualizarS.atualizar();
                    break;
                //Deletar Serviço
                case 4:
                    var deletarS = new deleteServico_1.default(empresa.getServicos());
                    deletarS.deletar();
                    break;
                case 0:
                    break;
                default:
            }
            break;
        //Listagem Avançada
        case 4:
            var listagemAvancada = new listagemAvancada_1.default(empresa);
            listagemAvancada.listar();
            break;
        //Sair
        case 0:
            console.log('Muito Obrigado, até mais!');
            execucao = false;
            break;
        default:
            console.log("\nOpera\u00E7\u00E3o Inv\u00E1lida!\n");
    }
}
