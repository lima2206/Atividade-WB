import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastro from "./FormularioCadastro";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServiço";
import ListaAvancada from "./listaAvançada";

const Roteador: React.FC = () => {
  const [tela, setTela] = useState<string>("Clientes");

  const selecionarView = (novaTela: string, evento: React.MouseEvent) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  const barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#f5da45"
      botoes={["Clientes", "Produtos", "Serviços", "Cadastros", 'Listagem Avançada']}
    />
  );

  switch (tela) {
    case "Clientes":
      return (
        <>
          {barraNavegacao}
          <ListaCliente />
        </>
      );
    case "Produtos":
      return (
        <>
          {barraNavegacao}
          <ListaProduto />
        </>
      );
    case "Serviços":
      return (
        <>
          {barraNavegacao}
          <ListaServico />
        </>
      );
    case "Cadastros":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastro />
        </>
      );
    case "Listagem Avançada":
      return (
        <>
          {barraNavegacao}
          <ListaAvancada />
        </>
      );
    default:
      return null;
  }
};

export default Roteador;
