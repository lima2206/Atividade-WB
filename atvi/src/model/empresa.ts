import { Cliente } from "./cliente";
import Produto from "./produto";
import Servico from "./servico";

export class Empresa {

    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }

    //getters
    public getClientes(): Array<Cliente>{
        return this.clientes
    }
    public getProdutos(): Array<Produto>{
        return this.produtos
    }
    public getServicos(): Array<Servico>{
        return this.servicos
    }

}