import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styled from "styled-components";
import Pagetitle from "../common/Pagetitle";
import Styledbutton from "../common/Styledbutton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Styledlayout = styled.div`
  position: relative;
  width: 100%;
  padding: 48px 0;
  margin: 220px auto;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  color: #fff;
  text-align: center;
  overflow: visible;
  width: 100%;
  max-width: 440px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Progress = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 48px auto 0;
  padding: 0 70px;
  .custom-pagination {
    width: 100%;
    height: 3px;
    background-color: #efeff1;
    margin-top: 10px;
    overflow: hidden; /* 너비가 커질 때 영역을 넘어가지 않도록 합니다. */
  }

  .progress-bar {
    height: 100%;
    background-color: #1d1d1d; /* 진행 막대 색상을 설정합니다. 여기서는 파란색을 사용합니다. */
    transition: width 0.75s ease; /* 너비 변경에 대한 애니메이션을 추가합니다. */
  }
`;
const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 160px auto 0;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      text-align: center;
    }
  }
`;
const ProductSlide = [
  {
    id: 1,
    img: "images/sns_img_01.png",
  },
  {
    id: 2,
    img: "images/sns_img_02.png",
  },
  {
    id: 3,
    img: "images/sns_img_03.png",
  },
  {
    id: 4,
    img: "images/sns_img_04.png",
  },
  {
    id: 5,
    img: "images/sns_img_05.png",
  },
  {
    id: 6,
    img: "images/sns_img_01.png",
  },
  {
    id: 7,
    img: "images/sns_img_01.png",
  },
  {
    id: 8,
    img: "images/sns_img_02.png",
  },
  {
    id: 9,
    img: "images/sns_img_03.png",
  },
  {
    id: 10,
    img: "images/sns_img_04.png",
  },
  {
    id: 11,
    img: "images/sns_img_05.png",
  },
  {
    id: 12,
    img: "images/sns_img_01.png",
  },
];
const Infodata = [
  {
    id: 1,
    icon: (
      <svg width="58" height="55" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_381_1979)">
          <path
            d="M16.6105 0.831055L0.875 16.5097L28.9959 44.1388L57.1256 16.5097L41.3902 0.831055H16.6105Z"
            stroke="#303030"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.875 16.5098H57.1256"
            stroke="#303030"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.389 0.831055V15.8467L28.9948 0.831055L16.6094 15.8467V0.831055"
            stroke="#303030"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6094 15.8467L28.9948 44.1388L41.389 15.8467"
            stroke="#303030"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_381_1979">
            <rect width="58" height="55" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "비아젬 고객센터",
    desc: [
      <span key="reservation-info">
        평일 오전 9:00 - 오후 6:00
        <br />
      </span>,
    ],
    number: "02-6003-1387",
    value: "더 알아보기",
    link: "/",
  },
  {
    id: 2,
    icon: (
      <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M41 21.6883C41 10.0983 31.0731 0.841112 19.3376 2.11797C10.4488 3.0838 3.24693 10.2457 2.15205 19.2001C1.51945 24.3812 2.89819 29.2103 5.59078 33.0409L18.7293 51.5635C20.0919 53.4788 22.9061 53.4788 24.2686 51.5635L37.4072 33.0409C39.6618 29.8324 41 25.9199 41 21.6883Z"
          stroke="#303030"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.4615 29.6064C26.2026 29.6064 30.046 25.9027 30.046 21.334C30.046 16.7652 26.2026 13.0615 21.4615 13.0615C16.7204 13.0615 12.877 16.7652 12.877 21.334C12.877 25.9027 16.7204 29.6064 21.4615 29.6064Z"
          stroke="#303030"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "스토어 방문 예약",
    desc: [
      <span key="reservation-info">
        매장 내 방문 예약 또는
        <br /> 온라인 상담 예약을 통해 도와 드립니다.
      </span>,
    ],
    value: "지금 예약하기",
    link: "/",
  },
  {
    id: 3,
    icon: (
      <svg width="57" height="55" viewBox="0 0 57 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.127 27.0312H34.2661C34.7638 27.0312 35.1757 27.4285 35.1757 27.9085V32.9071C35.1757 33.3871 34.7638 33.7843 34.2661 33.7843H23.127"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8073 33.776H1.76709C1.26935 33.776 0.857422 33.3788 0.857422 32.8988V27.9002C0.857422 27.4202 1.26935 27.0229 1.76709 27.0229H13.6099"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.4685 34.1317V51.4556C33.4685 52.0459 32.9411 52.526 32.2926 52.526H3.75016C3.10166 52.526 2.57422 52.0459 2.57422 51.4556V33.8877"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.4668 24.234L24.1226 22.1816C27.9158 20.0216 31.8548 21.3292 31.8548 25.8312V27.0147"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.29102 26.9402V26.005C4.29102 21.5443 8.41884 19.2436 11.4825 21.1802L15.8335 24.5071"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8066 26.3195V25.674C15.8066 24.805 16.5361 24.1016 17.4372 24.1016H18.8875C19.7886 24.1016 20.518 24.805 20.518 25.674V26.3195"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.6387 7.72656H55.2326C55.7304 7.72656 56.1423 8.13322 56.1423 8.62459V13.7417C56.1423 14.233 55.7304 14.6397 55.2326 14.6397H43.8361"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.6539 14.6314H22.7339C22.2361 14.6314 21.8242 14.2247 21.8242 13.7334V8.61629C21.8242 8.12492 22.2361 7.71826 22.7339 7.71826H34.6539"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.6602 22.5272V14.6313"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M54.0653 15.25V51.4326C54.0653 52.036 53.539 52.5266 52.8921 52.5266H30.8945"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.4414 4.89673L45.0972 2.79568C48.8904 0.584496 52.8294 1.15212 52.8294 5.76087V7.70095"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.2656 7.63332V5.54922C25.2656 0.982826 29.3934 -0.211721 32.4571 1.77919L36.8081 5.18492"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36.7734 7.19268V6.3709C36.7734 5.48135 37.5029 4.76123 38.404 4.76123H39.8543C40.7554 4.76123 41.4848 5.48135 41.4848 6.3709V7.19268"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.7247 40.6826L18.2966 37.5056L13.877 40.6826V26.7886H22.7247V40.6826Z"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.6388 21.4933L39.2879 18.3163L34.791 21.4933V7.59082H43.6388V21.4933Z"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "제공 서비스",
    desc: [
      <span key="reservation-info">
        제품 각인, 사이즈 조절 및 관리에 대해 <br /> 케어 전문가들이 도움을 드립니다.
      </span>,
    ],
    value: "더 알아보기",
    link: "/",
  },
];
const CustomPagination = ({ totalSlides, activeIndex }) => {
  const progressBarWidth = ((activeIndex + 1) / totalSlides) * 100 + "%";
  return (
    <Progress>
      <div className="custom-pagination">
        <div className="progress-bar" style={{ width: progressBarWidth }} />
      </div>
    </Progress>
  );
};
const Info = () => {
  return (
    <Inner>
      <ul>
        {Infodata.map((Provided) => (
          <li key={Provided.id}>
            <span style={{ display: "block", margin: "0 0 14px 0" }}>{Provided.icon}</span>
            <h4 style={{ fontSize: "18px" }}>{Provided.name}</h4>
            <p style={{ fontSize: "16px", margin: "8px 0 0 0", lineHeight: "1.4rem" }}>{Provided.desc}</p>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>{Provided.number}</p>
            <Styledbutton
              key={Provided.id}
              color={"#1d1d1d"}
              afterColor={"#1d1d1d"}
              size={"14px"}
              padding={"24px 12px 12px 12px"}
            >
              {Provided.value}
            </Styledbutton>
          </li>
        ))}
      </ul>
    </Inner>
  );
};
const Productsslide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Styledlayout>
      <Pagetitle text="Follow US" desc={<p>@vieagem_official</p>}></Pagetitle>
      <div style={{ width: "100%" }}>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          loop={true}
          speed={1300}
          allowTouchMove={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ width: "100%" }}
        >
          {ProductSlide.map((slide) => (
            <StyledSwiperSlide key={slide.id}>
              <img src={slide.img} alt={slide.name} />
            </StyledSwiperSlide>
          ))}
        </Swiper>
        <CustomPagination totalSlides={ProductSlide.length} activeIndex={activeIndex} />
      </div>
      <Info></Info>
    </Styledlayout>
  );
};

export default Productsslide;
