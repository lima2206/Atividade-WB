import { useEffect, useState } from "react"

import { ListagemClientes } from "./listagemClientes"
import { CadastroCliente } from "./cadastroCliente"
import { DeleteCliente } from "./deleteCliente"
import { AtualizacaoCliente } from "./atualizacaoCliente"
import { DadosCliente } from "./dadosCliente"

import Empresa from "../modelos/empresa"
import { fetchClientesData } from "../servicos/clientes"
import { ClienteInterface } from "../interfaces/cliente"
import BarraNavegacao from "./barraNavegacao"


export const Roteador = () => {
    const [clientes, setClientes] = useState(Array<ClienteInterface>())
    const [tela, setTela] = useState("Clientes")
    const [selectedCliente, setSelectedCliente] = useState<ClienteInterface | undefined>(undefined)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchClientesData()
            setClientes(data)
        }
        fetchData()
    }, [])

    const [empresa] = useState(new Empresa())

    const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
        evento.preventDefault()
        setTela(novaTela)
        resetState()
    }
    const resetState = () => {
        setSelectedCliente(undefined)

    }
    const handleClienteSelect = (cliente: ClienteInterface) => {
        setSelectedCliente(cliente)
        setTela("DadosCliente")
    }


    const tema = "#f5da45"
    const barraNavegacao = (<BarraNavegacao seletorView={selecionarView} tema={tema} botoes={['Clientes', 'Cadastrar', 'Deletar', 'Atualizar']} />)

    if (tela === "Clientes") {
        return (
            <>
                {barraNavegacao}
                <ListagemClientes clientes={clientes} onClienteSelect={handleClienteSelect} empresa={empresa} />
            </>
        )
    } else if (tela === 'DadosCliente' && selectedCliente?.id) {
        return (
            <>
                {barraNavegacao}

                <DadosCliente clienteID={selectedCliente.id} />
            </>
        )
    } else if (tela === 'Deletar') {
        return (
            <>
                {barraNavegacao}

                <DeleteCliente clientes={clientes} setClientes={setClientes} />
            </>
        )
    } else if (tela === 'Cadastrar') {
        return (
            <>
                {barraNavegacao}

                <CadastroCliente tema={tema} clientes={clientes} setClientes={setClientes}/>
            </>
        )
    } else if (tela === 'Atualizar') {
        return (
            <>

                {barraNavegacao}
                <AtualizacaoCliente clientes={clientes} setClientes={setClientes} />
            </>
        )
    } else {
        return (
            <>
                {barraNavegacao}

                <ListagemClientes clientes={clientes} onClienteSelect={handleClienteSelect} empresa={empresa} />
            </>
        )
    }


}   