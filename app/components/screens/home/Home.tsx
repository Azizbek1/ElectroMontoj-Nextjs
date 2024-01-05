import React, { FC, useRef, useState } from "react";
import { Meta } from "@/utils/meta";
import styles from "./home.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import News from "./components/News/News";
import { sliders } from "@/components/fakeData/sliders/slider";
import { Htag } from "@/components/elements/Htag/Htag";
import Image from "next/image";
import Servises from "./components/Servises/Servises";
import { servisesItem } from "@/components/fakeData/servises/servises";
const Home: FC = () => {
  return (
    <Meta title="Электро-монтаж" description="">
      <div className={styles.slider}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {sliders.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slider}>
                <div className={styles.absolyute}>
                  <Htag tag="h1">{item.title}</Htag>
                  <Htag tag="h4">{item.text}</Htag>
                </div>
                <div className={styles.images}>
                  <Image width={1400} height={600} priority src={item.images} alt="jpg" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <Servises items={servisesItem} /> */}
      {/* <Dover items={doverItem} />
      <Portfolio items={porfolio} /> */}
      <Price />
      <About />
      {/* <News /> */}
    </Meta>
  );
};

export default Home;
