import Input from "../../input/input";
import Servico from "../../model/servico";
import atualizacao from "../abstract/atualizacao";
import ListagemServicos from "./listagemServicos";

export default class AtualizacaoServico extends atualizacao{
    
    private servicos: Array<Servico>
    private input: Input
    
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.input = new Input()
    }

    public atualizar(): void {
        
        console.log('-----------------------------')
        console.log(`\n*Atualizar Servico*`)
        let selecionar = new ListagemServicos(this.servicos)
        let servico = selecionar.selecionar()

        let attLoop = true
        while (attLoop) {
            console.log('-----------------------------')
            console.log(`1 - Nome: ${servico.nome}`)
            console.log(`2 - Valor: R$${servico.valor}`)

            let escolha = this.input.receberNumero('Digite sua o que deja editar, 0 para retornar: ')
            console.log('-----------------------------')

            switch(escolha){
                case 1:
                    let nome = this.input.receberTexto('Digite o nome: ')
                    servico.nome = nome
                    break
                
                case 2:
                    let valor = this.input.receberNumero('Digite o valor: R$')
                    servico.valor = valor
                    break
                
                case 0:
                    attLoop = false
                    break

                default:
                    console.log('Comando Inválido')
            }

        }

    }
}