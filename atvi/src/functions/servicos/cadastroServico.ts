import Input from "../../input/input";
import Servico from "../../model/servico";

export default class CadastroServico{
    private input: Input
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>){
        this.input = new Input
        this.servicos = servicos
    }

    public cadastrar(): void {
        //nome
        let nome = this.input.receberTexto('Digite o Nome do Serviço: ')
        
        //valor
        let valor = this.input.receberNumero('Digite o valor do Serviço: ')

        //Cria
        let servico = new Servico(nome, valor)

        //Empurra
        this.servicos.push(servico)

        console.log('Cadastrado com Sucesso!')

    }
}