import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "swiper/components/scrollbar/scrollbar.less";
import "./index.less";

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
              {/* <span>{item.title}</span>
              <div>{item.info}</div> */}
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
    url: "/gang",
    info: "钢铁工业是资源密集型产业，多年来钢铁工业的能耗约占全国能源消费的10%。而炼钢工序能耗是钢铁工业能耗中的一个重要组成部分，高效管控好煤气和电的能源消耗，对指导生产具有重要意义",
  },
  {
    title: "风电",
    small: Fengdian,
    light: FengdianL,
    url: "/feng",
    info: "本平台通过网络化的系统部署，通过感知话、物联化、智能风电损失原因与维度众多，",
  },
  {
    title: "PCB制造",
    small: PCB,
    light: PCBL,
    url: "/chang",
    info: "风机、空气压缩机等设备被大量应用于SMT制造中，是生产过程中最主要的耗能设备。昂，如何提升故障预警提前量并降低被动停机时长，将能大大提升发电效率。",
  },
  {
    title: "压缩机制造",
    small: Yasuoji,
    light: YasuojiL,
    info: "本平台通过网络化的系统部署，通过感知话、物联化、智能风电损失原因与维度众多，一旦故障停机，每日由于发电损失所造成的损失达2-4万元（4MW风机），统",
  },
  {
    title: "家具制造",
    small: Jiaju,
    light: JiajuL,
    info: "本平台通过网络化的系统部署，通过感知话、物联化、智能风电损失原因与维度众多，一旦故障停机，",
  },
  {
    title: "医药",
    small: Yiyao,
    light: YiyaoL,
    info: "本平台通过网络化的系统部署，通过感知话、物联化、智能风电损失原因与维度众多，一旦故障停机，低被动停机时长，将能大大提升发电效率。",
  },
  {
    title: "广电薄膜",
    small: Guangdian,
    light: GuangdianL,
    info: "本平台通过网络化的系统部署，通过感知话、物联化、智能风电损失原因与维度众多，一旦故障停机，",
  },
];
