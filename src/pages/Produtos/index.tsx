import React from 'react';

// para realizar SPA
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  Header,
  Logo,
  Caixa,
  Capa,
  Produto1,
  Contato,
} from './styles';

import logoImg from '../../assets/logo_barbearia.svg';
import capaImg from '../../assets/produtos.png';
import produto1Img from '../../assets/produto1.svg';
import imgInstagram from '../../assets/instagram.svg';

const Produtos: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h1>Produtos</h1>
      </Header>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>
      <Caixa>
        <h5>NOSSOS</h5>
        <h1>PRODUTOS</h1>
      </Caixa>
      <Capa>
        <img src={capaImg} alt="Foto da Capa" />
      </Capa>
      <Produto1>
        <img src={produto1Img} alt="Produto 1" />
        <div>
          <h4>ÓLEO DE BARBA</h4>
          <p>
            Utilizado para hidratação da barba afim de alinhar os fios e reparar
            as pontas.
          </p>
        </div>
        <a
          href="https://www.instagram.com/embaixadorcosmetics/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Cosmeticos Embaixador"
        >
          <img src={imgInstagram} alt="Imagem Instagram" />
        </a>
      </Produto1>
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

export default Produtos;
