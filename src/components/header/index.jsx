import React from "react";
import { Container } from "../container";
import * as S from "./styles.jsx";
import Home from "../../assets/imgs/home.svg";
import Gps from "../../assets/imgs/gps.svg";
import Email from "../../assets/imgs/mail.svg";
import Logo from "../../assets/imgs/logo.png";

export function Header() {
  return (
    <>
      <S.GrayDiv>
        <S.ContainerMain>
          <S.WrapperMenuItem>
            <ul>
              <li>
                <img src={Home} alt="" /> <span>Ir para o Portal Banzai</span>
              </li>
            </ul>
          </S.WrapperMenuItem>
          <S.WrapperMenuItem>
            <ul>
              <li>
                <img src={Gps} alt="" />{" "}
                <span>Encontre uma concessionária</span>
              </li>
              <li>
                <img src={Email} alt="" /> <span>Fale Conosco</span>
              </li>
            </ul>
          </S.WrapperMenuItem>
        </S.ContainerMain>
      </S.GrayDiv>

      <S.DivLogo>
        <S.ContainerMain>
          <img src={Logo} alt="" />

          <S.WrapperTelephone>
            <h3>CENTRAL DE ATENDIMENTO </h3>
            <span>(31) 3123-1234 </span>
          </S.WrapperTelephone>
        </S.ContainerMain>
      </S.DivLogo>
    </>
  );
}
