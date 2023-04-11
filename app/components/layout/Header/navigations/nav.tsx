import { FC } from "react";
import MenuItem from "./nav.item";
import { IMenuAddrePhone } from "@/components/fakeData/navigations/nav.types";
import styles from "./nav.module.scss";
const NavigationsTop: FC<{ menu: IMenuAddrePhone }> = ({ menu: { items } }) => {
  return (
    <ul className={styles.menu}>
      {items.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NavigationsTop;
