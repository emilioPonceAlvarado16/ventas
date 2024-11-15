import React, { useState } from 'react'
import Alerts from './alerts';
import ResetPassword from './resetPassword';
export default function ForgotPassword({ forgotPassword, forgotPasswordError }) {
  const [email, setEmail] = useState('');
  const [showRecovery, setShowRecovery] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const wasSuccessful =await forgotPassword(email);
    if (wasSuccessful){
      setShowRecovery(true)
    }else{
      setShowRecovery(false)
    }
    setLoading(false)
  };

  return (
    <>
    {!showRecovery ? ( <div className="f-section-large">
        <div className="f-container-regular">
          <div className="f-header-title-wrapper-center">
            <div className="f-margin-bottom-43" style={{marginTop:"12vh"}}>
              <h1 className="f-h1-heading">Restablezca su contraseña</h1>
            </div>
            <div className="f-margin-bottom-42">
              <p className="f-paragraph-large">Introduce tu dirección de correo electrónico y te enviaremos un código para restablecer tu contraseña.</p>
            </div>
            <div className="f-header-form-block w-form">
              <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" className="f-header-form-wrapper" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="f-header-input-field w-input"
                  maxLength="256"
                  name="Header-Email-Top"
                  data-name="Header Email Top"
                  placeholder="Enter your email"
                  id="Header-Email-Top"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" data-wait="Please wait..." className="f-button-neutral w-button">  {loading ? <div className="spin"></div> : 'Enviar'}</button>
              </form>
              {forgotPasswordError && <Alerts type="warning" message={`${forgotPasswordError}`} />}

            </div>
          </div>
        </div>
      </div>): <ResetPassword/>}
    </>
  );
}
