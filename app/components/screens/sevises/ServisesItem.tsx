import React from "react";
import styles from "./servises.module.scss";
import Image from "next/image";
export default function ServisesItem({ file, name, id }: any) {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.itemImage}>
        <Image src={`/png/services-icon-2.png`} alt="png" width={60} height={60} />
      </div>
      <div>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  );
}
