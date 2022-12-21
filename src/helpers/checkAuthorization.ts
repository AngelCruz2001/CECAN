import { toast } from "react-hot-toast";

export const checkAuthorization = (status: number) => {

  console.log("Cheking authorization", status);
  if (status === 401) {
    localStorage.clear();
    toast.error("Sesión expirada, por favor inicia sesión de nuevo");
    window.location.href = "/login";
  }
};


