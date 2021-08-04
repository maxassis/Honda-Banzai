import React from "react";
import * as S from "./styles.jsx";
import Gps from "../../assets/imgs/gps3.svg";
import Face from "../../assets/imgs/face.svg";
import Twitter from "../../assets/imgs/twitter.svg";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import styled from "styled-components";

const Insta = styled(Instagram)`
  width: 32px;
  color: #ffffff;
`;

export function Section5() {
  return (
    <S.ContainerExternal>
      <S.ContainerMain>
        <S.WrapperBoxes>
          <S.Box>
            <img src={Gps} alt="" />
            <S.Contact>
              <span>Encontre uma</span>
              <h4>CONCESSIONÁRIA</h4>
            </S.Contact>
          </S.Box>
          <S.Box>
            <S.Contact2>
              <span>CENTRAL DE ATENDIMENTO</span>
              <h4>(31) 3123-1234</h4>
            </S.Contact2>
          </S.Box>
        </S.WrapperBoxes>

        <S.FollowText>SIGA A BANZAI NAS REDES SOCIAIS</S.FollowText>

        <S.WrapperSocialIcons>
          <S.SocialIcon>
            <img src={Face} alt="" />
          </S.SocialIcon>
          <S.SocialIcon>
            <Insta />
          </S.SocialIcon>
          <S.SocialIcon>
            <img src={Twitter} alt="" />
          </S.SocialIcon>
        </S.WrapperSocialIcons>
      </S.ContainerMain>
    </S.ContainerExternal>
  );
}
