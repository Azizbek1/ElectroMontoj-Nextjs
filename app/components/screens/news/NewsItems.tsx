import Image from "next/image";
import styles from "./news.module.scss";
import Link from "next/link";
import { getNewsUrl } from "@/configs/url.config";
const NewItems = ({ name, text, file, id }: any) => {
  return (
    <Link href={getNewsUrl(String(id))} passHref>
      <div className={styles.item} key={id}>
        <div className={styles.itemImage}>
          <Image src={file} alt="png" width={170} height={130} />
        </div>
        <div className={styles.itemBox}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewItems;
