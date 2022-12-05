import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { useEffect } from "react";
import Router from "next/router";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token && Router.pathname !== "/login") {
      window.location.href = "/login";
    } else if (token && Router.pathname === "/login") {
      window.location.href = "/catalogoFarmacia";
    }
  }, []);

  return (
    <Provider store={store}>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "2.2rem",
            height: "100%",
          },
        }}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
