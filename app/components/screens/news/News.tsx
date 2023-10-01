import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./news.module.scss";
import { NewsItemsData } from "@/components/fakeData/news/newsData";
import NewItems from "./NewsItems";
const News: FC = (props: any) => {
  const { data } = props?.news
  return (
    <Meta title="Новости" description="">
      <div className={styles.news}>
        <h2 className={styles.newsTitle}>Новости</h2>
        <div className={styles.newsFlex}>
          {data.map((item: any) => {
            return (
              <NewItems
                name={item.name}
                text={item.text}
                file={item.file}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </Meta>
  );
};

export default News;
