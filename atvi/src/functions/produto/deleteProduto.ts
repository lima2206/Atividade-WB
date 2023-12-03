import Produto from "../../model/produto";
import Delete from "../abstract/delete";
import ListagemProdutos from "./listagemProdutos";

export default class DeleteProduto extends Delete{
    
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    
    public deletar(): void {

        let selecionarProduto = new ListagemProdutos(this.produtos)
        let produto = selecionarProduto.selecionar()
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i] == produto ){
                this.produtos.splice(i, 1)
                console.log('\nRemovido com Sucesso')
            }
        } 
        
    }

}