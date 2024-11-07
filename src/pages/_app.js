import '@/styles/globals.css'
import Head from "next/head";
import { Amplify } from '@aws-amplify/core';
import config from '../aws-exports'; 
import { Auth } from 'aws-amplify';
import { LanguageProvider } from '../contexts/LanguageContext';

Auth.configure(config);

Amplify.configure({
  ...config,
  Storage: {
    AWSS3: {
      ...config.Storage,
      region: 'us-west-1'
    }
  }
});
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
