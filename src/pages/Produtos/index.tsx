import React from 'react';

import { FiArrowLeft, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

import {
  Container,
  Header,
  Fundo,
  Logo,
  Caixa,
  Barba,
  Produto1,
  Pagamento,
  Contato,
} from './styles';

import logoImg from '../../assets/logo_barbearia.svg';
import imgLogo from '../../assets/sb.svg';

import imgOleoBarba from '../../assets/oleo-barba.png';
import imgTurbodil from '../../assets/turbodil.png';
import imgGelBarbear from '../../assets/gel-barbear.png';
import imgEfeitoSeco from '../../assets/efeito-seco.png';
import imgEfeitoBrilho from '../../assets/efeito-brilho.png';
import imgPoModelador from '../../assets/po-modelador.png';
import imgLimyeBlack from '../../assets/limye-black.png';
import imgLimyeIncolor from '../../assets/limye-incolor.png';
import imgLimyeMatte from '../../assets/limye-matte.png';
import imgForma from '../../assets/formas.png';

const Produtos: React.FC = () => {
  return (
    <Container>
      <Header>
        <a href="/">
          <FiArrowLeft />
        </a>
        <a href="/">
          <img src={imgLogo} alt="Logo barbearia" />
        </a>
        <h1>Produtos</h1>
      </Header>
      <Fundo>
        <div>
          <p>
            Conheça os nossos produtos! <br />
{' '}
Role para baixo e escolha já o
            seu.
</p>
        </div>
      </Fundo>
      <Logo>
        <img src={logoImg} alt="Santo Bigode" />
      </Logo>
      <Caixa>
        <h5>NOSSOS</h5>
        <h1>PRODUTOS</h1>
      </Caixa>

      <Barba>
        <h1>BARBA</h1>
      </Barba>

      <Produto1>
        <div className="produtos">
          <h4>ÓLEO DE BARBA</h4>
          <img src={imgOleoBarba} alt="Produto 1" />
          <p>
            Óleo de barba utilizado para hidratação da barba, afim de alinhar os
            fios, reparar as pontas e proporcionar um aroma refrescante. 30ml
          </p>
          <div className="preco">
            <p>R$ 35,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar o produto Óleo de Barba!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
        <div className="produtos">
          <h4>TURBODIL</h4>
          <img src={imgTurbodil} alt="Produto 1" />
          <p>
            O Turbodil ajuda a revitalizar a raíz do cabelo e barba, normaliza o
            ciclo do folículo, prolongando a fase de crescimento dos fios. 100ml
          </p>
          <div className="preco">
            <p>R$ 35,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar o produto Turbodil!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
        <div className="produtos">
          <h4>GEL DE BARBEAR</h4>
          <img src={imgGelBarbear} alt="Produto 1" />
          <p>
            O gel suaviza a pele ao barbeamento, diminuindo a sensação de
            irritação. Devido a textura que traz um incrível deslizamento. 500ml
          </p>
          <div className="preco">
            <p>R$ 35,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar o produto Gel para Barbear!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
      </Produto1>

      <Barba>
        <h1>CABELO</h1>
      </Barba>

      <Produto1>
        <div className="produtos">
          <h4>POMADA EFEITO SECO</h4>
          <img src={imgEfeitoSeco} alt="Produto 1" />
          <p>
            A pomada efeito seco, fixa seu penteado de forma simples e rápida,
            deixando-o com um aspecto de seco por um longo tempo. 60g
          </p>
          <div className="preco">
            <p>R$ 15,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar a pomada com Efeito Seco!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
        <div className="produtos">
          <h4>POMADA EFEITO BRILHO</h4>
          <img src={imgEfeitoBrilho} alt="Produto 1" />
          <p>
            A pomada efeito brilho, fixa seu penteado de forma simples e rápida,
            deixando-o com um aspecto de molhado por um longo tempo. 60g
          </p>
          <div className="preco">
            <p>R$ 15,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar a pomada com Efeito Brilho!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
        <div className="produtos">
          <h4>PÓ MODELADOR</h4>
          <img src={imgPoModelador} alt="Produto 1" />
          <p>
            Com textura leve, seca e efeito matte, o pó modelador age
            instantaneamente para proporcionar os fios de cabelo intacto ao
            longo do dia. 5g
          </p>
          <div className="preco">
            <p>R$ 35,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar o produto Pó Modelador!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
      </Produto1>
      <Produto1>
        <div className="produtos">
          <h4>POMADA Limye Matte</h4>
          <img src={imgLimyeMatte} alt="Produto 1" />
          <p>
            A pomada efeito matte, fixa seu penteado de forma simples e rápida,
            deixando-o com um aspecto de seco por um longo tempo. 150g
          </p>
          <div className="preco">
            <p>R$ 25,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar a pomada Limye Matte!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
        <div className="produtos">
          <h4>POMADA Limye Black</h4>
          <img src={imgLimyeBlack} alt="Produto 1" />
          <p>
            A pomada efeito black, fixa seu penteado de forma simples e rápida,
            serve para disfarçar aqueles fiozinhos brancos da idade. 150g
          </p>
          <div className="preco">
            <p>R$ 25,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar a pomada Limye Black!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
        <div className="produtos">
          <h4>POMADA Limye Incolor</h4>
          <img src={imgLimyeIncolor} alt="Produto 1" />
          <p>
            A pomada efeito incolor, fixa seu penteado de forma simples e
            rápida, serve para modelar os fios com efeito seco natural. 150g
          </p>
          <div className="preco">
            <p>R$ 25,00</p>
          </div>
          <div className="pedido">
            <a
              href="https://api.whatsapp.com/send?phone=5547999454227&text= Olá, gostaria de encomendar a pomada Limye Incolor!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Cosmeticos Embaixador"
            >
              <h4>PEÇA O SEU</h4>
            </a>
          </div>
        </div>
      </Produto1>
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

export default Produtos;
