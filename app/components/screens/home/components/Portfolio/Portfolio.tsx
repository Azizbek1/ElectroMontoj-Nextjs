import { FC, useState } from "react";
import styles from "./portfolio.module.scss";
import PortfolioItem from "./PortfolioItem";
import { AppLinkTheme, Applink } from "@/components/elements/AppLink/Applink";
import LightBox from "@/components/ui/lightbox/LightBox";
import { IPort } from "@/components/fakeData/portfolio/portfolio.types";

const Portfolio = (props: IPort) => {
  const [clickedImg, setClickedImg] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState<any>(null);
  const handleClick = (item: any, index: number) => {
    setCurrentIndex(index);
    setClickedImg(item.file);
  };
  const handelRotationRight = () => {
    const totalLength = props.items.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = props.items[0].file;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = props.items.filter((item: any) => {
      return props.items.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].file;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = props.items.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = props.items[totalLength - 1].file;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = props.items.filter((item: any) => {
      return props.items.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].file;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.portfolioTitle}>
        ПРОЕКТЫ, ВЫПОЛНЕННЫЕ НАШЕЙ КОМПАНИЕЙ В 2019 ГОДУ
      </h2>
      <hr className={styles.hr} />
      <p className={styles.portfolioText}>
        Мы заблаговременно оговариваем сроки выполнения и соблюдаем все
        договоренности!
      </p>
      <div className={styles.portfolioFLex}>
        {props.items.map((item, index) => (
          <PortfolioItem
            file={item.file}
            name={item.name}
            key={index}
            text={item.text}
            handleClick={handleClick}
            schet={index}
          />
        ))}
        {clickedImg && (
          <LightBox
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
      {/* <div className={styles.button}>
        <Applink theme={AppLinkTheme.ORANGE} href={"/servises"}>
          Посмотреть ешё
        </Applink>
      </div> */}
    </div>
  );
};

export default Portfolio;
