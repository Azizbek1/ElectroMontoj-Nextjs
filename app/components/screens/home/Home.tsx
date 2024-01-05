import React, { FC, useRef, useState } from "react";
import { Meta } from "@/utils/meta";
import styles from "./home.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '/electric-slide-1_1920x610_1ab.jpg'
import slide2 from '/electric-slide-2_1920x610_1ab.jpg'
import slide3 from '/electric-slide-3_1920x610_1ab.jpg'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import { Htag } from "@/components/elements/Htag/Htag";
import Image from "next/image";
import { ISliders } from "@/components/fakeData/sliders/slider.types";
const Home: FC = () => {
  const Sliders: ISliders[] = [
    { id: 0, title: "Электрика под ключ в Ташкенте и Ташкентской области", text: "Гарантия 10 лет на работы и материалы", images: <Image width={1400} height={600} priority src="/electric-slide-3_1920x610_1ab.jpg" alt="jpg" /> },
    { id: 1, title: "Гарантия лучшей цены на услуги в Узбекистане", text: "Ремонт любой сложности от утюга до промышленного станка", images: <Image width={1400} height={600} priority src="/electric-slide-3_1920x610_1ab.jpg" alt="jpg" /> },
    { id: 2, title: "Замена, установка счетчика 200 000 сум", text: "Только 7 дней скидка 30%", images: <Image width={1400} height={600} priority src="/electric-slide-3_1920x610_1ab.jpg" alt="jpg" /> },
  ]
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
          {Sliders.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className={styles.slider}>
                <div className={styles.absolyute}>
                  <Htag tag="h1">{item.title}</Htag>
                  <Htag tag="h4">{item.text}</Htag>
                </div>
                <div className={styles.images}>
                  {item.images}
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
