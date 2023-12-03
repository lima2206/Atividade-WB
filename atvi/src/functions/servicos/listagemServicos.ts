import Input from "../../input/input";
import Servico from "../../model/servico";
import Listagem from "../abstract/listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    private input: Input
    private servico: Servico

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.input = new Input()
        this.servico = new Servico('', 0)
    }

    public listar():void {
        console.log('\n*Listagem de todos os Serviços*')
        this.servicos.forEach(servico => {
            console.log('Serviço: '+servico.nome)
            console.log('Serviço: R$'+servico.valor)
            console.log('-----------------------------')   
        });
    }

    public selecionar(): Servico {
        console.log('\n*Selecione o Produto:*')
        this.servicos.forEach((servico, index) => {
            console.log(`Número: ${index + 1}`)
            console.log('Produto: '+servico.nome)
            console.log('Valor: R$'+servico.valor)
            console.log('----------------------------------') 
        });

        let escolha = this.input.receberNumero('Digite o número do Serviço (0 para nenhum): ')
        if (escolha != 0){
            for (let index = 0; index < this.servicos.length ; index++) {
                const servico = this.servicos[index];
                if(escolha == index + 1){
                    return servico
                }
            }
            console.log('Escolha não encontrada')
        }

        return this.servico
    }
}