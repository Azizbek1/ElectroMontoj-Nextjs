import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./servises.module.scss";
import ServisesItem from "./ServisesItem";
const Servises: FC = ({servises} : any) => {
  const {data} = servises
  return (
    <Meta title="Услуги" description="">
      <div className={styles.servises}>
        <h2 className={styles.servisesTitle}>Услуги</h2>
        <div className={styles.servisesFlex}>
          {data.map((item: any) => {
            return (
              <ServisesItem
                file={item.file}
                name={item.name}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </Meta>
  );
};

export default Servises;
