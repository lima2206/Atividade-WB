import { Cliente } from "../model/cliente"
import CPF from "../model/cpf"
import { Empresa } from "../model/empresa"
import Produto from "../model/produto"
import RG from "../model/rg"
import Servico from "../model/servico"

export default class PreencherBanco {

    private empresa: Empresa

    constructor(empresa: Empresa){

        this.empresa = empresa

    }

    public preencher(): void{

        let prod1 = new Produto('Batom', 5)
        let prod2 = new Produto('Maquiagem', 13)
        let prod3 = new Produto('Lixas de Unha', 6)
        let prod4 = new Produto('Esmalte', 7)

        this.empresa.getProdutos().push(prod1, prod2, prod3, prod4)

        let serv1 = new Servico('Maquiagem', 18)
        let serv2 = new Servico('Massagem', 50)
        let serv3 = new Servico('Alisamento de Cabelo', 80)
        let serv4 = new Servico('Tratamento de Calvíce', 150)

        this.empresa.getServicos().push(serv1, serv2, serv3, serv4)

        let data = new Date()
        let listaRG: Array<RG> = []; listaRG.push(new RG('123', data))
        let cpf = new CPF('123456', data)

        let cl1 = new Cliente('Vitor', 'Lima', cpf, 0)
        cl1.setRG(listaRG)
        
        let cl2 = new Cliente('Isaque', 'Elis', cpf, 0)
        cl2.setRG(listaRG)
 
        let cl3 = new Cliente('Maria', 'Barbosa', cpf, 0)
        cl3.setRG(listaRG)

        let cl4 = new Cliente('Luana', 'Almeida', cpf, 0)
        cl4.setRG(listaRG)

        
        this.empresa.getClientes().push(cl1,cl2,cl3,cl4)
        


        
    }

}