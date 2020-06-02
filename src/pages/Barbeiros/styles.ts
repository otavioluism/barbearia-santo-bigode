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

export const Barbeiro1 = styled.div`
  background: rgba(255, 144, 0, 0.11);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px;
  max-width: 70%;
  margin-bottom: 30px;
  transition: transform 0.4s;

  &:hover {
    transform: translateX(20%);
    background: rgba(255, 144, 0, 0.23);
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 50px;
  }

  div {
    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 47px;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      strong {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }

  a {
    margin-left: 80px;
    transition: opacity 0.2s;
    img {
      height: 60px;
      width: 60px;
    }
    &:hover {
      opacity: 20%;
    }
  }
`;

export const Barbeiro2 = styled.div`
  background: rgba(255, 144, 0, 0.11);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px;
  max-width: 70%;
  margin: 0px 0px 30px 150px;
  transition: transform 0.4s;

  &:hover {
    transform: translateX(20%);
    background: rgba(255, 144, 0, 0.23);
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 50px;
  }

  div {
    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 47px;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      strong {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }

  a {
    margin-left: 80px;
    transition: opacity 0.2s;
    img {
      height: 60px;
      width: 60px;
    }
    &:hover {
      opacity: 20%;
    }
  }
`;

export const Barbeiro3 = styled.div`
  background: rgba(255, 144, 0, 0.11);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px;
  max-width: 67%;
  margin: 0px 0px 30px 300px;
  transition: transform 0.4s;

  &:hover {
    transform: translateX(20%);
    background: rgba(255, 144, 0, 0.23);
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 50px;
  }

  div {
    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 35px;
      line-height: 47px;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;
      strong {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }

  a {
    margin-left: 80px;
    transition: opacity 0.2s;
    img {
      height: 60px;
      width: 60px;
    }
    &:hover {
      opacity: 20%;
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
