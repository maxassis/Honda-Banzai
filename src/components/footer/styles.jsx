import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ContainerMain = styled(Container)`
  padding-top: 16px;
  padding-bottom: 15px;

  @media (max-width: 600px) {
    padding-bottom: 48px;
  }
`;

export const WrapperLogos = styled.div`
  width: 100%;
  max-width: 500px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  img:nth-child(1) {
    width: 110px;
    height: 28px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    gap: 28.7px;
  }
`;

export const DivIbama = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    color: #707070;
  }
`;
