import React from 'react';

import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

import { Map, TileLayer, Marker } from 'react-leaflet';

import logoImg from '../../assets/logo_barbearia.svg';

import poloImg from '../../assets/polo_barber.gif';
import imgInstagram from '../../assets/instagram.svg';
import imgFacebook from '../../assets/facebook.svg';
import imgLogo from '../../assets/sb.svg';
import imgBar from '../../assets/ambiente.png';

import {
  Container,
  Header,
  Fundo,
  Logo,
  Caixa,
  Instagram,
  Contato,
  Localizacao,
  Ambiente,
} from './styles';

const Dashboard: React.FC = () => {
  let show = true;
  const data = new Date();

  async function handleMenu(): Promise<void> {
    const showMenu = document.querySelector('.menu-section');
    if (showMenu) {
      showMenu.classList.toggle('on');
      document.body.style.overflow = show ? 'hidden' : 'initial';
      show = !show;
    }
  }

  return (
    <Container>
      <Header>
        <div className="container">
          <a href="/">
            <img src={imgLogo} alt="Logo barbearia" />
          </a>
          <div className="menu-section">
            <div className="menu-toggle" onClick={handleMenu}>
              <div className="one" />
              <div className="two" />
              <div className="three" />
            </div>

            <nav>
              <ul>
                <li>
                  <a href="/services">Serviços</a>
                </li>
                <hr />
                <li>
                  <a href="/barbers">Barbeiros</a>
                </li>
                <hr />
                <li>
                  <a href="/products">Produtos</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Header>
      <Fundo>
        <div>
          <p>
            Nossa missão é proporcionar aos homens ótimos serviços de barbearia,
            num ambiente relaxante, com opções de diversão, onde novos amigos
            são feitos e antigas amizades são fortalecidas.
          </p>
        </div>
      </Fundo>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>

      <Caixa>
        <div className="conteudo">
          <h1>AMIGOS E CLIENTES!</h1>
          <hr />
          <p>
            Bem-vindo ao mais novo ambiente desenvolvido para você cliente.
            Agora você poderá acessar de qualquer lugar a nossa plataforma web e
            conferir nosso trabalho, juntamente com nossos preços, produtos e
            também o perfil de cada barbeiro.
          </p>
          <p className="hora">
            {`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}
          </p>
        </div>
        <div className="imagem">
          <img src={poloImg} alt="Barbeiro" />
        </div>
      </Caixa>
      <Ambiente>
        <h5>NOSSO</h5>
        <h1>AMBIENTE</h1>
        <hr />
        <div className="fundo">
          <img src={imgBar} alt="Imagem do ambiente" />
        </div>
      </Ambiente>
      <Localizacao>
        <h5>ONDE</h5>
        <h1>ESTAMOS</h1>
        <hr />
        <div className="mapa">
          <Map center={[-27.1161, -49.99819]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-27.1161, -49.99819]} />
          </Map>
        </div>
        <a
          href="https://www.google.com.br/maps/place/Santo+Bigode/@-27.116164,-50.0010151,17z/data=!4m5!3m4!1s0x0:0x5456b3b13a32756!8m2!3d-27.1165672!4d-49.9991836?hl=pt-BR&authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mapeamento"
        >
          <div className="chegar">
            <h3>COMO CHEGAR</h3>
          </div>
        </a>
      </Localizacao>

      <Instagram>
        <h1>ACESSE</h1>
        <a
          href="https://www.instagram.com/barbearia_santobigode/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Cosmeticos Embaixador"
        >
          <img src={imgInstagram} alt="Imagem Instagram" />
        </a>
        <a
          href="https://www.facebook.com/barbSantoBigode/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Cosmeticos Embaixador"
        >
          <img src={imgFacebook} alt="Imagem Facebook" />
        </a>
      </Instagram>
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

export default Dashboard;
