import type { GetStaticProps, NextPage } from "next";
import Home from "@/screens/home/Home";
import { SlideService } from "@/services/sliders/slide.service";
import { DoverService } from "@/services/dover/dover.service";
import { ServisesService } from "@/services/servises/servises.service";
import { PortfolioService } from "@/services/portfolio/portfolio.service";
const HomePage: NextPage = (props) => {
  return <Home {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: sliders } = await SlideService.getAll();
    const { data: dover } = await DoverService.getAll();
    const { data: servises } = await ServisesService.getAll();
    const { data: porfolio } = await PortfolioService.getAll();
    return {
      props: { sliders, dover, servises, porfolio },
    };
  } catch (error) {
    return {
      props: {
        sliders: [],
        dover: [],
        servises: [],
        porfolio: [],
      },
    };
  }
};
export default HomePage;
