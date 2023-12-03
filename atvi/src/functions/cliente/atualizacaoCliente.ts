import Input from "../../input/input";
import { Cliente } from "../../model/cliente";
import CPF from "../../model/cpf";
import RG from "../../model/rg";
import Telefone from "../../model/telefone";
import atualizacao from "../abstract/atualizacao";
import FormatarData from "../formatarData";
import ListagemClientes from "./listagemClientes";


export default class AtualizacaoCliente extends atualizacao{

    private clientes: Array<Cliente>
    private input: Input
    private format: FormatarData

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.input = new Input()
        this.format = new FormatarData()
    }

    public atualizar(){

        console.log('-----------------------------')
        console.log(`\n*Atualizar Cliente*`)
        let selecionar = new ListagemClientes(this.clientes)
        let cliente = selecionar.selecionar()

        let attLoop = true
        while (attLoop) {

            console.log('-----------------------------')
            console.log(`1 - Nome: ${cliente.nome}`)
            console.log(`2 - Nome Social: ${cliente.nomeSocial}`)
            console.log(`3 - Sexo: ${cliente.sexo}`)
            console.log(`4 - CPF: ${cliente.getCpf().getValor()}`)
            console.log(`5 - RG(s):`)
            cliente.getRgs().forEach((rg, i) => {
                console.log(`RG - ${i + 1}: ${rg.getValor()} `)
                console.log(`Data de Emissão: ${this.format.dateToString(rg.getDataEmissao())} `)
            });
            console.log(`6 - Telefone(s): `)
            cliente.getTelefones().forEach(telefone => {
                console.log(telefone)
            })

            let escolha = this.input.receberNumero('Digite sua o que deja editar, 0 para retornar: ')
            console.log('-----------------------------')


            switch(escolha){
                case 1:
                    let nome = this.input.receberTexto('Digite o nome: ')
                    cliente.nome = nome
                    break
                case 2:
                    let nomeSocial = this.input.receberTexto('Digite o nome Social: ')
                    cliente.nomeSocial = nomeSocial
                    break
                case 3:
                    let sexo = this.input.receberNumero('Insira seu sexo(0 para homi 1 para muié): ')
                    cliente.sexo = sexo
                    break
                case 4:
                    let cpf = this.input.receberTexto('Digite seu CPF: ')
                    let dataCpf = this.input.receberTexto('Insira a data de emissão no formado dd/mm/aaaa: ')
                    let dataCpfFormatada = this.format.formatarData(dataCpf)
                    cliente.setCpf(new CPF(cpf, dataCpfFormatada))
                    break

                case 5:
                    console.log('Selecione o RG')
                    cliente.getRgs().forEach((rg, i) => {
                        console.log(`${i + 1}-${rg.getValor()}`)
                    });
                    escolha = this.input.receberNumero('Digite o número do RG (0 para adicionar): ')
                    if (escolha != 0){
                        for (let index = 0; index < cliente.getRgs().length ; index++) {
                            if(escolha == index + 1){
                                const rg: RG = cliente.getRgs()[index];
                                let novoRg = this.input.receberTexto('Digite o RG: ')
                                let novoDataEmissao = this.input.receberTexto('Insira a data de emissão no formato dd/mm/aaaa: ')
                                let dataRgFormatada = this.format.formatarData(novoDataEmissao)
                                rg.setValor(novoRg)
                                rg.setDataEmissao(dataRgFormatada)
                            }
                        }
                        console.log('\nEscolha não encontrada')
                        console.log('-----------------------------')
                    }else{
                        let novoRg = this.input.receberTexto('Digite o RG: ')
                        let novoDataEmissao = this.input.receberTexto('Insira a data de emissão no formato dd/mm/aaaa: ')
                        let dataRgFormatada = this.format.formatarData(novoDataEmissao)
                        cliente.getRgs().push(new RG(novoRg, dataRgFormatada))
                    }

                    break

                case 6:
                    console.log('Selecione o Telefone')
                    cliente.getTelefones().forEach((telefone, i) => {
                        console.log(`${i + 1} - ${telefone.getDdd()}-${telefone.getNumero()}`)
                    });
                    escolha = this.input.receberNumero('Digite o número do Telefone (0 para adicionar): ')
                    if (escolha != 0){
                        for (let index = 0; index < cliente.getTelefones().length ; index++) {
                            if(escolha == index + 1){
                                const telefone: Telefone = cliente.getTelefones()[index];
                                let novoTelefone = this.input.receberTexto('Digite o telefone no formato "DDD-Número": ')
                                let [ddd, numero] = novoTelefone.split('-')
                                telefone.setDdd(ddd)
                                telefone.setNumero(numero)
                            }
                        }
                        console.log('\nEscolha não encontrada')
                        console.log('-----------------------------')
                    }else{
                        let novoTelefone = this.input.receberTexto('Digite o telefone no formato "DDD-Número": ')
                        let [ddd, numero] = novoTelefone.split('-')
                        cliente.getTelefones().push(new Telefone(ddd, numero))
                    }
                    
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