// @ts-nocheck
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./index.scss";

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
              <img src={item} />
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
  "https://www.itying.com/images/flutter/1.png",
  "https://www.itying.com/images/flutter/2.png ",
  "https://www.itying.com/images/flutter/3.png ",
  "https://www.itying.com/images/flutter/4.png ",
  "https://www.itying.com/images/flutter/5.png ",
  "https://www.itying.com/images/flutter/6.png ",
  "https://www.itying.com/images/flutter/7.png ",
];
