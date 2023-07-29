import { useEffect } from 'react';

function WebflowScriptLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/js/webflow.js";
    script.async = true;

    script.onload = () => {
      if (window.Webflow) {
        window.Webflow.require('ix2').init();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  }, []);

  return null;
}

export default WebflowScriptLoader;
