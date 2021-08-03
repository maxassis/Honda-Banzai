import styled from "styled-components";
import { Container } from "../container";
import media from "styled-media-query";

export const GrayDiv = styled.div`
  width: 100%;
  height: 1.5625rem;
  background-color: #eeeeee;

  @media (max-width: 600px) {
    display: flex;
    height: 2.5rem;
  }
`;

export const ContainerMain = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 3.8125rem;

    img {
      width: 1.875rem;
      height: 1.5625rem;
    }
  }
`;

export const ContainerLogo = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    gap: 1.7937rem;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      height: 51px;
    }
  }
`;

export const WrapperMenuItem = styled.div`
  ul {
    display: flex;
    gap: 1.625rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.6138rem;
      cursor: pointer;

      span {
        text-align: left;
        font: 0.75rem;
        color: #707070;
      }
    }
  }

  @media (max-width: 600px) {
    width: 80%;
    span {
      display: none;
    }
  }
`;

export const WrapperMenuItem2 = styled(WrapperMenuItem)`
  @media (max-width: 600px) {
    width: 100%;

    ul {
      justify-content: space-between;
    }
  }
`;

export const DivLogo = styled.div`
  padding-top: 1.4375rem;
  padding-bottom: 1.2937rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 1.75rem;
    padding-bottom: 1.125rem;
  }
`;

export const WrapperTelephone = styled.div`
  h3 {
    font: italic 1rem ☞;
    letter-spacing: -0.7px;
    color: #727b7a;
  }

  span {
    font: italic 1.625rem ☞;
    color: #df0209;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 1.625rem;
    }
  }
`;
