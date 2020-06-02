import styled from 'styled-components';

export const Container = styled.div`
  width: 980px;
  margin: auto;
`;

export const Header = styled.div`
  background: #ff9000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;

  strong {
    margin: 0 80px;
    font-size: 35px;
    line-height: 41px;
  }

  nav {
    margin-right: 50px;
    ul {
      display: flex;
      align-items: center;

      hr {
        margin-right: 30px;
        width: 30px;
        height: 0px;
        border: 1px solid #ffffff;
        transform: rotate(-90deg);
      }

      li {
        margin-right: 30px;
        list-style-type: none;

        a {
          text-decoration: none;
          color: #fff;
          font-size: 20px;
          font-weight: normal;
          transition: opacity 0.2s;
        }

        a:hover {
          opacity: 40%;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Capa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Caixa = styled.div`
  display: flex;
  background: rgba(196, 196, 196, 0.11);
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 15px;

  div.conteudo {
    margin-right: 30px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 41px;
    }

    hr {
      margin-top: 30px;
      width: 123px;
      border: 2px solid #ff9000;
      margin-bottom: 30px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.04em;
    }
  }

  div.imagem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Instagram = styled.div`
  text-align: center;
  margin-bottom: 15px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.12em;
    margin-bottom: 10px;
  }
  img{
    transition: opacity 0.2s;
      &:hover{
    opacity: 20%;
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
