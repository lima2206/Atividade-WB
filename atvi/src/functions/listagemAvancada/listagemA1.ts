import Input from "../../input/input";
import { Cliente } from "../../model/cliente";
import { ListagemA } from "../abstract/listagemA";


export default class ListagemA1 extends ListagemA{

    private clientes: Array<Cliente>
    private input: Input

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.input = new Input()
    }

    
    private compProdutosCons(a: Cliente, b: Cliente){
        return b.getProdutosConsumidos().length - a.getProdutosConsumidos().length
    }
    private compServicosCons(a: Cliente, b:Cliente){
        return b.getServiçosConsumidos().length - a.getServiçosConsumidos().length
    }
    
    public listar(): void{
        console.log('-----------------------------')
        console.log(`1 - Produtos`)
        console.log(`2 - Serviços`)
        console.log('=============================')
        let escolha = this.input.receberNumero('Digite sua Escolha: ')
        console.log('-----------------------------')

        switch (escolha) {
            case 1:
                //Sort em produtos consumidos e deixa os 10 primeiros
                this.clientes.sort(this.compProdutosCons)
                this.clientes.slice(0, 10).forEach((cliente, index) => {
                    console.log(`${index + 1}°`)
                    console.log(`Nome: ${cliente.nome}`)
                    console.log(`CPF: ${cliente.getCpf().getValor()}`)
                    console.log(`Produtos Consumidos: ${cliente.getProdutosConsumidos().length}`)
                    console.log('-----------------------------')
                });
                break;

            case 2:
                this.clientes.sort(this.compServicosCons)
                this.clientes.slice(0, 10).forEach((cliente, index) => {
                    console.log(`${index + 1}°`)
                    console.log(`Nome: ${cliente.nome}`)
                    console.log(`CPF: ${cliente.getCpf().getValor()}`)
                    console.log(`Serviços Consumidos: ${cliente.getServiçosConsumidos().length}`)
                    console.log('-----------------------------')
                });
                break
                
            default:

                //Acabei de perceber que não preciso fazer um loop, posso só chamar a função denovo :P
                console.log(`\nOperação Inválida!\n`)
                this.listar()
                break;
        }

        

    }
    
}