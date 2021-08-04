import React from "react";
import * as S from "./styles.jsx";
import LogoSmall from "../../assets/imgs/logo-small.png";
import Ibama from "../../assets/imgs/logo_ibama.png";

export function Footer() {
  return (
    <S.ContainerMain>
      <S.WrapperLogos>
        <img src={LogoSmall} alt="" />
        <S.DivIbama>
          <span>Todos juntos fazem um trânsito melhor</span>
          <img src={Ibama} alt="" />
        </S.DivIbama>
      </S.WrapperLogos>
    </S.ContainerMain>
  );
}
