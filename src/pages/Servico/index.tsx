import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo_barbearia.svg';

import { Container, Header, Logo, Caixa, TabelaPreco, Contato } from './styles';

const Servico: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h1>Serviços</h1>
      </Header>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>
      <Caixa>
        <h5>TABELA</h5>
        <h1>PREÇO</h1>
      </Caixa>
      <TabelaPreco>
        <div className="tabelapreco">
          <div className="cabelo">
            <div className="titulo">
              <h1> BARBA </h1>
            </div>
            <div className="one">
              <div className="corte">
                <p>Desenho</p>
              </div>
              <div className="preco">
                <p>R$ 15,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Tesoura</p>
              </div>
              <div className="preco">
                <p>R$ 10,00</p>
              </div>
            </div>
          </div>

          <div className="cabelo">
            <div className="titulo">
              <h1> CABELO </h1>
            </div>
            <div className="one">
              <div className="corte">
                <p>Normal</p>
              </div>
              <div className="preco">
                <p>R$ 22,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Simples</p>
              </div>
              <div className="preco">
                <p>R$ 20,00</p>
              </div>
            </div>
          </div>
        </div>
      </TabelaPreco>
      <hr className="lineUP" />
      <Contato>
        <div className="endereco">
          <h1>ENDEREÇO</h1>
          <p>999, Rua, Bairro</p>
        </div>
        <hr />
        <div className="contato">
          <h1>ENTRE EM CONTATO</h1>
          <p>+(99) 9 9999-9999</p>
        </div>
        <hr />
        <div className="horario">
          <h1>HORÁRIO</h1>
          <p>Seg - Sex: 07:30 ao 12:00 - 13:15 à 19:30</p>
          <p>Sáb: 08:00 ao 12:00 - 13:15 às 15:00</p>
        </div>
      </Contato>
    </Container>
  );
};

export default Servico;
