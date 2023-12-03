import Input from "../../input/input";
import Produto from "../../model/produto";
import Listagem from "../abstract/listagem";

export default class ListagemProdutos extends Listagem{

    private produtos:Array<Produto>
    private input: Input
    private produto: Produto

    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.input = new Input()
        this.produto = new Produto('', 0)
    }

    public listar():void {
        console.log('\n*Listagem de todos os Produtos:*')
        this.produtos.forEach(produto => {
            console.log('Produto: '+produto.nome)
            console.log('Valor: R$' +produto.valor)
            console.log('-----------------------------')          
        });
    }

    public selecionar(): Produto {
        console.log('\n*Selecione o Produto:*')
        this.produtos.forEach((produto, index) => {
            console.log(`Número: ${index + 1}`)
            console.log('Produto: '+produto.nome)
            console.log('Valor: R$'+produto.valor)
            console.log('----------------------------------') 
        });

        let escolha = this.input.receberNumero('Digite o número do Produto (0 para nenhum): ')
        if (escolha != 0){
            for (let index = 0; index < this.produtos.length ; index++) {
                const produto = this.produtos[index];
                if(escolha == index + 1){
                    return produto
                }
            }
            console.log('Escolha não encontrada')
        }

        return this.produto
    }
}

