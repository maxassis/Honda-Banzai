import styled from "styled-components";
import { Container } from "../container/index.jsx";
import media from "styled-media-query";

export const ContainerExternal = styled.div`
  background-color: #eeeeee;
`;

export const ContainerMain = styled(Container)`
  padding-top: 1.1875rem;
  padding-bottom: 1.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperBoxes = styled.div`
  display: flex;
  gap: 1.875rem;
  width: auto;
  margin: 0 auto;

  ${media.lessThan("medium")`
    flex-direction: column;
    gap: 0.5625rem;
  `}
`;

export const Box = styled.div`
  width: 16.875rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 0.0625rem solid #df0209;
  border-radius: 0.3125rem;
  gap: 1.0706rem;

  @media (max-width: 600px) {
    width: 16.875rem;
    height: 5rem;
  }
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
    font-size: 1rem;
    font-style: italic;
    letter-spacing: -0.0437rem;
    color: #727b7a;
  }
  h4 {
    text-align: left;
    font-size: 1.625rem;
    font-style: italic;
    color: #df0209;
  }
`;

export const WrapperSocialIcons = styled.div`
  display: flex;
  gap: 1.1875rem;
  margin: 0 auto;
  margin-top: 1.25rem;
`;

export const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FollowText = styled.h4`
  text-align: center;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 1.0625rem;

  ${media.lessThan("medium")`
    margin-top: 1.625rem;
    font-size: 1.125rem;
    font-weight: 100;
  `}
`;
