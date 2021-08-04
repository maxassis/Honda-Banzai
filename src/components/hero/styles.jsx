import styled from "styled-components";
import Background from "../../assets/imgs/back2.png";
import User from "../../assets/imgs/user.svg";
import Email from "../../assets/imgs/mail2.svg";
import Tel from "../../assets/imgs/tel2.svg";
import Clock from "../../assets/imgs/clock.svg";
import Gps from "../../assets/imgs/gps2.svg";
import { Container } from "../container/index.jsx";

export const ContainerBackground = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 31px;

  @media (max-width: 900px) {
    background-image: none;
    height: auto;
  }
`;

export const ContainerMain = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapperBlackCar = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const WrapperContactBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 16.875rem;
  height: 22rem;
  position: fixed;
  background: #eeeeee;
  box-shadow: 0rem 0rem 0.3125rem #00000029;
  border-radius: 0.25rem;
  margin-right: -5.75rem;
  margin-top: 4.9375rem;
  padding: 1.1875rem 1.25rem 1.25rem 1.25rem;
  top: 121px;
  z-index: 1000;

  @media (max-width: 1200px) {
    margin-right: 0px;
    margin-top: 1.25rem;
  }

  @media (max-width: 900px) {
    margin-top: 2.5238rem;
    max-width: 23.875rem;
    position: static;
  }

  @media (max-width: 480px) {
    max-width: 20.875rem;
    height: 22rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
`;

export const CallContact = styled.div`
  span {
    text-align: left;
    font-size: 0.875rem;
    color: #000000;
  }
  h3 {
    text-align: left;
    font-size: 1.375rem;
    color: #df0209;
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.3125rem;
  gap: 0.3125rem;

  input {
    width: 100%;
    height: 2.25rem;
    background-color: #eeeeee;
    border: 0.0625rem solid rgba(0, 0, 0, 0.12);
    border-radius: 0.25rem;

    background-image: url(${User});
    background-repeat: no-repeat;
    background-position: 5% 50%;
    padding-left: 2.1875rem;
  }

  input:nth-child(2) {
    background-image: url(${Email});
  }

  input:nth-child(3) {
    background-image: url(${Tel});
  }

  input:nth-child(4) {
    background-image: url(${Clock});
  }

  input:nth-child(5) {
    background-image: url(${Gps});
  }

  a {
    width: 100%;
    line-height: 2.8125rem;
    background-color: #1cb72a;
    font-weight: bold;
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    border-radius: 0.25rem;
    padding: 0 2.75rem;
  }

  @media (max-width: 900px) {
    a {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    input {
      height: 2.25rem;
      padding-left: 3rem;
    }
  }
`;
