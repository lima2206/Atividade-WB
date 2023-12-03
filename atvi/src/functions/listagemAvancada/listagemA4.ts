import Input from "../../input/input";
import { Cliente } from "../../model/cliente";
import Produto from "../../model/produto";
import Servico from "../../model/servico";
import { ListagemA } from "../abstract/listagemA";

export default class ListagemA4 extends ListagemA{

    private clientes: Array<Cliente>
    private todosProdutos: Array<Produto>
    private todosServicos: Array<Servico>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.todosProdutos = []
        this.todosServicos = []
    }

    private agruparProdutos(lista: Array<Produto>): { produto: Produto, quantidade: number }[] {
        const grupos: { [key: string]: { produto: Produto, quantidade: number } } = {};
    
        lista.forEach(produto => {
        const chave = `${produto.nome}_${produto.valor}`;
    
        if (!grupos[chave]) {
            grupos[chave] = { produto, quantidade: 1 };
        } else {
            grupos[chave].quantidade++;
        }
        });

        const resultadoOrdenado = Object.values(grupos).sort((a, b) => b.quantidade - a.quantidade);

        return resultadoOrdenado;
    }

    private agruparServicos(lista: Array<Servico>): { servico: Servico, quantidade: number }[] {
        const grupos: { [key: string]: { servico: Servico, quantidade: number } } = {};
    
        lista.forEach(servico => {
        const chave = `${servico.nome}_${servico.valor}`;
    
        if (!grupos[chave]) {
            grupos[chave] = { servico, quantidade: 1 };
        } else {
            grupos[chave].quantidade++;
        }
        });

        const resultadoOrdenado = Object.values(grupos).sort((a, b) => b.quantidade - a.quantidade);

        return resultadoOrdenado;
    }
    
    public listar(): void{
        console.log('-----------------------------')
        console.log(`1 - Produtos`)
        console.log(`2 - Serviços`)
        console.log('=============================')
        let escolha = new Input().receberNumero('Digite sua Escolha: ')
        console.log('-----------------------------')
        console.log(`1 - Homem`)
        console.log(`2 - Mulher`)
        console.log('=============================')
        let escolhaSexo = new Input().receberNumero('Digite sua Escolha: ')
        console.log('-----------------------------')
        
        switch(escolha){
            
            
            case 1:
            
                this.clientes.forEach(cliente => {
                    if (cliente.sexo == escolhaSexo - 1){
                        cliente.getProdutosConsumidos().forEach(produto => {
                            this.todosProdutos.push(produto)
                        })
                    }
                }) 

                let todosProdutosAgrupados = (this.agruparProdutos(this.todosProdutos))
                
                
                todosProdutosAgrupados.forEach((produto, index) => {
                    console.log(`${index + 1}°`)
                    console.log(`Produto: ${produto.produto.nome}`)
                    console.log(`Valor: R$${produto.produto.valor}`)
                    console.log(`Quantidade Vendido: ${produto.quantidade}`)
                    console.log('-----------------------------')
                })

                break
            case 2:

                this.clientes.forEach(cliente => {
                    if (cliente.sexo == escolhaSexo - 1){
                        cliente.getServiçosConsumidos().forEach(servico => {
                            this.todosServicos.push(servico)
                        })
                    }
                })
                
                let todosServicosAgrupados = (this.agruparServicos(this.todosServicos))
                
                todosServicosAgrupados.forEach((servico, index) => {
                    console.log(`${index + 1}°`)
                    console.log(`Serviço: ${servico.servico.nome}`)
                    console.log(`Valor: R$${servico.servico.valor}`)
                    console.log(`Quantidade Vendido: ${servico.quantidade}`)
                    console.log('-----------------------------')
                })  

                break
            default:

                break
        }



    }
    
}