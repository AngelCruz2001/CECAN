import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser} from "@fortawesome/free-solid-svg-icons";
import styles from "./Topbar.module.scss";
type Props = {
  username: string;
};

export const Logout: FC<Props> = ({ username }) => {
  return (
    <div className={styles.logout}>
      <FontAwesomeIcon icon={faCircleUser} />
      <h2>{username}</h2>
    </div>
  );
};
