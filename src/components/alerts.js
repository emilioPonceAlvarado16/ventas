import React, { useEffect, useState } from 'react'
import SvgIcons from './svgIcons';

export default function alerts(props) {
    const classSelected = `f-alert-${props.type}`;
    const messageSelected = props.message || "Alert placeholder";
    const closeIcon = props.close || false;
    const isAbove =props.above ? "f-alert-small-above": "f-alert-small"
    const [dismissed, setDismissed] = useState(false);

    const handleClose = () => {
      setDismissed(true); 
      setTimeout(() => {
      }, 500); 
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        handleClose();
      }, 2500); // por ejemplo, después de 3 segundos

      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que expire el temporizador
    }, []);
    
  return (
    <div className={`${isAbove} ${dismissed ? 'dismissed' : ''}`}>
    <div className="f-alert-wrapper">
      <div className={classSelected}>
        <SvgIcons type={props.type}/>
      </div>
      <div className="f-paragraph-small">{messageSelected}</div>
    </div>
    {closeIcon ? (<a href="#" className="f-alert-close w-inline-block" >
     <div className="f-alert-x w-embed">
       

        <svg width="420" height="420"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"></path>
        </svg>
      </div>    </a>):<></>}

  </div>
  )
}
