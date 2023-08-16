import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Script from "next/script";
import "../styles.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }

  return (
    <Layout>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
