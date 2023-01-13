import { useAppSelector } from "hooks/hooks";
import { useState, useEffect } from "react";
import styles from "./SelectUser.module.scss";
export const SelectUser = ({
  idDepartment,
  onClick,
}: {
  idDepartment: string;
  onClick: (id: string, idDepartment: string) => void;
}) => {
  const { users } = useAppSelector((state) => state.users);
  const { departments } = useAppSelector((state) => state.fixedAsset);

  const [alreadyAResponsible, setalreadyAResponsible] = useState("");

  useEffect(() => {
    const department = departments.find(
      (department) => department.id === idDepartment
    );
    if (department) {
      const userActive = users?.find(
        (user) => user.id === department.resposible_user_id
      );
      setalreadyAResponsible(
        userActive ? userActive.full_name : "Seleccionar usuario"
      );
    }
  }, []);

  return (
    <select
      name="users"
      id="users"
      className={styles.select}
      onChange={(e) => {
        console.log(e.target.value);
        onClick(idDepartment, e.target.value);
      }}
    >
      <option value={alreadyAResponsible} selected disabled>
        {alreadyAResponsible}
      </option>
      {users?.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};
