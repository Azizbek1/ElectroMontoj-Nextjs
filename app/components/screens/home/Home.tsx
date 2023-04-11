import { FC, useState } from "react";
import { Meta } from "@/utils/meta";
import styles from "./home.module.scss";
import Servises from "./components/Servises/Servises";
import Dover from "./components/Dover/Dover";
import Portfolio from "./components/Portfolio/Portfolio";
import Price from "./components/Price/Price";
import About from "./components/About/About";
import News from "./components/News/News";
import Slider from "./components/Slider/Slider";
const Home: FC = (props: any) => {
    const { sliders, dover,  servises, porfolio} = props;
  return (
    <Meta title="Электро-монтаж" description="">
      <div className={styles.slider}>
        <Slider items={sliders?.data} />
      </div>
      <Servises items={servises?.data} />
      <Dover items={dover?.data} />
      <Portfolio items={porfolio?.data} />
      <Price />
      <About />
      <News />
    </Meta>
  );
};

export default Home;
