import AppProvider from "@/contexts/appProvider";
import "@/styles/globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReCaptchaProvider
      useEnterprise
      reCaptchaKey="6LffL0kmAAAAAMnz1qUKGG0Mn8dJfino8D27yFT0"
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ReCaptchaProvider>
  );
}
