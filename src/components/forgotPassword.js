import React from 'react'

export default function forgotPassword() {
  return (
  <>
  <div className="f-section-large">
    <div className="f-container-regular">
      <div className="f-header-title-wrapper-center">
        <div className="f-margin-bottom-44">
        </div>
        <div className="f-margin-bottom-43" style={{marginTop:"12vh"}}>
          <h1 className="f-h1-heading">Restablezca su contraseña.</h1>
        </div>
        <div className="f-margin-bottom-42">
          <p className="f-paragraph-large">Introduce tu dirección de correo electrónico y te enviaremos un código para restablecer tu contraseña.</p>
        </div>
        <div className="f-header-form-block w-form">
          <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" method="get" className="f-header-form-wrapper" data-wf-page-id="64c27d1872143fc4d0d34bca" data-wf-element-id="db3c5bd0-8720-e69d-3ee4-22eae0bc5aeb">
            
            <input type="email" className="f-header-input-field w-input" maxLength="256" name="Header-Email-Top" data-name="Header Email Top" placeholder="Enter your email" id="Header-Email-Top" />
            
            
            <button type="submit"  data-wait="Please wait..." className="f-button-neutral w-button">Enviar</button>
          </form>
         
        </div>
      </div>
    </div>
  </div>
          
  </>
  )
}
