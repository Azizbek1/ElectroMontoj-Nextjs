import styles from "./servises.module.scss";
import Image from "next/image";
import { IServises } from "@/components/fakeData/servises/servises.types";
import Link from "next/link";
import { getServisesUrl } from "@/configs/url.config";
import BlockServiseStyle from "./servises.module.scss";
const ServisesItem = ({ file, title, id }: IServises) => {
  return (
    <Link href={getServisesUrl(String(id))} passHref>
      <div className={styles.item} key={id}>
        <div className={styles.itemImage}>
          <Image
            src="/png/services-icon-2.png"
            alt="png"
            width={60}
            height={60}
          />
        </div>
        <div>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServisesItem;
