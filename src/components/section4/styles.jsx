import styled from "styled-components";
import { Container } from "../container/index.jsx";
import media from "styled-media-query";

export const ContainerMain = styled(Container)`
  padding-top: 6.25rem;
  padding-bottom: 3.75rem;

  @media (max-width: 600px) {
    padding-top: 3.25rem;
  }
`;

export const Title = styled.div`
  margin-left: -1.25rem;
  h2 {
    font-size: 2.125rem;
    font-style: italic;
  }
  span {
    text-align: left;
    font-size: 1.125rem;
  }

  ${media.lessThan("large")`
    margin-left: 0;
  `}

  @media (max-width: 600px) {
    margin-left: 0;
    h2 {
      text-align: center;
      font-size: 1.5rem;
    }
    span {
      font-size: 1rem;
      text-align: center;
      display: block;
    }
  }
`;

export const WrapperCars = styled.div`
  margin-top: 1.8125rem;
  margin-left: -1.25rem;
  display: flex;
  gap: 0.875rem;

  ${media.lessThan("large")`
    margin-left: 0;
  `}

  @media (max-width: 900px) {
    margin-left: 0;
    gap: 0.6875rem;
  }

  @media (max-width: 600px) {
    justify-content: center;

    div:nth-child(2) {
      display: none;
    }

    div:nth-child(3) {
      display: none;
    }
  }
`;

export const SingleCar = styled.div`
 max-width: 16.875rem;
  width: 100%;
  height: 21.875rem;
  border: 0.0625rem solid #d5d5d5;
  padding: 0 1.8125rem 1.375rem 1.8125rem;

  img {
    margin: 0 auto;
  }
  p {
    margin-top: 0.625rem;
    text-align: center;
    font-size: 0.875rem;
  }
  button {
    width: 100%;
    max-width: 14.375rem;
    line-height: 2.25rem;
    margin-top: 1.25rem;

    border: 1px solid #d5d5d5;
    border-radius: 0.25rem;

    font-size: 0.875rem;
    font-family: "Roboto", "sans-serif";
  }

  @media (max-width: 600px) {
    max-width: 20.9375rem;
    height: 12.25rem; 
    padding: 0 1.6875rem 1rem 1.625rem;  

    p{
      display: none;
    }
    button{
        display:none;
    }


`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

export const Button = styled.button`
  width: 100%;
  line-height: 36px;
  border: 0.0625rem solid #d5d5d5;
  border-radius: 0.25rem;
  margin: 0 auto;
  margin-top: 0.625rem;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;
