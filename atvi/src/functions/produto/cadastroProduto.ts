import Input from "../../input/input";
import Produto from "../../model/produto";

export default class CadastroProduto{
    private input:Input
    private produtos:Array<Produto>

    constructor(produtos:Array<Produto>){
        this.input = new Input()
        this.produtos = produtos
    }

    public cadastrar():void{
        //nome
        let nome = this.input.receberTexto('Digite o Nome do Produto: ')

        //valor
        let valor = this.input.receberNumero('Digite o Valor do produto: R$')

        //Criação do produto
        let produto = new Produto(nome, valor)
        //empurra para a lista
        this.produtos.push(produto)

        console.log('Cadastro com Sucesso!')

    }

}