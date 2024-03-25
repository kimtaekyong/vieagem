import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const Styledlayout = styled.div`
  position: relative;
  padding: 0 48px;
  .button_layout {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    opacity: 1;
  }
  .button_layout.swiper-button-disabled {
    opacity: 0.3;
  }
  .custom-prev-button {
    left: 0;
  }
  .custom-next-button {
    right: 0;
  }
`;
const ButtonLink = styled.button`
  position: relative;
  background: none;
  border: none;
  color: #fff;
  padding: 8px 24px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Pretendard";
  &:after {
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  text-align: center;
  .item__desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    transition: all 0.5s;
    p {
      font-size: 16px;
      margin: 14px 0 6px 0;
    }
    h3 {
      font-size: 18px;
    }
  }
  &:hover {
    .item__desc {
      opacity: 1;
      visibility: visible;
    }
  }
`;
const slides = [
  {
    id: 1,
    backgroundImage: "/images/item_01.png",
    name: "Finesse 링1",
    description: "시그니처 토글 잠금 디테일이 모티프로 사용된 제품1",
    link: "product1.html",
  },
  {
    id: 2,
    backgroundImage: "/images/item_02.png",
    name: "Finesse 링2",
    description: "시그니처 토글 잠금 디테일이 모티프로 사용된 제품2",
    link: "product2.html",
  },
  {
    id: 3,
    backgroundImage: "/images/item_03.png",
    name: "Finesse 링3",
    description: "시그니처 토글 잠금 디테일이 모티프로 사용된 제품3",
    link: "product3.html",
  },
  {
    id: 4,
    backgroundImage: "/images/item_01.png",
    name: "Finesse 링1",
    description: "시그니처 토글 잠금 디테일이 모티프로 사용된 제품4",
    link: "product1.html",
  },
  {
    id: 5,
    backgroundImage: "images/item_02.png",
    name: "Finesse 링2",
    description: "시그니처 토글 잠금 디테일이 모티프로 사용된 제품5",
    link: "product2.html",
  },
  {
    id: 6,
    backgroundImage: "/images/item_03.png",
    name: "Finesse 링3",
    description: "시그니처 토글 잠금 디테일이 모티프로 사용된 제품6",
    link: "product3.html",
  },
];
const handlePrevButtonClick = () => {
  if (swiper) swiper.slidePrev();
};

const handleNextButtonClick = () => {
  if (swiper) swiper.slideNext();
};
const handleButtonClick = (link) => {
  window.open(link, "_top");
};

let swiper;

const Centerslide = () => {
  return (
    <Styledlayout>
      <button onClick={handlePrevButtonClick} className="button_layout custom-prev-button">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_381_2107" fill="white">
            <path d="M26 34L12 20L26 6" />
          </mask>
          <path
            d="M27.1785 32.8215C27.8294 33.4724 27.8294 34.5276 27.1785 35.1785C26.5276 35.8294 25.4724 35.8294 24.8215 35.1785L27.1785 32.8215ZM12 20L10.8215 21.1785C10.1706 20.5276 10.1706 19.4724 10.8215 18.8215L12 20ZM24.8215 4.82149C25.4724 4.17061 26.5276 4.17061 27.1785 4.82149C27.8294 5.47236 27.8294 6.52764 27.1785 7.17851L24.8215 4.82149ZM24.8215 35.1785L10.8215 21.1785L13.1785 18.8215L27.1785 32.8215L24.8215 35.1785ZM10.8215 18.8215L24.8215 4.82149L27.1785 7.17851L13.1785 21.1785L10.8215 18.8215Z"
            fill="#101010"
            mask="url(#path-1-inside-1_381_2107)"
          />
        </svg>
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        speed={1000}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        modules={[Navigation]}
        onSwiper={(s) => (swiper = s)}
        className="mySwiper"
        style={{ width: "100%", height: "450px" }}
      >
        {slides.map((slide) => (
          <StyledSwiperSlide key={slide.id} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
            <div className="item__desc">
              <h3>{slide.name}</h3>
              <p>{slide.description}</p>
              <ButtonLink onClick={() => handleButtonClick(slide.link)}>자세히 보기</ButtonLink>
            </div>
          </StyledSwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleNextButtonClick} className="button_layout custom-next-button">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_381_2105" fill="white">
            <path d="M14 34L28 20L14 6" />
          </mask>
          <path
            d="M12.8215 32.8215C12.1706 33.4724 12.1706 34.5276 12.8215 35.1785C13.4724 35.8294 14.5276 35.8294 15.1785 35.1785L12.8215 32.8215ZM28 20L29.1785 21.1785C29.8294 20.5276 29.8294 19.4724 29.1785 18.8215L28 20ZM15.1785 4.82149C14.5276 4.17061 13.4724 4.17061 12.8215 4.82149C12.1706 5.47236 12.1706 6.52764 12.8215 7.17851L15.1785 4.82149ZM15.1785 35.1785L29.1785 21.1785L26.8215 18.8215L12.8215 32.8215L15.1785 35.1785ZM29.1785 18.8215L15.1785 4.82149L12.8215 7.17851L26.8215 21.1785L29.1785 18.8215Z"
            fill="#101010"
            mask="url(#path-1-inside-1_381_2105)"
          />
        </svg>
      </button>
    </Styledlayout>
  );
};

export default Centerslide;
