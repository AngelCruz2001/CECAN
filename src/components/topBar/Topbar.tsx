import styles from "./Topbar.module.scss";
import { Logout } from "./Logout";

export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logos}>
        <img className={styles.image} src="./SSALogo.png" alt="" />
        <div className={styles.text}>
          <h2>CENTRO ESTATAL DE CANCEROLOGÍA</h2>
          <img className={styles.image} src="./cecan-logo.png" alt="" />
        </div>
      </div>

      <Logout username="Emmanuel Perez Alba" />
    </div>
  );
};
