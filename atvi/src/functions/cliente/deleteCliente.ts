import { Cliente } from "../../model/cliente";
import Delete from "../abstract/delete";
import ListagemClientes from "./listagemClientes";

export default class DeleteCliente extends Delete {

    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }


    public deletar(){
        
        let selecionarCliente = new ListagemClientes(this.clientes)
        let cliente = selecionarCliente.selecionar()
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] == cliente ){
                this.clientes.splice(i, 1)
                console.log('\nRemovido com Sucesso')
            }
        }
    }
}