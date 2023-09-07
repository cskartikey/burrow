import Layout from "@/layout/layout";
import type { AppProps } from "next/app";
import "static/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
