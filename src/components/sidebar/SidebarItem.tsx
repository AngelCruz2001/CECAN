import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, text } from "@fortawesome/fontawesome-svg-core";
import styles from "./Sidebar.module.scss";
type Props = {
  icon: IconProp;
  text: string;
  active: boolean;
  onClick: () => void;
};

export const SidebarItem: FC<Props> = ({ icon, text, active }) => {
  return (
    <div className={`${styles.item} ${active && styles.active}`}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <h2>{text}</h2>
    </div>
  );
};

// Getting icons free from https://fontawesome.com/
