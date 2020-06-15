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
  async function handleMenu(): Promise<void> {
    const showMenu = document.querySelector('.menu-section');
    if (showMenu) {
      console.log(showMenu);
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
      <Fundo />
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>

      <Caixa>
        <div className="conteudo">
          <h1>AMIGOS E CLIENTES!</h1>
          <hr />
          <p>
            Bem vindo ao mais novo ambiente desenvolvido para você cliente,
            agora você poderá acessar de qualquer lugar a nossa plataforma web e
            conferir nosso trabalho juntamente com nossos preços, produtos e
            também o perfil de cada barbeiro.
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
          href="https://wego.here.com/directions/mix//Barbearia-Santo-Bigode,-Rua-Coronel-Feddersen,-1727,-Tai%C3%B3,-Tai%C3%B3-SC,-89190-000:e-eyJuYW1lIjoiQmFyYmVhcmlhIFNhbnRvIEJpZ29kZSIsImFkZHJlc3MiOiJSdWEgQ29yb25lbCBGZWRkZXJzZW4sIFRhaVx1MDBmMyAtIFNDLCA4OTE5MC0wMDAsIEJyYXNpbCwgVGFpXHUwMGYzIiwibGF0aXR1ZGUiOi0yNy4xMTU5MDI5NDA1NiwibG9uZ2l0dWRlIjotNDkuOTk4MjQyODU1MDcyLCJwcm92aWRlck5hbWUiOiJmYWNlYm9vayIsInByb3ZpZGVySWQiOjEwMDgyMjk2MTYxNjU1Mn0=?map=-27.1159,-49.99824,15,normal&fb_locale=pt_BR"
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

export default Dashboard;
