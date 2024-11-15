import React from 'react'
import SvgIcons from './svgIcons'
import Alerts from './alerts';

export default function modalHeading(props) {
  const type = props.type ? `-${props.type}` : "success";

  const heading = props.title || "Modal Heading";
  const details = props.details || "Are you sure Send the code?";
  const confirmationErrorProp=props.confirmationError || null;
  const hasIconProp=props.hasIcon || false;

  const handleInput = (e) => {
    // Reemplaza cualquier caracter que no sea un dígito con una cadena vacía.
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

  const handleConfirmClick = () => {
    const code = document.querySelector(".f-field-input-code").value;
    props.onConfirm(code);  // Llamamos a la función que pasamos como prop para confirmar
  };


  return (
    
    <div className="f-modal-overlay">
  
    <div className="f-modal-base-small">
    <div className="f-modal-detail">
    

       
          
       {hasIconProp && (
          <div className={`f-modal-icon${type}`}>
        <div className="f-icon-regular w-embed">
       <SvgIcons type="success"/>
          </div>
          </div>
       )}
          
      
      <div>
        <div className="f-sub-heading-regular">{heading}</div>
        <div className="f-paragraph-regular">{details}</div>
      </div>
    </div>
    <input onInput={handleInput}  className="f-field-input-code" maxLength="6" pattern="\d{6}"/>
    {confirmationErrorProp && (
            <Alerts 
              type="error"
              message={confirmationErrorProp}
            />
    )}

     
  
    <div className="f-modal-wrapper-right">

    <a href="/default-route" onClick={handleConfirmClick} className="f-button-neutral w-button">Confirmar</a>
    </div>
  </div>
  </div>
  )
}
