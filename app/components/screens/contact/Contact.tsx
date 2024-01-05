import { FC } from "react";
import { Meta } from "@/utils/meta";
import styles from "./contact.module.scss";
import { toastr } from "react-redux-toastr";
import { useMutation, useQuery } from "react-query";
import { MaterialIcon } from "@/components/ui/icons/MaterialIcon";
import { useForm } from "react-hook-form";
import { ContactService } from "@/services/contact/contact.service";
import { toastError } from "@/utils/ToastReact/ToastReact";
import { FaMapMarker } from "react-icons/fa";

const Contact: FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<any>();

  const { mutateAsync } = useMutation(
    "create menu",
    (data: any) => ContactService.create(data),
    {
      onError(error: any) {
        toastError(error, "Ошибка Повтарите через 10мин");
      },
      onSuccess() {
        toastr.success("Контак", "Данные успешно отправлены");
      },
    }
  );
  const onSubmit = async (data: any) => {
    await mutateAsync(data);
    reset();
  };
  return (
    <Meta title="Контакт" description="">
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>Контакт</h2>
        <div className={styles.contactFlex}>
          <div className={styles.contactFlexMenu}>
            <ul className={styles.menuCon}>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <FaMapMarker />
                  </span>
                  <span className={styles.rejIco}>Адрес:</span>
                </span>
                <p>г. Узбекистон, ул. Калужская, 80, офис 315</p>
              </li>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <MaterialIcon name="MdCall" />
                  </span>
                  <span className={styles.rejIco}>Телефоны:</span>
                </span>
                <p>+998 (90) 985 12 45</p>
                <p>+998 (90) 995 12 55</p>
              </li>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                    <MaterialIcon name="MdOutlineSms" />
                  </span>
                  <span className={styles.rejIco}>E-mail:</span>
                </span>
                <a href="#">electro@gmail.com</a>
              </li>
              <li className={styles.menuItems}>
                <span className={styles.flexIcon}>
                  <span className={styles.icon}>
                  <MaterialIcon name="MdAccessTime" />
                  </span>
                  <span className={styles.rejIco}>Режим работы:</span>
                </span>
                <p>Пн - Пт: c 8.00 - 19.00 Сб - Вс: c 9.00 - 15.00</p>
              </li>
            </ul>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24016.44787904497!2d69.21623249999999!3d41.198753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1676368330756!5m2!1sru!2s"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={styles.formContact}>
          <h4>
            Если у вас возникли вопросы или предложения, мы будем рады их
            рассмотреть. Для этого заполните форму ниже.
          </h4>
          <div>
            <form className={styles.from} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputsFlex}>
                <div className={styles.inputss}>
                  <div className={styles.inputItem}>
                    <input
                      {...register("name")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className={styles.inputItem}>
                    <input
                      {...register("phone", { required: true, minLength: 12 })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Телефон"
                    />
                    {errors.phone && <span className={styles.inputError}>Минимальный размер телефона 12</span>}
                  </div>
                </div>
                <div className={styles.inputText}>
                  <textarea
                    placeholder="Ваше Сообшения"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    cols={30}
                    rows={10}
                    {...register("text")}
                  />
                </div>
              </div>
              <button className={styles.button}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Contact;
