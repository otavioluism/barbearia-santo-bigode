import React from 'react';

import { FiArrowLeft, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

import logoImg from '../../assets/logo_barbearia.svg';
import imgLogo from '../../assets/sb.svg';
import imgForma from '../../assets/formas.png';

import {
  Container,
  Header,
  Fundo,
  Logo,
  Caixa,
  TabelaPreco,
  Pagamento,
  Contato,
  End,
} from './styles';

const Servico: React.FC = () => {
  return (
    <Container>
      <Header>
        <a href="/">
          <FiArrowLeft />
        </a>
        <a href="/">
          <img src={imgLogo} alt="Logo barbearia" />
        </a>
        <h1>Serviços</h1>
      </Header>
      <Fundo />
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
              <h1> CABELO </h1>
            </div>
            <div className="one">
              <div className="corte">
                <p>Social</p>
              </div>
              <div className="preco">
                <p>R$ 20,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Degradê</p>
              </div>
              <div className="preco">
                <p>R$ 20,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Pézinho</p>
              </div>
              <div className="preco">
                <p>R$ 5,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Sobrancelha</p>
              </div>
              <div className="preco">
                <p>R$ 5,00</p>
              </div>
            </div>
          </div>

          <div className="cabelo">
            <div className="titulo">
              <h1> BARBA </h1>
            </div>
            <div className="one">
              <div className="corte">
                <p>Completa</p>
              </div>
              <div className="preco">
                <p>R$ 20,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Desenho Máquina</p>
              </div>
              <div className="preco">
                <p>R$ 10,00</p>
              </div>
            </div>
            <div className="one">
              <div className="corte">
                <p>Aparar</p>
              </div>
              <div className="preco">
                <p>R$ 5,00</p>
              </div>
            </div>
          </div>
        </div>
      </TabelaPreco>
      <Caixa>
        <h5>CURSO</h5>
        <h1>BARBEIRO PROFISSIONAL</h1>
      </Caixa>
      <Pagamento>
        <div className="fundo">
          <h3>FORMAS DE PAGAMENTO</h3>
        </div>
        <img src={imgForma} alt="Formas de Pagamento" />
      </Pagamento>
      <hr className="lineUP" />
      <Contato>
        <div className="endereco">
          <h1>
            ENDEREÇO
            <FiMapPin />
          </h1>
          <p>1885, Rua Coronel Feddersen, Centro</p>
        </div>
        <hr />
        <div className="contato">
          <h1>
            ENTRE EM CONTATO
            <FiPhone />
          </h1>
          <p>(47) 99945-4227</p>
        </div>
        <hr />
        <div className="horario">
          <h1>
            HORÁRIO
            <FiClock />
          </h1>
          <p>Seg - Sex: 07:30 - 12:00 | 13:15 - 19:30</p>
          <p>Sáb: 08:00 - 12:00 | 13:15 - 15:00</p>
        </div>
      </Contato>
      <hr />
      <End>
        <p>
          Feito com ❤️ por
          <a
            href="https://www.instagram.com/otavioluism/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            Otávio Luis Martins
          </a>
        </p>
      </End>
    </Container>
  );
};

export default Servico;
