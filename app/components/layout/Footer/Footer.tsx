import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import styles from "./footer.module.scss";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";

const FooterLayout = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFlex}>
        <div className={styles.footerItem}>
          <h4>Контакты</h4>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdPhoneForwarded"} /></span>г. Узбекистон, ул. Калужская, 80, офис 315</a></li>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MaterialIcon name={"MdPhoneForwarded"} /></span>г. Чирчик, Алишер Наваи, офис 25</a></li>
          </ul>
        </div>
        <div className={styles.footerItem}>
          <h4>Мы в соц сетях</h4>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><FaTelegram /></span>Telegram</a></li>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><FaInstagramSquare /></span>Instagram</a></li>
            <li className={styles.menuItem}><a className={styles.menuLinks} href="#"><span className={styles.icon}><MdOutlineFacebook /></span>Facebook</a></li>
          </ul>
        </div>
        <div className={styles.footerItem}>
          <button className={styles.button}>Заказать званок</button>
        </div>
      </div>
      <div className={styles.footerEnd}>
        <a href="https://komilovstudio.uz/">
          Разработала команда Komilovstudio.uz
        </a>
      </div>
    </div>
  );
};

export default FooterLayout;
