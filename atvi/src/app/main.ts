import CadastroCliente from "../functions/cliente/cadastroCliente";
import CadastroProduto from "../functions/produto/cadastroProduto";
import ListagemClientes from "../functions/cliente/listagemClientes";
import ListagemProdutos from "../functions/produto/listagemProdutos";
import Input from "../input/input";
import { Empresa } from "../model/empresa";
import CadastroServico from "../functions/servicos/cadastroServico";
import ListagemServicos from "../functions/servicos/listagemServicos";
import DeleteCliente from "../functions/cliente/deleteCliente";
import AtualizacaoCliente from "../functions/cliente/atualizacaoCliente";
import DeleteProduto from "../functions/produto/deleteProduto";
import DeleteServico from "../functions/servicos/deleteServico";
import AtualizacaoProduto from "../functions/produto/atualizacaoProduto";
import AtualizacaoServico from "../functions/servicos/atualizacaoServico";
import ProdutoCliente from "../functions/cliente/produtoCliente";
import ServicoCliente from "../functions/cliente/servicoCliente";
import ListagemAvancada from "../functions/listagemAvancada/listagemAvancada";
import PreencherBanco from "../functions/preencherBanco";


console.log(`Bem Vindo ao cadastro de clientes WB!`)
let empresa = new Empresa()
let execucao = true

let preencher = new PreencherBanco(empresa)
preencher.preencher()

while (execucao) {
    console.log('=============================')
    console.log(`Opções: `)
    console.log(`1 - Cliente`)
    console.log(`2 - Produto`)
    console.log(`3 - Serviço`)
    console.log('-----------------------------')
    console.log(`4 - Listagem Avançadada`)
    console.log('-----------------------------')
    console.log(`0 - Sair`)
    console.log('=============================')
    

    let input = new Input()
    const escolha = input.receberNumero(`Escolha sua opção: `)
    console.log(`\nOpções: `)
    switch(escolha){
        case 1:
            console.log(`1 - Cadastrar novo Cliente`)
            console.log(`2 - Listar Clientes`)
            console.log(`3 - Adicionar Produto em um Cliente `)
            console.log(`4 - Deletar Produto em um Cliente`)
            console.log(`5 - Adicionar Serviço em um Cliente`)
            console.log(`6 - Deletar Serviço em um Cliente`)
            console.log(`7 - Atualizar Cliente`)
            console.log(`8 - Deletar Cliente`)
            console.log(`0 - Sair`)
            console.log('=============================')
            let escolha = input.receberNumero(`Escolha sua opção: `)
            switch (escolha) {
                //Cadastrar Cliente
                case 1:
                    let cadastroC = new CadastroCliente(empresa.getClientes())
                    cadastroC.cadastrar()
                    break
        
                //Listar Clientes
                case 2:
                    let listarC = new ListagemClientes(empresa.getClientes())
                    listarC.listar()
                    break
                    
                //Add produto em um cliente
                case 3:
                    let addP = new ProdutoCliente(empresa.getClientes(),empresa.getProdutos())
                    addP.adicionar()
                    break

                //Del produto em um cliente
                case 4:
                    let delP = new ProdutoCliente(empresa.getClientes(), empresa.getProdutos())
                    delP.deletar()
                break

                //Add Serviço em um cliente
                case 5:
                    let addS = new ServicoCliente(empresa.getClientes(), empresa.getServicos())
                    addS.adicionar()
                    break

                //Del Serviço em um cliente
                case 6: 
                    let delS = new ServicoCliente(empresa.getClientes(), empresa.getServicos())
                    delS.deletar()
                    break

                //Atualizar Cliente
                case 7:
                    let atualizarC = new AtualizacaoCliente(empresa.getClientes())
                    atualizarC.atualizar()
        
                    break
                
                //Deletar Cliente
                case 8:
                    let deletarC = new DeleteCliente(empresa.getClientes())
                    deletarC.deletar()
                    break

                case 0:
                    break
                
                default:
                    

            }

            break

        case 2:
            console.log(`1 - Cadastrar novo Produto`)
            console.log(`2 - Listar Produtos`)
            console.log(`3 - Atualizar Produto`)
            console.log(`4 - Deletar Produto`)
            console.log(`0 - Sair`)
            console.log('=============================')
            escolha = input.receberNumero(`Escolha sua opção: `)
            switch (escolha){
                //Cadastrar Produto
                case 1:
                    let cadastroP = new CadastroProduto(empresa.getProdutos())
                    cadastroP.cadastrar()
                    break
                
                //Listar Produtos
                case 2:
                    let listarP = new ListagemProdutos(empresa.getProdutos())
                    listarP.listar()
                    break
                
                //Atualizar Produto
                case 3:
                    let atualizarP = new AtualizacaoProduto(empresa.getProdutos())
                    atualizarP.atualizar()
                    break

                //Deletar Produto
                case 4:
                    let deletarP = new DeleteProduto(empresa.getProdutos())
                    deletarP.deletar()
                    break

                case 0:
                    break

                default:
                    
            }

            break
        
        case 3:
            console.log(`1 - Cadastrar novo Serviço`)
            console.log(`2 - Listar Serviços`)
            console.log(`3 - Atualizar Serviço`)
            console.log(`4 - Deletar Serviço`)
            console.log(`0 - Sair`)
            console.log('=============================')
            escolha = input.receberNumero(`Escolha sua opção: `)
            switch (escolha){

                //Cadastrar Serviço
                case 1:
                    let cadastroS = new CadastroServico(empresa.getServicos())
                    cadastroS.cadastrar()
                    break
                
                //Listar Serviços
                case 2:
                    let listarS = new ListagemServicos(empresa.getServicos())
                    listarS.listar()
                    break
                
                //Atualizar Serviço
                case 3:
                    let atualizarS = new AtualizacaoServico(empresa.getServicos())
                    atualizarS.atualizar()
                    break
                
                //Deletar Serviço
                case 4:
                    let deletarS = new DeleteServico(empresa.getServicos())
                    deletarS.deletar()
                    break

                case 0:
                    break

                default:
                    
            }

            break
        
        //Listagem Avançada
        case 4:
            let listagemAvancada = new ListagemAvancada(empresa)
            listagemAvancada.listar()

            break

        //Sair
        case 0:
            console.log('Muito Obrigado, até mais!')
            execucao = false
            break

        default:
            console.log(`\nOperação Inválida!\n`)
    }

}



