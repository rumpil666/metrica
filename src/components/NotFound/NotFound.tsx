import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export const NotFound: React.FC = () => {


  return (
    <main className={styles.notFound}>
      <div className={styles.notFound__container}>
        <h2 className={styles.notFound__title}>404</h2>
        <p className={styles.notFound__subtitle}>Страница не найдена <Link className={styles.notFound__link} onClick={() => { window.history.go(-1) }} to={'#'}>назад</Link></p>
      </div>
    </main>
  );
};