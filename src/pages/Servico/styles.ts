import styled from 'styled-components';

export const Container = styled.div`
  width: 980px;
  margin: auto;
`;

export const Header = styled.header`
  background: #ff9000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;

  a {
    margin-left: 50px;
    font-size: 35px;
    line-height: 41px;
    color: #fff;
  }

  h1 {
    margin-right: 50px;
  }
`;

export const Logo = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Caixa = styled.div`
  padding: 20px;
  background: rgba(196, 196, 196, 0.11);
  border-radius: 5px;
  margin-bottom: 30px;

  h5 {
    margin-left: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    color: rgba(113, 108, 84, 0.77);
  }

  h1 {
    margin-left: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
  }
`;

export const TabelaPreco = styled.div`
  div.tabelapreco {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    div.cabelo {
      background: rgba(196, 196, 196, 0.11);
      border-radius: 12px;
      padding: 10px;

      div.titulo {
        background: #ff9000;
        border-radius: 8px;
        height: 91px;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
          font-style: normal;
          font-size: 30px;
          line-height: 35px;
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
          padding: 0 30px 0 30px;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 35px;
          }
        }

        div.preco {
          background: rgba(255, 144, 0, 0.11);
          border-radius: 30px 0px;
          padding: 0 40px 0 40px;
          margin-left: 20px;

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 35px;
          }
        }
      }
    }
  }
`;

export const Contato = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  div.endereco,
  div.contato,
  div.horario {
    width: 323px;
    height: 95px;
    background: rgba(255, 144, 0, 0.11);
    margin: 0 15px;
    text-align: center;
    border-radius: 6px;
    font-style: normal;

    &:hover {
      background: rgba(255, 144, 0, 0.23);
    }

    h1 {
      margin-top: 15px;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
    }

    p {
      margin-top: 18px;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
    }
  }

  div.horario {
    p {
      margin-top: 5px;
    }
  }
`;
