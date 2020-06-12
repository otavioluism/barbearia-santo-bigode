import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Header = styled.div`
  position: fixed;
  z-index: 1;
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

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Capa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 720px) {
    img {
      width: 100%;
    }
  }
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

export const Barbeiro1 = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 30px;
  background: rgba(196, 196, 196, 0.09);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
      font-size: 3.5rem;
      line-height: 4.7rem;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 2.3rem;
      display: flex;
      align-items: center;
      strong {
        font-size: 2rem;
        margin-right: 5px;
      }
    }
  }

  div.redes {
    display: flex;
    align-items: center;
    margin-left: 30px;
    a {
      transition: opacity 0.2s;
      img {
        height: 60px;
        width: 40px;
      }
      &:hover {
        opacity: 20%;
      }
    }
  }
  @media (max-width: 620px) {
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
  }
`;

export const Barbeiro2 = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 30px;
  background: rgba(196, 196, 196, 0.09);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: transform 0.4s;

  &:hover {
    transform: translateX(-20%);
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
      font-size: 3.5rem;
      line-height: 4.7rem;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 2.3rem;
      display: flex;
      align-items: center;
      strong {
        font-size: 2rem;
        margin-right: 5px;
      }
    }
  }

  div.redes {
    display: flex;
    align-items: center;
    margin-left: 30px;
    a {
      transition: opacity 0.2s;
      img {
        height: 60px;
        width: 40px;
      }
      &:hover {
        opacity: 20%;
      }
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
  }
`;

export const Barbeiro3 = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 30px;
  background: rgba(196, 196, 196, 0.09);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
      font-size: 3.5rem;
      line-height: 4.7rem;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 2.3rem;
      display: flex;
      align-items: center;
      strong {
        font-size: 2rem;
        margin-right: 5px;
      }
    }
  }

  div.redes {
    display: flex;
    align-items: center;
    margin-left: 30px;
    a {
      transition: opacity 0.2s;
      img {
        height: 60px;
        width: 40px;
      }
      &:hover {
        opacity: 20%;
      }
    }
  }

  @media (max-width: 620px) {
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
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
  margin-bottom: 20px;

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
