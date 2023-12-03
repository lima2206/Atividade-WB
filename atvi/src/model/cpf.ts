export default class CPF {
    private valor !: string
    private dataEmissão !: Date

    //método construtor
    constructor(valor: string, dataEmissão: Date) {
        this.valor = valor
        this.dataEmissão = dataEmissão
    }
    //getters
    public getValor(): string {
        return this.valor
    }
    public getDataEmissao(): Date {
        return this.dataEmissão
    }
}