import React, { FC, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, text } from "@fortawesome/fontawesome-svg-core";
import styles from "./Sidebar.module.scss";
import Router, { useRouter } from "next/router";
type Props = {
  icon: IconProp;
  text: string;
  path: string;
};

export const SidebarItem: FC<Props> = ({ icon, text, path }) => {

  const router = useRouter();

  const currentPath = useMemo(() => router.pathname, [router.pathname]);
  const navigate = () => {
    router.push(path);
  };
  // Get current page


  return (
    <div
      className={`${styles.item} ${
        currentPath === `/${path}` && styles.active
      }`}
      onClick={navigate}
    >
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <h2>{text}</h2>
    </div>
  );
};

// Getting icons free from https://fontawesome.com/
