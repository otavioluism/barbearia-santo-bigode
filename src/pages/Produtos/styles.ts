import styled from 'styled-components';

import imgFundo from '../../assets/produtos.jpeg';

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
    margin-left: 60px;
    font-size: 3.5rem;
    line-height: 4.1rem;
    color: #000;
  }

  a {
    img {
      border-radius: 4px;
    }
  }

  h1 {
    margin-right: 50px;
    font-weight: 300;
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
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    p {
      text-align: center;
      color: #000;
      font-size: 4rem;
      font-weight: 300;
    }
  }
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
    border-radius: 15px
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
      font-weight: 300;
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
  width: 100%;
  margin: auto;
  margin-top: 10px;
  background: #f99000;
  padding: 20px;

  h1 {
    text-align: center;
    color: #000;
  }

  footer {
    width: 90%;
    max-width: 980px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.contato {
      margin-top: 20px;
      margin-bottom: 10px;

      strong {
        color: #000;
        svg {
          margin-right: 5px;
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        transition: opacity 0.2s;

        p {
          margin-top: 5px;
          margin-bottom: 2rem;
          &:hover {
            opacity: 50%;
          }
        }
      }
    }

    div.horario {
      strong {
        color: #000;
        margin-right: 10px;
        svg {
          margin-right: 5px;
        }
      }

      p {
        margin-top: 5px;
      }
    }
  }
  p.address {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #000;
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
