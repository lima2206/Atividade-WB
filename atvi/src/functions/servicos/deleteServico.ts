import Servico from "../../model/servico";
import Delete from "../abstract/delete";
import ListagemServicos from "./listagemServicos";

export default class DeleteServico extends Delete{

    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }

    public deletar(): void {
        let selecionarServico = new ListagemServicos(this.servicos)
        let servico = selecionarServico.selecionar()
        for (let i = 0; i < this.servicos.length; i++) {
            if (this.servicos[i] == servico){
                this.servicos.splice(i, 1)
                console.log('\nRemovido com Sucesso')
            }
        } 
    }

}