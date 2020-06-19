import React from 'react';

import { FiArrowLeft, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  Fundo,
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
      <Fundo>
        <div>
          <p>CONHEÇA</p>
          <p>A</p>
          <p>NOSSA</p>
          <p>EQUIPE!</p>
        </div>
      </Fundo>
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
            <strong>Experiência:</strong>
3 anos
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
            <strong>Experiência: </strong>
3 anos
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
            <strong>Experiência: </strong> 1 ano
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
            <a href="tel:47999454227">
              <p>(47) 99945-4227</p>
            </a>
            <strong>
              <FiMapPin />
              Endereço:
            </strong>
            <a
              href="https://www.google.com.br/maps/place/Santo+Bigode/@-27.116164,-50.0010151,17z/data=!4m5!3m4!1s0x0:0x5456b3b13a32756!8m2!3d-27.1165672!4d-49.9991836?hl=pt-BR&authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localizacao Santo Bigode"
            >
              <p>1885, Rua Coronel Feddersen, Centro</p>
            </a>
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
                <td>08:15 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Quarta:</strong>
                </td>
                <td>08:15 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Quinta:</strong>
                </td>
                <td>08:15 - 12:00 | 13:15 - 19:30</td>
              </tr>
              <tr>
                <td>
                  <strong>Sexta:</strong>
                </td>
                <td>08:15 - 12:00 | 13:15 - 20:00</td>
              </tr>
              <tr>
                <td>
                  <strong>Sábado:</strong>
                </td>
                <td>08:15 - 12:00 | 13:15 - 16:00</td>
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
