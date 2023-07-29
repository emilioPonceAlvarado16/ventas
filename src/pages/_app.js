// import "../styles/globals.css";
import '@/styles/globals.css'
// import "@/styles/alley.module.css";
import Head from "next/head";
import dynamic from 'next/dynamic';

const DynamicWebflowScriptLoader = dynamic(
  () => import('./WebflowScriptLoader'),
  { ssr: false } // esto deshabilitará la renderización en el servidor para este componente
)


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
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      ></link>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min.css"
        integrity="sha512-A81ejcgve91dAWmCGseS60zjrAdohm7PTcAjjiDWtw3Tcj91PNMa1gJ/ImrhG+DbT5V+JQ5r26KT5+kgdVTb5w=="
        crossOrigin="anonymous"
        // referrerpolicy="no-referrer"
      />

      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>

<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64c27d1872143fc4d0d34bc6" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>

      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-treeview/1.2.0/bootstrap-treeview.min.js"
        integrity="sha512-Hyk+1XSRfagqzuSHE8M856g295mX1i5rfSV5yRugcYFlvQiE3BKgg5oFRfX45s7I8qzMYFa8gbFy9xMFbX7Lqw=="
        crossOrigin="anonymous"
        // referrerpolicy="no-referrer"
      ></script>
      {/* 
      <script>
        $(document).ready(function() {$(".treeview").mdbTreeview()});
      </script> */}

      <Component {...pageProps} />

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default MyApp;
