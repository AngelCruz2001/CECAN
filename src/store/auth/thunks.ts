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
      error: "Hubo un error al iniciar sesión",
      success: ({ data: { data, ok } }: AxiosResponse<IAuthResponse>) => {
        window.localStorage.setItem("token", data.token);

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
        Router.push("/catalogoFarmacia");
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
