/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type BarraNavegacaoProps = {
  tema: string;
  botoes: string[];
  seletorView: (valor: string, e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const BarraNavegacao: React.FC<BarraNavegacaoProps> = ({
  tema,
  botoes,
  seletorView,
}) => {
  const [listaBotoes, setListaBotoes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (botoes.length > 0) {
      const novaLista = botoes.map((valor) => (
        <li key={valor} className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={(e) => seletorView(valor, e)}
          >
            {valor}
          </a>
        </li>
      ));
      setListaBotoes(novaLista);
    }
  }, [botoes, seletorView]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="light"
        style={{
          backgroundColor: tema,
          marginBottom: 10,
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">WB</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{listaBotoes}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BarraNavegacao;
