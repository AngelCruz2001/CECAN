import cecanApi from "api/cecanApi";
import { AxiosResponse } from "axios";
import {
  IAuthResponse,
  IRenewResponse,
} from "interfaces/IAuth.response.interface";
import Router from "next/router";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import { login } from "./authSlice";
import { useGetAccess } from "../../hooks/useGetAccess";

export const startLogin = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const req = cecanApi.post<IAuthResponse>("/auth/login", {
    username,
    password,
  });

  return async (dispatch: Dispatch) => {
    toast.promise(req, {
      loading: "Iniciando sesión...",
      error: (error) => {
        console.log(error);
        return "Hubo un error al iniciar sesión";
      },
      success: ({ data: { data, ok } }: AxiosResponse<IAuthResponse>) => {
        dispatch(
          login({
            token: data.token,
            user: {
              id: data.user.id,
              name: data.user.name,
              surname: data.user.surname,
              full_name: data.user.full_name,
              email: data.user.email,
              role: data.user.role,
            },
          })
        );

        window.localStorage.setItem("token", data.token);

        const items = useGetAccess(data.user.role.name);
        Router.push(`/${items[0].path}`);
        return `Bienvenido ${data.user.full_name}`;
      },
    });
  };
};

export const renewToken = () => {
  const req = cecanApi.get<IRenewResponse>("/auth/renew");

  return async (dispatch: Dispatch) => {
    toast.promise(req, {
      loading: "Renovando token...",
      error: "Hubo un error al renovar el token",
      success: ({ data: { data, ok } }: AxiosResponse<IRenewResponse>) => {
        dispatch(
          login({
            token: data.token,
            user: null,
          })
        );
        localStorage.setItem("token", data.token);
        return "Token renovado";
      },
    });
  };
};

export const startSignUp = ({
  name,
  surname,
  email,
  password,
  role_id,
}: {
  name: string;
  surname: string;
  email: string;
  password: string;
  role_id: string;
}) => {
  const req = cecanApi.post("/auth/signup", {
    name,
    surname,
    email,
    password,
    role_id,
  });

  return async (dispatch: Dispatch) => {
    toast.promise(req, {
      loading: "Creando usuario...",
      error: "Hubo un error al crear el usuario",
      success: () => {
        return "Usuario creado";
      },
    });
  };
};
