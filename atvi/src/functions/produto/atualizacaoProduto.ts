import Input from "../../input/input";
import Produto from "../../model/produto";
import atualizacao from "../abstract/atualizacao";
import FormatarData from "../formatarData";
import ListagemProdutos from "./listagemProdutos";

export default class AtualizacaoProduto extends atualizacao{

    private produtos: Array<Produto>
    private input: Input

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.input = new Input()
    }

    public atualizar(): void {
        
        console.log('-----------------------------')
        console.log(`\n*Atualizar Produto*`)
        let selecionar = new ListagemProdutos(this.produtos)
        let produto = selecionar.selecionar()

        let attLoop = true
        while (attLoop) {
            console.log('-----------------------------')
            console.log(`1 - Nome: ${produto.nome}`)
            console.log(`2 - Valor: R$${produto.valor}`)

            let escolha = this.input.receberNumero('Digite sua o que deja editar, 0 para retornar: ')
            console.log('-----------------------------')

            switch(escolha){
                case 1:
                    let nome = this.input.receberTexto('Digite o nome: ')
                    produto.nome = nome
                    break
                
                case 2:
                    let valor = this.input.receberNumero('Digite o valor: R$')
                    produto.valor = valor
                    break
                
                case 0:
                    attLoop = false
                    break

                default:
                    console.log('Comando Inválido')
            }


        }
        
    }

}