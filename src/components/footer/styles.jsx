import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ContainerMain = styled(Container)`
  padding-top: 16px;
  padding-bottom: 15px;
`;

export const WrapperLogos = styled.div`
  width: 500px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  img:nth-child(1) {
    width: 110px;
    height: 28px;
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
