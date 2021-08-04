import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ContainerMain = styled(Container)`
  padding-top: 6.25rem;
  padding-bottom: 60px;

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

  @media (max-width: 600px) {
    margin-left: 0;
    h2 {
      text-align: center;
      font-size: 1.5rem;
    }
    span {
      font-size: 16px;
      text-align: center;
      display: block;
    }
  }
`;

export const WrapperCars = styled.div`
  margin-top: 1.8125rem;
  margin-left: -1.25rem;
  display: flex;
  gap: 30px;

  @media (max-width: 900px) {
    margin-left: 0;
    gap: 11px;
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
  border: 1px solid #d5d5d5;
  padding: 0 29px 22px 29px;

  img {
    margin: 0 auto;
  }
  p {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
  button {
    width: 100%;
    max-width: 230px;
    line-height: 36px;
    margin-top: 20px;

    border: 1px solid #d5d5d5;
    border-radius: 4px;

    font-size: 14px;
    font-family: "Roboto", "sans-serif";
  }

  @media (max-width: 600px) {
    max-width: 335px;
    height: 196px; 
    padding: 0 27px 16px 26px;  

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
  gap: 28px;
`;

export const Button = styled.button`
  width: 335px;
  line-height: 36px;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 10px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;
