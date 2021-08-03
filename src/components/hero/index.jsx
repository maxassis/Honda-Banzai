import React from "react";
import * as S from "./styles.jsx";
import Tel from "../../assets/imgs/tel.svg";
//import User from '../../assets/imgs/user.svg'

export function Hero() {
  return (
    <>
      <S.ContainerBackground>
        <S.WrapperContactBox>
          <S.Contact>
            <img src={Tel} alt="" />
            <S.CallContact>
              <span>Solicitar um</span>
              <h3>CONTATO</h3>
            </S.CallContact>
          </S.Contact>

          <S.WrapperInputs>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Escolha o horário" />
            <input type="text" placeholder="Escolha a unidade" />
            <a href="">AGENDAR TEST DRIVE</a>
          </S.WrapperInputs>
        </S.WrapperContactBox>
      </S.ContainerBackground>
      ;
    </>
  );
}
