import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ContainerMain = styled(Container)`
  padding-bottom: 53px;

  h2 {
    font-size: 2.125rem;
    font-weight: 100;
    font-style: italic;
    margin-left: -20px;
  }

  p {
    margin-top: 2.1875rem;
    margin-left: -20px;
    width: 100%;
    max-width: 843px;
  }

  @media (max-width: 900px) {
    padding-bottom: 30px;

    h2 {
      margin-left: 0;
      text-align: center;
      height: 59px;
    }

    p {
      margin-left: 0;
      text-align: center;
      font-size: 18px;
      height: 143px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }
  }
`;

export const DivPhotos = styled.div`
  display: flex;
  margin-top: 1.875rem;
  gap: 40px;
  margin-left: -20px;

  @media (max-width: 900px) {
    margin-left: none;
    margin-left: 0px;
  }
`;

export const Column = styled.div`
  img {
    border: 0.0625rem solid #d5d5d5;
    margin-top: 0.3125rem;
  }

  img:nth-child(1) {
    margin-top: 0px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const WrapperCars = styled.div`
  width: 100%;
  max-width: 42.5rem;
  height: 13.25rem;

  img {
    margin-top: 3.625rem;
  }

  @media (max-width: 900px) {
    height: auto;
    margin: 0 auto;

    img {
      margin-top: 14px;
    }
  }
`;
