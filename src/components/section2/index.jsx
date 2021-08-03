import React from "react";
import * as S from "./styles.jsx";
import Col1 from "../../assets/imgs/col1.png";
import Col2 from "../../assets/imgs/col2.png";
import Col3 from "../../assets/imgs/col3.png";
import Cars from "../../assets/imgs/juntosi.png";

export function Section2() {
  return (
    <S.ContainerMain>
      <h2>A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE</h2>

      <S.DivPhotos>
        <S.Column>
          <img src={Col1} alt="" />
          <img src={Col2} alt="" />
          <img src={Col3} alt="" />
        </S.Column>
        <S.WrapperCars>
          <img src={Cars} alt="" />
        </S.WrapperCars>
      </S.DivPhotos>

      <p>
        O novo Civic Geração 10 traz um design único mudando a categoria de
        sedãs para sempre. Ele garante a melhor dirigibilidade com o máximo em
        sofisticação e conforto, atribuído por seu design interno e diferenciada
        ergonomia.
      </p>
    </S.ContainerMain>
  );
}
