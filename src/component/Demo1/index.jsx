// @ts-nocheck
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./index.scss";

// img list
import Gangtie from "../../images/gangtie.png";
import GangtieL from "../../images/gangtie-light.png";

import Fengdian from "../../images/fengdian.png";
import FengdianL from "../../images/fengdian-light.png";

import PCB from "../../images/PCB.png";
import PCBL from "../../images/PCB-light.png";

import Yasuoji from "../../images/yasuoji.png";
import YasuojiL from "../../images/yasuoji-light.png";

import Jiaju from "../../images/jiaju.png";
import JiajuL from "../../images/jiaju-light.png";

import Yiyao from "../../images/yiyao.png";
import YiyaoL from "../../images/yiyao-light.png";

import Guangdian from "../../images/guangdian.png";
import GuangdianL from "../../images/guangdian-light.png";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

let prevIndex = null;

const Demo1 = () => {
  const processHandler = (swiper, progress) => {
    for (let i = 0; i < swiper.slides.length; i++) {
      var slide = swiper.slides.eq(i);

      var slideProgress = swiper.slides[i].progress;
      var modify = 1;
      if (Math.abs(slideProgress) > 1) {
        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
      }

      var translate = 0;
      var scale = 0;
      var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
      var opacity = 1;

      translate = slideProgress * modify * 50 + "px";
      scale = 1 - Math.abs(slideProgress) / 9;

      slide.transform("translateX(" + translate + ") scale(" + scale + ")");
      slide.css("zIndex", zIndex);
      slide.css("opacity", opacity);
      if (Math.abs(slideProgress) > 3) {
        slide.css("opacity", 0);
      }
    }

    prevIndex++;
  };

  const transitionHandler = (swiper, transition) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      var slide = swiper.slides.eq(i);
      slide.transition(transition);
    }
  };

  return (
    <Swiper
      id="certify"
      className="swiper-container"
      spaceBetween={18}
      slidesPerView="auto"
      slidesPerGroup={1}
      initialSlide={2}
      centeredSlides={true}
      watchSlidesProgress={true}
      loop={true}
      loopedSlides={2}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onProgress={(swiper, process) => processHandler(swiper, process)}
      onSetTransition={(swiper, transition) =>
        transitionHandler(swiper, transition)
      }
    >
      {imgList.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <a className="device-list">
              <img className="small" src={item.small} />
              <img className="light" src={item.light} />
              <p>图片说明{index + 1}</p>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Demo1;

const imgList = [
  {
    title: "钢铁",
    small: Gangtie,
    light: GangtieL,
  },
  {
    title: "风电",
    small: Fengdian,
    light: FengdianL,
  },
  {
    title: "PCB制造",
    small: PCB,
    light: PCBL,
  },
  {
    title: "压缩机制造",
    small: Yasuoji,
    light: YasuojiL,
  },
  {
    title: "家具制造",
    small: Jiaju,
    light: JiajuL,
  },
  {
    title: "医药",
    small: Yiyao,
    light: YiyaoL,
  },
  {
    title: "广电薄膜",
    small: Guangdian,
    light: GuangdianL,
  },
];
