import styled from "styled-components";
import PainelPhoto from "../../assets/imgs/painel.png";
import { Container } from "../container/index.jsx";

export const Painel = styled.div`
  width: 100%;
  height: 26rem;
  background-image: url(${PainelPhoto});
  background-size: cover;
  background-repeat: no-repeat;

  img {
    display: none;
  }

  @media (max-width: 900px) {
    background-image: none;
    background-size: contain;

    img {
      display: block;
      width: 100%;
    }
  }
`;

export const ContainerMain = styled(Container)``;

export const WrapperCarrousel = styled.div`
  width: 80%;
  height: 350px;
  margin-top: 2.8125rem;
  margin-left: -20px;
`;

export const SingleSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 340px;

  img {
    border: 2px solid #d5d5d5;
  }

  h4 {
    margin-top: 15px;
    font-style: italic;
  }
  p {
    margin-top: 6px;
  }
`;
