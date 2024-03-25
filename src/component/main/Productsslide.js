import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Context from "../common/Context";
import Styledbutton from "../common/Styledbutton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const Styledlayout = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
  padding: 48px 0;
  margin: 0 auto;
  display: flex;
  justify-content: end;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  color: #fff;
  text-align: center;
  overflow: visible;
`;
const Item_img = styled.div`
  width: 100%;
  height: 550px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const ProductSlide = [
  {
    id: 1,
    img: "images/product_01.png",
    name: "BABY",
    link: "product1.html",
  },
  {
    id: 2,
    img: "images/product_02.png",
    name: "PET",
    link: "product2.html",
  },
  {
    id: 3,
    img: "images/product_03.png",
    name: "Funeral",
    link: "product3.html",
  },
  {
    id: 4,
    img: "images/product_01.png",
    name: "Funeral",
    link: "product3.html",
  },
];
const PrevButtonClick = () => {
  if (swiper) swiper.slidePrev();
};

const NextButtonClick = () => {
  if (swiper) swiper.slideNext();
};

let swiper;

const Productsslide = () => {
  return (
    <Styledlayout>
      <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "0 24px",
          }}
        >
          <Context
            text="삶의 소중한 순간"
            desc={
              <span>
                모든 순간의 감동과 환희, 함께했던 추억과 그리움을
                <br /> 비아젬 오마주에 담아 영원히 함께하세요.
              </span>
            }
          ></Context>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "24px" }}>
            <button onClick={PrevButtonClick} className="button_layout prev-button">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.965 26.975L15.2322 25.7078L10.2172 20.6837L33 20.6837L33 18.8862L10.2172 18.8862L15.2322 13.8622L13.965 12.595L6.77499 19.785L13.965 26.975Z"
                  fill="black"
                />
              </svg>
            </button>
            <button onClick={NextButtonClick} className="button_layout next-button">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.035 12.595L24.7678 13.8622L29.7828 18.8863H7V20.6838H29.7828L24.7678 25.7078L26.035 26.975L33.225 19.785L26.035 12.595Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div style={{ width: "70%", maxWidth: "1400px" }}>
          <Swiper
            slidesPerView={2.6}
            spaceBetween={30}
            slidesOffsetBefore={24}
            allowTouchMove={false}
            loop={true}
            speed={1000}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            modules={[Navigation]}
            onSwiper={(s) => (swiper = s)}
            className="mySwiper"
            style={{ width: "100%" }}
          >
            {ProductSlide.map((slide) => (
              <StyledSwiperSlide key={slide.id}>
                <Item_img>
                  <img src={slide.img} alt={slide.name} />
                </Item_img>
                <div className="item__desc">
                  <h3 style={{ color: "#1d1d1d", margin: "28px 0 14px 0 " }}>{slide.name}</h3>
                  <Styledbutton
                    onClick={() => (window.location.href = slide.link)}
                    color={"#1d1d1d"}
                    afterColor={"#1d1d1d"}
                    size={"14px"}
                    padding={"8px"}
                  >
                    더 알아보기
                  </Styledbutton>
                </div>
              </StyledSwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Styledlayout>
  );
};

export default Productsslide;
