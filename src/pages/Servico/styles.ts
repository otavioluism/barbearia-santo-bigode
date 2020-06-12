import styled from 'styled-components';

import imgFundo from '../../assets/fundo-services.png';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  height: 90px;
  width: 100vw;
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
  margin-bottom: 30px;
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

export const TabelaPreco = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 30px;
  div.tabelapreco {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 500px));
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;

    div.cabelo {
      background: rgba(196, 196, 196, 0.08);
      border-radius: 12px;
      padding: 10px;

      div.titulo {
        background: #b68240;
        border-radius: 8px;
        height: 91px;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
          font-style: normal;
          font-size: 3rem;
          line-height: 3.5rem;
        }
      }

      div.one {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;

        div.corte {
          background: rgba(255, 144, 0, 0.11);
          border-radius: 30px;
          width: 230px;
          padding: 0 30px 0 30px;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 2rem;
            line-height: 3.5rem;
            text-align: center;
          }
        }

        div.preco {
          background: rgba(255, 144, 0, 0.11);
          border-radius: 30px 0px;
          padding: 0 40px 0 40px;
          margin-left: 20px;
          width: 160px;
          text-align: center;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 2rem;
            line-height: 3.5rem;
          }
        }
      }
    }
  }
`;

export const Pagamento = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
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
