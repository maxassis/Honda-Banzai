import styled from "styled-components";
import { Container } from "../container/index.jsx";
import media from "styled-media-query";

export const ContainerMain = styled(Container)`
  padding-bottom: 3.3125rem;

  h2 {
    font-size: 2.125rem;
    font-weight: 100;
    font-style: italic;
    margin-left: -1.25rem;
  }

  p {
    margin-top: 2.1875rem;
    margin-left: -1.25rem;
    width: 100%;
    max-width: 52.6875rem;
  }

  ${media.lessThan("large")`
    h2{
      margin-left: 0;
    }
  `}

  @media (max-width: 900px) {
    padding-bottom: 1.875rem;

    h2 {
      margin-left: 0;
      text-align: center;
      height: 3.6875rem;
    }

    p {
      margin-left: 0;
      text-align: center;
      font-size: 1.125rem;
      height: 8.9375rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const DivPhotos = styled.div`
  display: flex;
  margin-top: 1.875rem;
  gap: 2.5rem;
  margin-left: -1.25rem;

  ${media.lessThan("large")`
    margin-left: 0;
  `}

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
      margin-top: 0.875rem;
    }
  }
`;
