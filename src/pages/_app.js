import '@/styles/globals.css'
import Head from "next/head";
import { LanguageProvider } from '../contexts/LanguageContext';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>


      <LanguageProvider>

        <Component {...pageProps} />
      </LanguageProvider>



    </>
  );
}

export default MyApp;
