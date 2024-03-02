import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "../context/context";
// import { useContex } from "../../context/context";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {

  // const { getAllInstructor, token, instructor } = useContex();


  return (<>
    <Provider>
      <Component {...pageProps} />;
    </Provider>
  </>)
}


