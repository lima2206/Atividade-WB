import { Cliente } from "../../model/cliente";
import Produto from "../../model/produto";
import ListagemProdutos from "../produto/listagemProdutos";
import ListagemClientes from "./listagemClientes";

export default class ProdutoCliente {
    
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>){
        this.clientes = clientes
        this.produtos = produtos

    }

    public adicionar(): void {
        let selecionarCliente = new ListagemClientes(this.clientes)
        let cliente = selecionarCliente.selecionar()

        let selecionarProduto = new ListagemProdutos(this.produtos)
        let produto = selecionarProduto.selecionar()

        cliente.getProdutosConsumidos().push(produto)
        console.log('\nCadastrado com Sucesso')
    }

    public deletar(): void{
        let selecionarCliente = new ListagemClientes(this.clientes)
        let cliente = selecionarCliente.selecionar()
        let produtos = cliente.getProdutosConsumidos()

        let selecionarProduto = new ListagemProdutos(produtos)
        let produto = selecionarProduto.selecionar()
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i] == produto ){
                produtos.splice(i, 1)
                break
            }
        }
        console.log('\nRemovido com Sucesso') 

    }
    
}