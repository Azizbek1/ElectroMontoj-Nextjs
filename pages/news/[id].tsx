import NewsDetail from "@/components/screens/news/NewsDetail";
import { NewsService } from "@/services/news/news.service";
import { GetStaticProps } from "next";
import React, { ReactElement } from "react";

interface Props {}

export default function NewsId(paths: any): ReactElement {
  return <NewsDetail paths={paths}/>;
}

export const getStaticPaths = async (paths: any) => {
  try {
    const { data: news } = await NewsService.getAll();
    const { data } = news;
    return {
      paths: data.map((serv: any) => ({
        params: {
          id: serv.id.toString(),
        },
      })),
      fallback: "blocking",
    };
  } catch (error) {
    return {
      props: {
        news: [],
      },
    };
  }
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const { data: news } = await NewsService.show(String(params.id));
    return {
      props: { news },
    };
  } catch (error) {
    return {
      props: {
        newses: [],
      },
    };
  }
};
