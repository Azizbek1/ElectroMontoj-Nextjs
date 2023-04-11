import { FC, ReactElement } from "react";
import styles from "./dover.module.scss";
import DoverItemBox from "./DoverItem";
interface IItems {
  id: number;
  name: string;
  text: string;
  url: string
  show: string
}
interface IDover {
  items: IItems[]
}
const Dover = (props: IDover) => {
  const {items} = props

  return (
    <div className={styles.dover}>
      <h2 className={styles.doverTitle}>ПОЧЕМУ НАМ ДОВЕРЯЮТ СОТНИ КЛИЕНТОВ</h2>
      <div className={styles.doverFLex}>
        {items.map((item: any) => (
          <DoverItemBox
            image={item.url}
            title={item.name}
            key={item.id}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Dover;
