import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Logo,
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

const Barbeiros: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <h1>Barbeiros</h1>
      </Header>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>
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
            <strong>Experiência: </strong> 3 anos
          </p>
        </div>
        <a
          href="https://www.instagram.com/barber_bola98/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Cosmeticos Embaixador"
        >
          <img src={imgInstagram} alt="Imagem Instagram" />
        </a>
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
        <a
          href="https://www.instagram.com/scheferwelinton/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Cosmeticos Embaixador"
        >
          <img src={imgInstagram} alt="Imagem Instagram" />
        </a>
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
        <a
          href="https://www.instagram.com/diego_menegildo/?hl=pt-br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Cosmeticos Embaixador"
        >
          <img src={imgInstagram} alt="Imagem Instagram" />
        </a>
      </Barbeiro3>
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

export default Barbeiros;
