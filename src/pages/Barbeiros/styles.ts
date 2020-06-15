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
  margin-bottom: 10px;
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
    img {
      display: flex;
      justify-content: center;
    }

    div {
      margin-left: 40px;
    }
  }
`;

export const Barbeiro2 = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 10px;
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
    img {
      display: flex;
      justify-content: center;
    }
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
    img {
      display: flex;
      justify-content: center;
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

      p {
        margin-top: 5px;
        margin-bottom: 2rem;
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
