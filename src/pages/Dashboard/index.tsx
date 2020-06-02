import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo_barbearia.svg';
import capaImg from '../../assets/barbearia_tres.jpeg';
import barbeiroImg from '../../assets/barbeiro.svg';
import imgInstagram from '../../assets/instagram.svg';

import {
  Container,
  Header,
  Logo,
  Capa,
  Caixa,
  Instagram,
  Contato,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <strong>Bem Vindo!</strong>
        <nav>
          <ul>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <hr />
            <li>
              <Link to="/barbers">Barbeiros</Link>
            </li>
            <hr />
            <li>
              <Link to="/products">Produtos</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>
      <Capa>
        <img src={capaImg} alt="Foto da Capa" />
      </Capa>
      <Caixa>
        <div className="conteudo">
          <h1>SOMOS BARBEIROS PROFISSIONAIS</h1>
          <hr />
          <p>
            Nosso salão oferece uma equipe formada por especialistas com o
            objetivo de proporcionar experiências inovadoras em cortes de cabelo
            e barba buscando a melhor estética. A qualidade de nossos
            profissionais é determinada pela formação e anos de experiência.
          </p>
        </div>
        <div className="imagem">
          <img src={barbeiroImg} alt="Barbeiro" />
        </div>
      </Caixa>
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
      </Instagram>
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

export default Dashboard;
