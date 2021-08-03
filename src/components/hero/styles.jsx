import styled from "styled-components";
import Background from "../../assets/imgs/back.png";
import User from "../../assets/imgs/user.svg";
import Email from "../../assets/imgs/mail2.svg";
import Tel from "../../assets/imgs/tel2.svg";
import Clock from "../../assets/imgs/clock.svg";
import Gps from "../../assets/imgs/gps2.svg";

export const ContainerBackground = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  border: 0.0625rem solid red;
`;

export const WrapperContactBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 16.875rem;
  height: 22rem;
  position: sticky;
  background: #eeeeee;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 4px;

  padding: 19px 20px 20px 20px;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
`;

export const CallContact = styled.div`
  span {
    text-align: left;
    font-size: 14px;
    color: #000000;
  }
  h3 {
    text-align: left;
    font-size: 22px;
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
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;

    background-image: url(${User});
    background-repeat: no-repeat;
    background-position: 5% 50%;
    padding-left: 35px;
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
    line-height: 45px;
    background-color: #1cb72a;
    font-weight: bold;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    border-radius: 4px;
    padding: 0 44px;
  }
`;
