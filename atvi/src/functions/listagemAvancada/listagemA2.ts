import Input from "../../input/input";
import { Cliente } from "../../model/cliente";
import { ListagemA } from "../abstract/listagemA";
import FormatarData from "../formatarData";



export default class ListagemA2 extends ListagemA{
    
    private clientes: Array<Cliente>
    private format: FormatarData

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.format = new FormatarData()
    }

    public listar(): void{
        console.log('-----------------------------')
        console.log(`1 - Homens`)
        console.log(`2 - Mulheres`)
        console.log('=============================')
        let escolha = new Input().receberNumero('Digite sua Escolha: ')
        console.log('-----------------------------')

        this.clientes.forEach(cliente => {

            //lista o cliente
            if (cliente.sexo == escolha - 1){
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
            }
            
        })
    }
}