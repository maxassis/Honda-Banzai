import React from "react";
import * as S from "./styles.jsx";
import Accord from "../../assets/imgs/accord.png";
import Fit from "../../assets/imgs/fit.png";
import City from "../../assets/imgs/city.png";
import { KeyboardArrowDown } from "@styled-icons/material-sharp/KeyboardArrowDown";
import styled from "styled-components";

const Arrow = styled(KeyboardArrowDown)`
  color: #000000;
  width: 41px;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export function Section4() {
  return (
    <S.ContainerMain>
      <S.Title>
        <h2>PRONTO PARA TER UM HONDA?</h2>
        <span>Conheça os últimos grandes lançamentos da honda.</span>
      </S.Title>

      <S.WrapperCars>
        <S.SingleCar>
          <S.WrapperImage>
            <img src={Accord} alt="" />
            <Arrow />
          </S.WrapperImage>
          <p>
            Novo Honda Accord: a combinação perfeita de três atributos exigidos
            pelo consumidor: elegância, luxo e alto desempenho.
          </p>
          <button>CONHEÇA MAIS</button>
        </S.SingleCar>
        <S.SingleCar>
          <img src={City} alt="" />
          <p>
            O City está muito mais moderno e esportivo. Com design único e mais
            tecnológico do que nunca, ele vai conquistar todos os olhares.
          </p>
          <button>CONHEÇA MAIS</button>
        </S.SingleCar>
        <S.SingleCar>
          <img src={Fit} alt="" />
          <p>
            Com seu design inconfundível, o novo Honda Fit traz novidades que
            vão surpreender a todos e atrair ainda mais fãs.
          </p>
          <button>CONHEÇA MAIS</button>
        </S.SingleCar>
      </S.WrapperCars>
      <S.Button>CONHEÇA MAIS</S.Button>
    </S.ContainerMain>
  );
}
