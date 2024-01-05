import styles from "./servises.module.scss";
import ServisesItemBlock from "./ServiseItemBlock";
import { AppLinkTheme, Applink } from "@/components/elements/AppLink/Applink";

const Servises = (props: any) => {
  const { items } = props
  return (
    <div className={styles.servises}>
      <h2 className={styles.servisesTitle}>Услуги</h2>
      <div className={styles.servisesFLex}>
        {items.map((item: any) => {
          return (
            <ServisesItemBlock
              file={item.file}
              title={item.name}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
      <div className={styles.seeServises}>
        <Applink theme={AppLinkTheme.ORANGE} href={"/servises"}>
          Посмотреть все услуги
        </Applink>
      </div>
    </div>
  );
};

export default Servises;
