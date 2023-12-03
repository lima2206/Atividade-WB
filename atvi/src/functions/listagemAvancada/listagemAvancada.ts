import Input from "../../input/input";
import { Empresa } from "../../model/empresa";
import ListagemA1 from "./listagemA1";
import ListagemA2 from "./listagemA2";
import ListagemA3 from "./listagemA3";
import ListagemA4 from "./listagemA4";
import ListagemA5 from "./listagemA5";
import ListagemA6 from "./listagemA6";

// Classe para listagem específica requerida pelo cliente
export default class ListagemAvancada{
    
    private empresa: Empresa
    constructor(empresa: Empresa){
        
        this.empresa = empresa
    }

    listar(){
        let Loop = true
        while(Loop){
            console.log('=============================')
            console.log('Listagem Avançada de Clientes')
            console.log('=============================')
            console.log(`Opções: `)
            console.log(`1 - 10 Clientes que mais consumiram Produtos ou Serviços em quantidade`)
            console.log(`2 - Todos os Clientes por Gênero`)
            console.log(`3 - Serviços ou Produtos mais consumidos`)
            console.log(`4 - Serviços ou Produtos mais consumidos por Gênero`)
            console.log(`5 - 10 Clientes que menos consumiram Produtos ou Serviços em quantidade`)
            console.log(`6 - 5 Clientes que mais consumiram Produtos ou Serviços em valor`)
            console.log(`0 - Sair`)
            console.log('=============================')
            let escolha = new Input().receberNumero('Digite sua Escolha: ')
        
            switch(escolha){

                case 1:
                    let listar1 = new ListagemA1(this.empresa.getClientes())
                    listar1.listar()
                    break

                case 2:
                    let listar2 = new ListagemA2(this.empresa.getClientes())
                    listar2.listar()
                    break

                case 3:
                    let listar3 = new ListagemA3(this.empresa.getClientes())
                    listar3.listar()
                    break

                case 4:
                    let listar4 = new ListagemA4(this.empresa.getClientes())
                    listar4.listar()
                    break

                case 5:
                    let listar5 = new ListagemA5(this.empresa.getClientes())
                    listar5.listar()
                    break

                case 6:
                    let listar6 = new ListagemA6(this.empresa.getClientes())
                    listar6.listar()

                    break

                //Sair
                case 0:
                    
                    Loop = false
                    break


                default:
                    console.log(`\nOperação Inválida!\n`)
            }
        }
    }
}

