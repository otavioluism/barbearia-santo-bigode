import React from 'react';

import { FiArrowLeft, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  Logo,
  Capa,
  Caixa,
  Barbeiro1,
  Barbeiro2,
  Barbeiro3,
  Contato,
} from './styles';

import logoImg from '../../assets/logo_barbearia.svg';
import pabloImg from '../../assets/pablo.png';
import welintonImg from '../../assets/welinton.png';
import diegoImg from '../../assets/diego.png';
import imgInstagram from '../../assets/instagram.svg';
import imgLogo from '../../assets/sb.svg';
import imgWhatsapp from '../../assets/whatsapp.svg';
import capaImg from '../../assets/barbearia_tres.jpeg';

const Barbeiros: React.FC = () => {
  return (
    <Container>
      <Header>
        <a href="/">
          <FiArrowLeft />
        </a>
        <a href="/">
          <img src={imgLogo} alt="Logo barbearia" />
        </a>
        <h1>Barbeiros</h1>
      </Header>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>
      <Capa>
        <img src={capaImg} alt="Foto da Capa" />
      </Capa>
      <Caixa>
        <h5>NOSSA</h5>
        <h1>EQUIPE</h1>
      </Caixa>
      <Barbeiro1>
        <img src={pabloImg} alt="Pablo Wetzel" />
        <div>
          <h4>Pablo H. Wetzel</h4>
          <p>
            <strong>Profissão: </strong>
            Barbeiro e Proprietário
          </p>
          <p>
            <strong>Experiência:</strong>3 anos
          </p>
        </div>
        <div className="redes">
          <a
            href="https://www.instagram.com/barber_bola98/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            <img src={imgInstagram} alt="Imagem Instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de me informar sobre a Barbearia Santo Bigode!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            <img src={imgWhatsapp} alt="Imagem Whatsapp" />
          </a>
        </div>
      </Barbeiro1>
      <Barbeiro2>
        <img src={welintonImg} alt="Pablo Wetzel" />
        <div>
          <h4>Welinton Schefer</h4>
          <p>
            <strong>Profissão: </strong>
            Barbeiro e Proprietário
          </p>
          <p>
            <strong>Experiência: </strong>3 anos
          </p>
        </div>
        <div className="redes">
          <a
            href="https://www.instagram.com/scheferwelinton/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            <img src={imgInstagram} alt="Imagem Instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5547991084972&text= Olá, gostaria de me informar sobre a Barbearia Santo Bigode!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            <img src={imgWhatsapp} alt="Imagem Whatsapp" />
          </a>
        </div>
      </Barbeiro2>
      <Barbeiro3>
        <img src={diegoImg} alt="Pablo Wetzel" />
        <div>
          <h4>Diego Menegildo</h4>
          <p>
            <strong>Profissão: </strong>
            Barbeiro
          </p>
          <p>
            <strong>Experiência: </strong>
{' '}
1 ano
</p>
        </div>
        <div className="redes">
          <a
            href="https://www.instagram.com/diego_menegildo/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            <img src={imgInstagram} alt="Imagem Instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5547996846395&text= Olá, gostaria de me informar sobre a Barbearia Santo Bigode!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Cosmeticos Embaixador"
          >
            <img src={imgWhatsapp} alt="Imagem Whatsapp" />
          </a>
        </div>
      </Barbeiro3>
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

export default Barbeiros;
