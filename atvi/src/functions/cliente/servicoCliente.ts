import { Cliente } from "../../model/cliente"
import Servico from "../../model/servico"
import ListagemServicos from "../servicos/listagemServicos"
import ListagemClientes from "./listagemClientes"

export default class ServicoCliente {

    private clientes: Array<Cliente>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>){
        this.clientes = clientes
        this.servicos = servicos
    }

    public adicionar(): void{
        let selecionarCliente = new ListagemClientes(this.clientes)
        let cliente = selecionarCliente.selecionar()

        let selecionarServico = new ListagemServicos(this.servicos)
        let servico = selecionarServico.selecionar()

        cliente.getServiçosConsumidos().push(servico)
        console.log('\nCadastrado com Sucesso')
    }

    public deletar(): void{
        let selecionarCliente = new ListagemClientes(this.clientes)
        let cliente = selecionarCliente.selecionar()
        let servicos = cliente.getServiçosConsumidos()

        let selecionarServico = new ListagemServicos(servicos)
        let servico = selecionarServico.selecionar()
        for (let i = 0; i < servicos.length; i++) {
            if (servicos[i] == servico ){
                servicos.splice(i, 1)
                break
            }
        }
        console.log('\nRemovido com Sucesso') 
    }

}