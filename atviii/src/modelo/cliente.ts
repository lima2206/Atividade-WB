import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public sexo: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>


    constructor(nome: string, nomeSocial: string, cpf: CPF, sexo: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.sexo = sexo
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }


    // Getters
    // Percebi que tem o public "get" 
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }



    //Setters
    public setCpf(cpf: CPF) {
        this.cpf = cpf
    }
    public setRG(lista: Array<RG>){
        this.rgs = lista
    }
    public setTelefone(lista: Array<Telefone>){
        this.telefones = lista
    }
    public setProdutosConsumidos(lista: Array<Produto>){
        this.produtosConsumidos = lista
    }
    public setServicosConsumidos(lista: Array<Servico>){
        this.servicosConsumidos = lista
    }

}