import React from "react";
import * as S from "./styles.jsx";
import PainelMobile from "../../assets/imgs/painel-mobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
import SwiperCore, { Pagination } from "swiper/core";
import Slide1 from "../../assets/imgs/slide1.png";
import Slide2 from "../../assets/imgs/slide2.png";
import Slide3 from "../../assets/imgs/slide3.png";

SwiperCore.use([Pagination]);

export function Section3() {
  return (
    <>
      <S.Painel>
        <img src={PainelMobile}></img>
      </S.Painel>

      <S.ContainerMain>
        <S.WrapperCarrousel>
          <Swiper
            pagination={true}
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              600: {
                slidesPerView: 2.7,
                spaceBetween: 15,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <S.SingleSlider>
                <img src={Slide1} alt="" />
                <h4>Direção com Assistência</h4>
                <p>
                  Sistema de estabilidade que reforça automaticamente o retorno
                  da direção, auxiliando o motorista em situaçoes onde o carro
                  esta ameaçado de instabilidade
                </p>
              </S.SingleSlider>
            </SwiperSlide>
            <SwiperSlide>
              <S.SingleSlider>
                <img src={Slide2} alt="" />
                <h4>Vidros elétricos com subida</h4>
                <p>
                  Todas as portas possuem vidros eletricos com função "um toque"
                  e sistema de segurança
                </p>
              </S.SingleSlider>
            </SwiperSlide>
            <SwiperSlide>
              <S.SingleSlider>
                <img src={Slide3} alt="" />
                <h4>Direção com Assistência</h4>
                <p>
                  Sistema de estabilidade que reforça automaticamente o retorno
                  da direção, auxiliando o motorista em situaçoes onde o carro
                  esta ameaçado de instabilidade
                </p>
              </S.SingleSlider>
            </SwiperSlide>
            <SwiperSlide>
              <S.SingleSlider>
                <img src={Slide1} alt="" />
                <h4>Direção com Assistência</h4>
                <p>
                  Sistema de estabilidade que reforça automaticamente o retorno
                  da direção, auxiliando o motorista em situaçoes onde o carro
                  esta ameaçado de instabilidade
                </p>
              </S.SingleSlider>
            </SwiperSlide>
            <SwiperSlide>
              <S.SingleSlider>
                <img src={Slide2} alt="" />
                <h4>Direção com Assistência</h4>
                <p>
                  Sistema de estabilidade que reforça automaticamente o retorno
                  da direção, auxiliando o motorista em situaçoes onde o carro
                  esta ameaçado de instabilidade
                </p>
              </S.SingleSlider>
            </SwiperSlide>
            <SwiperSlide>
              <S.SingleSlider>
                <img src={Slide3} alt="" />
                <h4>Direção com Assistência</h4>
                <p>
                  Sistema de estabilidade que reforça automaticamente o retorno
                  da direção, auxiliando o motorista em situaçoes onde o carro
                  esta ameaçado de instabilidade
                </p>
              </S.SingleSlider>
            </SwiperSlide>
          </Swiper>
        </S.WrapperCarrousel>
      </S.ContainerMain>
    </>
  );
}
