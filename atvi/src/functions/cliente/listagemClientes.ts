import Input from "../../input/input";
import { Cliente } from "../../model/cliente";
import CPF from "../../model/cpf";
import Listagem from "../abstract/listagem";
import FormatarData from "../formatarData";

export default class ListagemClientes extends Listagem{
    
    private clientes:Array<Cliente>
    private input: Input
    private format: FormatarData
    private cliente: Cliente

    constructor(clientes:Array<Cliente>){
        super()
        this.clientes = clientes
        this.input = new Input()
        this.format = new FormatarData() 
        this.cliente = new Cliente('', '', new CPF('', new Date()), 0)
    }
    
    public listar():void {
        console.log('\n*Listagem de todos os Clientes:*')
        this.clientes.forEach((cliente, index) => {
            console.log(`Número: ${index + 1}`)
            console.log('Nome: '+ cliente.nome)
            console.log('Nome Social: '+cliente.nomeSocial)
            let sexo = function(){
                if (cliente.sexo == 0){
                    return 'Homem'
                }else{
                    return 'Mulher'
                }
            }
            console.log(`Gênero: ${sexo()}`)
            console.log(`CPF: ${cliente.getCpf().getValor()} Data de Emissão: ${this.format.dateToString(cliente.getCpf().getDataEmissao())}`)
            cliente.getRgs().forEach((rg, index) => {
                console.log(`RG - ${index + 1}: ${rg.getValor()} - Data de Emissão: ${this.format.dateToString(rg.getDataEmissao())}`)
            });
            cliente.getTelefones().forEach((telefone, index)=> {
                console.log(`Tel - ${index + 1}: ${telefone.getDdd()}-${telefone.getNumero()}`)
            })
            console.log('Produtos Consumidos:')
            cliente.getProdutosConsumidos().forEach((produto, index) => {
                console.log(`Produto - ${index + 1}: ${produto.nome} - R$${produto.valor}`)
            })
            console.log('Serviços Consumidos')
            cliente.getServiçosConsumidos().forEach((servico, index) => {
                console.log(`Serviço - ${index + 1}: ${servico.nome} - R$${servico.valor}`)
            })
            console.log('----------------------------------') 
        });
    }

    public selecionar(): Cliente {
        //Mostra os clientes
        console.log('\n*Selecione o Cliente:*')
        this.clientes.forEach((cliente, index) => {
            console.log(`Número: ${index + 1}`)
            console.log('Nome: '+ cliente.nome)
            console.log('Nome Social: '+cliente.nomeSocial)
            console.log('CPF: '+ cliente.getCpf().getValor())
            console.log('----------------------------------') 
        });

        let escolha = this.input.receberNumero('Digite o número do Cliente (0 para nenhum): ')
        //Com certeza tem solução mas elegante, mas nesse ponto, cagay >:)
        //Acha o cliente na lista e retorna
        if (escolha != 0){
            for (let index = 0; index < this.clientes.length ; index++) {
                const cliente = this.clientes[index];
                if(escolha == index + 1){
                    return cliente
                }
            }
            console.log('Escolha não encontrada')
        }
        //Não sei oq mandar além de um cliente vazio
        return this.cliente
    }

    

}