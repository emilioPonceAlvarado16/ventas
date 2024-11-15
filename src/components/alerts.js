import React, { useEffect, useState } from 'react'
import SvgIcons from './svgIcons';

export default function Alerts(props) {
    const classSelected = `f-alert-${props.type}`;
    const messageSelected = props.message || "Alert placeholder";
    const closeIcon = props.close || false;
    // const isAbove =props.above ? "f-alert-small-above": "f-alert-small"
    const isAbove = props.above ? (props.type === 'warning' ? "f-alert-regular-above" : "f-alert-small-above") : "f-alert-small";
    // const isAbove =props.above ? "f-alert-regular-above": "f-alert-small"
    const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Establecer el temporizador para cambiar el estado a 'dismissed' y luego llamar a onClose
    const timer = setTimeout(() => {
        setDismissed(true); // Inicia la transición de salida
        // Después de que la transición haya tenido tiempo de completarse, llamar a onClose
        setTimeout(() => {
            props.onClose?.();
        }, 750);
    }, 3000);

    // La función de limpieza ahora solo necesita limpiar el temporizador
    return () => clearTimeout(timer);
}, [props.onClose]); // Asegúrate de que onClose se llama solo si cambia


  const dynamicStyles = {
    transform: dismissed ? 'translateX(100%)' : 'translateX(0)',
    opacity: dismissed ? 0 : 1,
    transition: 'transform 0.75s ease-in-out, opacity 0.5s ease-in-out',
};
  return (
    <div className={`${isAbove} ${dismissed ? 'dismissed' : ''}`} style={dynamicStyles}>
    <div className="f-alert-wrapper">
      <div className={classSelected}>
        <SvgIcons type={props.type}/>
      </div>
      <div className="f-paragraph-small">{messageSelected}</div>
    </div>
    {closeIcon ? (<a href="/default-route" className="f-alert-close w-inline-block" >
     <div className="f-alert-x">
        <svg width="420" height="420"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"></path>
        </svg>
      </div>    </a>):<></>}

  </div>
  )
}
