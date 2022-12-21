import styles from "./Topbar.module.scss";
import { Logout } from "./Logout";
import { useAppSelector } from "../../hooks/hooks";
import { authSlice } from "../../store/auth/authSlice";

export const TopBar = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className={styles.topBar}>
      <div className={styles.logos}>
        <img className={styles.image} src="./SSALogo.png" alt="" />
        <div className={styles.text}>
          <h2>CENTRO ESTATAL DE CANCEROLOGÍA</h2>
          <img className={styles.image} src="./cecan-logo.png" alt="" />
        </div>
        1
      </div>

      <Logout username={user ? user.full_name : "Usuario"} />
    </div>
  );
};
