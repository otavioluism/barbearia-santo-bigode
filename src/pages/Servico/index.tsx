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
      <Fundo>
        <div>
          <p>
            A barbearia Santo Bigode sempre proporciona trabalho com amor, para
            que seus serviços sempre sejam de qualidade aos seus clientes.
          </p>
        </div>
      </Fundo>
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
      <Contato>
        <h1>Contato</h1>
        <footer>
          <div className="contato">
            <strong>
              <FiPhone />
              Telefone:
            </strong>
            <p>(47) 99945-4227</p>
            <strong>
              <FiMapPin />
              Endereço:
            </strong>
            <p>1885, Rua Coronel Feddersen, Centro</p>
          </div>
          <div className="horario">
            <strong>
              <FiClock />
              Horário:
            </strong>
            <table>
              <tr>
                <td>
                  <strong>Terça:</strong>
                </td>
                <td>07:30 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Quarta:</strong>
                </td>
                <td>07:30 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Quinta:</strong>
                </td>
                <td>07:30 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Sexta:</strong>
                </td>
                <td>07:30 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Sábado:</strong>
                </td>
                <td>08:00 - 12:00 | 13:15 - 15:00</td>
              </tr>
            </table>
          </div>
        </footer>
        <p className="address">
          Feito com ❤ por
          <strong>
            <a
              href="https://www.instagram.com/otavioluism/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              Otávio Luis Martins
            </a>
          </strong>
        </p>
      </Contato>
    </Container>
  );
};

export default Servico;
