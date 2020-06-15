import styled from 'styled-components';

import ImgFundo from '../../assets/fundo.png';

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
  height: 90px;
  width: 100%;

  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 980px;
    margin: auto;

    img {
      padding: 10px;
      border-radius: 4px;
    }

    nav {
      ul {
        display: flex;
        align-items: center;

        hr {

          width: 30px;
          height: 0px;
          border: 1px solid #ffffff;
          transform: rotate(-90deg);
        }

        li {
          list-style-type: none;

          a {
            text-decoration: none;
            color: #000;
            font-size: 2.5rem;
            font-weight: 300;
            transition: opacity 0.2s;

            }
          }

          a:hover {
            opacity: 40%;
          }
        }
      }
    }
  }

  @media (max-width: 800px){
          .one,
          .two,
          .three {
            background-color: #000;
            height: 5px;
            width: 100%;
            margin: 6px auto;

            transition-duration: 0.3s;
          }

          .menu-toggle {
            width: 40px;
            height: 30px;
            margin-right: 40px;
          }

          nav{
            display: none;
          }

          .menu-section.on {
            position: absolute;

            top: 0;
            left: 0;

            width: 100vw;
            height: 100vh;

            background-color: #f99000;
            z-index: 10;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          .menu-section.on nav{
            display: block;

            hr{
              display: none;
            }

            ul{
              text-align: center;
              display: block;
              li{
                a{
                  transition-duration: 0.5s;
                  font-size: 10rem;
                  font-weight: 300;
                  line-height: 20rem;
                  display: block;
                }
              }
            }
          }

          .menu-section.on .menu-toggle{
            position: absolute;
            right: 0;
            top: 15px;
          }

          .menu-section.on .menu-toggle .one{
            transform: rotate(45deg) translate(7px, 7px);
          }

          .menu-section.on .menu-toggle .two{
            opacity: 0;
          }

          .menu-section.on .menu-toggle .three{
            transform: rotate(-45deg) translate(8px, -9px);
          }
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
  background-image: url(${ImgFundo});
  background-position: center center;
  background-repeat: no-repeat;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    background: rgba(255, 255, 255, 0.35);
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
  margin-bottom: 10px;
  display: flex;
  background: rgba(196, 196, 196, 0.09);
  border-radius: 8px;
  padding: 30px;
  text-align: center;

  div.conteudo {
    margin-right: 30px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 3rem;
      line-height: 4.1rem;
    }

    hr {
      margin-top: 30px;
      width: 100%;
      border: 1px solid #ff9000;
      margin-bottom: 20px;
    }

    p {
      margin-top: 100px;
      font-style: normal;
      font-weight: 300;
      font-size: 2rem;
      line-height: 3rem;
      letter-spacing: 0.04em;
    }
  }

  div.imagem {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    img {
      margin-top: 10px;
      width: 100%;
    }
  }
`;

export const Ambiente = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  background: rgba(196, 196, 196, 0.09);
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

  hr {
    margin: 30px 0px 30px 0px;
    border: 1px solid #ff9000;
  }

  div.fundo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 300px;
      height: 200px;
      cursor: pointer;
      &:hover {
        height: 80%;
        width: 100%;
      }
    }
  }

  @media (max-width: 750px) {
    img {
      width: 100%;
    }
  }
`;

export const Localizacao = styled.div`
  width: 90%;
  max-width: 980px;
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  background: rgba(196, 196, 196, 0.09);
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

  hr {
    margin-top: 30px;
    border: 1px solid #ff9000;
    margin-bottom: 30px;
  }

  div.mapa {
    margin-top: 20px;
    position: relative;
    z-index: 0;
  }

  div.mapa,
  .leaflet-container {
    width: 100%;
    height: 400px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  a {
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    div.chegar {
      text-align: center;
      width: 30%;
      h3 {
        border-radius: 10px;
        font-weight: 500;
        transition: opacity 0.2s;
        background: rgba(196, 196, 196, 0.09);
        &:hover {
          opacity: 0.4;
        }
      }
    }
  }
`;

export const Instagram = styled.div`
  text-align: center;
  margin-bottom: 10px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.3rem;
    letter-spacing: 0.12em;
    margin-bottom: 10px;
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
    transition: opacity 0.2s;
    &:hover {
      opacity: 20%;
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
