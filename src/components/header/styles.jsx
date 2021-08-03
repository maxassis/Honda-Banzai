import styled from "styled-components";
import { Container } from "../container";

export const GrayDiv = styled.div`
  width: 100%;
  height: 1.5625rem;
  background-color: #eeeeee;
`;

export const ContainerMain = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const DivLogo = styled.div`
  padding-top: 1.4375rem;
  padding-bottom: 1.2937rem;
`;

export const WrapperTelephone = styled.div`
  h3 {
    font: italic 16px ☞;
    letter-spacing: -0.7px;
    color: #727b7a;
  }

  span {
    font: italic 26px ☞;
    color: #df0209;
  }
`;
