import "../../styles/main.scss";
import type { AppProps } from "next/app";
import LayoutProvider from "../context/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
