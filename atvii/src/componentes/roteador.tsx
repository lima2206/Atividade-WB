import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastro from "./FormularioCadastro";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServiço";
import ListaAvancada from "./listaAvançada";

type state = {
  tela: string;
};

export default class Roteador extends Component<{}, state> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Clientes",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: Event) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema="#f5da45"
        botoes={["Clientes", "Produtos", "Serviços", "Cadastros", 'Listagem Avançada']}
      />
    );

    switch (this.state.tela) {
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
    }
  }
}
