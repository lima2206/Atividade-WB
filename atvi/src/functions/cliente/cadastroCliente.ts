import Input from "../../input/input"
import { Cliente } from "../../model/cliente"
import CPF from "../../model/cpf"
import RG from "../../model/rg"
import Telefone from "../../model/telefone"
import FormatarData from "../formatarData"

export default class CadastroCliente{

    private input: Input
    private clientes:Array<Cliente>
    private rgs:Array<RG>
    private telefones: Array<Telefone>
    private format: FormatarData

    constructor(clientes:Array<Cliente>){
        this.clientes = clientes
        this.input = new Input()
        this.rgs = []
        this.telefones = []
        this.format = new FormatarData()
    }

    
    public cadastrar(): void {

        //nome
        let nome = this.input.receberTexto('Digite seu nome: ')
        let nomeSocial = this.input.receberTexto('Digite seu nome social: ')

        //cpf
        let cpf = this.input.receberTexto('Digite seu CPF: ')
        let dataCpf = this.input.receberTexto('Insira a data de emissão no formado dd/mm/aaaa: ')
        let dataCpfFormatada = this.format.formatarData(dataCpf)

        //sexo
        let sexo = this.input.receberNumero('Insira seu sexo(0 para homi 1 para muié): ')
        
        //RG não pensei em forma mais elegante de pedir e colocar dentro da Array
        let Loop = true  
        while(Loop){
            let rg = this.input.receberTexto('Digite seu rg Caso não tenha mais digite 0: ')
            switch(rg){
                case '0':
                    Loop = false
                    break
                default:
                    let dataRg = this.input.receberTexto('Insira a data de emissão no formao dd/mm/aaaa: ')
                    let dataRgFormatada = this.format.formatarData(dataRg)
                    this.rgs.push(new RG(rg, dataRgFormatada))
                    break
            }
        }

        //Telefone
        Loop = true  
        while(Loop){
            let telefone = this.input.receberTexto('Digite seu telefone no formato "DDD-Número" Caso não tenha mais digite 0: ')
            switch(telefone){
                case '0':
                    Loop = false
                    break
                default:
                    let [ddd, numero] = telefone.split('-')
                    this.telefones.push(new Telefone(ddd, numero))
                    break
            }
        }

        //Criação do cliente
        let cliente = new Cliente(nome, nomeSocial, new CPF(cpf, dataCpfFormatada), sexo)
        cliente.setRG(this.rgs)
        cliente.setTelefone(this.telefones)

        //empurra para lista
        this.clientes.push(cliente)

        console.log('Cadastro com Sucesso')

    }

}