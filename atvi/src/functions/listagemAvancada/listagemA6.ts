import Input from "../../input/input";
import { Cliente } from "../../model/cliente";
import { ListagemA } from "../abstract/listagemA";

export default class ListagemA6 extends ListagemA{

    private clientes: Array<Cliente>
    private input: Input

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.input = new Input()
    }

    private sumOfValuesProd(cliente: Cliente): number {
        return cliente.getProdutosConsumidos().reduce((sum, produto) => sum + produto.valor, 0);
    }

    private sumOfValuesServ(cliente: Cliente): number {
        return cliente.getServiçosConsumidos().reduce((sum, servico) => sum + servico.valor, 0);
    }

    private compProdConsValor(a: Cliente, b: Cliente){
        const sumA = this.sumOfValuesProd(a);
        const sumB = this.sumOfValuesProd(b);
        return sumB - sumA;
    }

    private compServConsValor(a: Cliente, b: Cliente){
        const sumA = this.sumOfValuesServ(a);
        const sumB = this.sumOfValuesServ(b);
        return sumB - sumA;
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
                this.clientes.sort(this.compProdConsValor)
                this.clientes.slice(0, 5).forEach((cliente, index) => {
                    console.log(`${index + 1}°`)
                    console.log(`Nome: ${cliente.nome}`)
                    console.log(`CPF: ${cliente.getCpf().getValor()}`)
                    console.log(`Quantidade Gasta: ${this.sumOfValuesProd(cliente)}`)
                    console.log('-----------------------------')
                });
                break;

            case 2:
                this.clientes.sort(this.compServConsValor)
                this.clientes.slice(0, 5).forEach((cliente, index) => {
                    console.log(`${index + 1}°`)
                    console.log(`Nome: ${cliente.nome}`)
                    console.log(`CPF: ${cliente.getCpf().getValor()}`)
                    console.log(`Quantidade Gasta: ${this.sumOfValuesServ(cliente)}`)
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