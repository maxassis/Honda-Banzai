import styled from "styled-components";
import { Container } from "../container/index.jsx";

export const ContainerMain = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 0.9375rem;

  @media (max-width: 600px) {
    padding-bottom: 3rem;
  }
`;

export const WrapperLogos = styled.div`
  width: 100%;
  max-width: 31.25rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  img:nth-child(1) {
    width: 6.875rem;
    height: 1.75rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    gap: 1.7937rem;
  }
`;

export const DivIbama = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    color: #707070;
  }
`;
