import CPF from "./cpf"
import RG from "./rg"
import Telefone from "./telefone"
import Servico from "./servico"
import Produto from "./produto"


export class Cliente {
    public nome: string
    public nomeSocial: string
    //0 = home, 1 = muié
    public sexo: number
    private cpf: CPF
    private dataCadastro: Date
    private rgs: Array<RG>
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>


    constructor(nome: string, nomeSocial: string, cpf: CPF, sexo: number) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.sexo = sexo

        this.dataCadastro = new Date()
        this.rgs = []
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }



    // Getters
    public getCpf(): CPF {
        return this.cpf
    }
    public getRgs(): Array<RG> {
        return this.rgs
    }
    public getDataCadastro(): Date {
        return this.dataCadastro
    }
    public getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public getServiçosConsumidos(): Array<Servico> {
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