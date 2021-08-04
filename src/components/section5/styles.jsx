import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ContainerExternal = styled.div`
  background-color: #eeeeee;
`;

export const ContainerMain = styled(Container)`
  padding-top: 1.1875rem;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    text-align: center;
    font-size: 24px;
    font-style: italic;
    margin-top: 17px;
  }
`;

export const WrapperBoxes = styled.div`
  display: flex;
  gap: 1.875rem;
  width: 56%;
  margin: 0 auto;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 16.875rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 0.0625rem solid #df0209;
  border-radius: 0.3125rem;
  gap: 17.13px;
`;

export const Contact = styled.div`
  span {
    text-align: left;
    font: 0.875rem;
    color: #000000;
  }
  h4 {
    text-align: left;
    color: #df0209;
  }
`;

export const Contact2 = styled.div`
  span {
    text-align: left;
    font-size: 16px;
    font-style: italic;
    letter-spacing: -0.7px;
    color: #727b7a;
  }
  h4 {
    text-align: left;
    font-size: 26px;
    font-style: italic;
    color: #df0209;
  }
`;

export const WrapperSocialIcons = styled.div`
  display: flex;
  gap: 19px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
