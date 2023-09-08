// import "../styles/globals.css";
import '@/styles/globals.css'
// import "@/styles/alley.module.css";
import Head from "next/head";
import dynamic from 'next/dynamic';
import  {Amplify} from '@aws-amplify/core';
import config from '../aws-exports'; // Asegúrate de que la ruta a aws-exports es correcta
import { Auth } from 'aws-amplify';

Auth.configure(config);


// Amplify.configure(config)
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
  

    

      {/* <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script> */}

{/* <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64c27d1872143fc4d0d34bc6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script> */}

   
      {/* 
      <script>
        $(document).ready(function() {$(".treeview").mdbTreeview()});
      </script> */}

      <Component {...pageProps} />


   
    </>
  );
}

export default MyApp;
