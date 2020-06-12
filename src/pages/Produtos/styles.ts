import styled from 'styled-components';

import imgFundo from '../../assets/produtos.png';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Header = styled.div`
  position: fixed;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  height: 90px;
  width: 100vw;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-left: 50px;
    font-size: 3.5rem;
    line-height: 4.1rem;
    color: #000;
  }

  a {
    img {
      margin-left: 40%;
      border-radius: 4px;
    }
  }

  h1 {
    margin-right: 50px;
    color: #000;
  }
`;

export const Fundo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  background-image: url(${imgFundo});
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Caixa = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  padding: 20px;
  background: rgba(196, 196, 196, 0.11);
  border-radius: 5px;

  h5 {
    margin-left: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2.9rem;
    color: rgba(113, 108, 84, 0.77);
  }

  h1 {
    margin-left: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 4.7rem;
  }
`;

export const Barba = styled.h1`
  font-family: Poly;
  width: 90%;
  max-width: 980px;
  margin: auto;
  background: #b68240;
  margin-top: 50px;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 4.5rem;
  }
`;

export const Produto1 = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  justify-content: center;
  gap: 15px;

  div.produtos {
    max-width: 980px;
    background: rgba(196, 196, 196, 0.09);
    border-radius: 15px;
    height: 550px;
    padding: 15px;
    text-align: center;
    margin-bottom: 10px;
    transition: transform 0.4s;

    &:hover {
      transform: translateX(3%);
      background: rgba(255, 144, 0, 0.23);
    }

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 2rem;
      line-height: 4.7rem;
      margin-bottom: 15px;
      font-weight: bold;
    }

    img {
      margin-bottom: 15px;
      height: 200px;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.3rem;
      display: flex;
      align-items: center;
    }

    div.preco {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #c4c4c4;
      border-radius: 50px 0px;

      p {
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 3rem;
        line-height: 4rem;
        text-align: center;
        color: #000000;
      }
    }

    div.pedido {
      margin-top: 20px;
      background: #5dbd2d;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const Pagamento = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 10px;

  div.fundo {
    height: 50px;
    background: #f99000;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-family: Poly;
    }
  }

  img {
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Contato = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  div.endereco,
  div.contato,
  div.horario {
    width: 323px;
    height: 95px;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 15px;
    text-align: center;
    border-radius: 6px;
    font-style: normal;

    &:hover {
      background: rgba(255, 144, 0, 0.23);
    }

    h1 {
      color: #000;
      margin-top: 15px;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.3rem;
    }

    svg {
      margin-left: 5px;
    }

    p {
      margin-top: 18px;
      font-weight: normal;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }

  div.horario {
    p {
      margin-top: 5px;
    }
  }
`;

export const End = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    a {
      color: #ff9000;
      margin-left: 5px;
      text-decoration: none;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
