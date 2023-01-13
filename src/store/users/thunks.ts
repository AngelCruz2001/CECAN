import cecanApi from "api/cecanApi";
import { IUserResponse } from "interfaces/IUser.interface";
import { Dispatch } from "redux";
import { setRoles, setUsers } from "./usersSlice";
import { toast } from "react-hot-toast";
import { IRolesResponse } from "../../interfaces/responses/IRoles.response.inrerface";

export const startGetUsers = () => async (dispatch: Dispatch) => {
  const {
    data: { data, ok },
  } = await cecanApi.get<IUserResponse>("/users");
  if (ok) {
    dispatch(setUsers(data.users));
  } else {
    toast.error("Error al obtener los datos de la farmacia");
    console.log(data);
  }
};

export const startGetRoles = () => async (dispatch: Dispatch) => {
  const {
    data: { data, ok },
  } = await cecanApi.get<IRolesResponse>("/roles");
  if (ok) {
    dispatch(setRoles(data.roles));
  } else {
    toast.error("Error al obtener los datos de la farmacia");
    console.log(data);
  }
};
