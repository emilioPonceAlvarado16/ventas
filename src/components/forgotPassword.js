import React, { useReducer, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Alerts from "../components/alerts"
import Link from 'next/link';
import PasswordInput from './PasswordInput';
import ModalHeading from './modalHeading';
import { useRouter } from 'next/router';


const initialState = {
  name: '',
  email: '',
  password: ''
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export default function Account() {

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { signIn, isLoading, signInError, setSignInError, confirmationError, resendConfirmationCode,confirmSignUp } = useAuth(); // Extraer signIn e isLoading desde el hook useAuth
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
  const [showConfirmed, setshowConfirmed] = useState(false)
  const router = useRouter();

  const handleSubmit = async function (event) {
    event.preventDefault();
    setHasStartedTyping(false);

    if (state.email === "" || state.password === "") {
      setSignInError("Por favor, llena todos los campos");
    } else if (!isValidEmail(state.email)) {
      setSignInError("Por favor, ingresa un correo válido");
    } else {
      await signIn(state.email, state.password);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
    if (!hasStartedTyping) setHasStartedTyping(true);
    setSignInError(); // Borrar el mensaje de error cuando el usuario comienza a escribir
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };


  const handleConfirmation = async (code) => {
    const wasSuccessful = await confirmSignUp(state.email, code);  // Confirmamos el registro con el código

    if (wasSuccessful) {
      setShowModal(false);
      setshowConfirmed(true); // Mostrar la alerta de bienvenida
      setTimeout(() => {
       setSignInError()// Redirige al usuario a "/home"
      }, 2000);
    } else {
      setShowModal(true);
      setshowConfirmed(false);
    }
  };

 


  return (
    <div className="f-account-section">
        {showConfirmed && (
            <Alerts 
              type="success"
              message="¡Bienvenido! Tu registro fue exitoso."
              close={true}
              above={true}
            />
    )}
      <div className="f-account-container-l">
        <div className="f-account-content-wrapper">
          <div className="f-margin-bottom-138">
            <h5 className="f-h5-heading">Restablecer contraseña</h5>
          </div>
          <p className="f-paragraph-regular">Por favor, introduce tu correo electrónico para restablecer tu contraseña.</p>
 
          <div className="f-margin-bottom-137">
          </div>
          <div className="f-account-form-block w-form">
            <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form" data-name="Sign Up Form" data-wf-page-id="64c27d1872143fc4d0d34bca" data-wf-element-id="93df8944-7819-2d4d-bbe7-1a68d6877ee0">
              <div className="w-layout-grid f-account-input-grid">

                <div className="f-field-wrapper">
                  <div className="f-field-label">Email</div>
                  <input
                    type="email"
                    className="f-field-input w-input"
                    name="email"
                    placeholder="Your email..."
                    value={state.email}
                    onChange={handleFieldChange}
                    onKeyDown={handleKeyDown}
                    style={signInError && !hasStartedTyping ? { borderColor: "#f93" } : {}}
                    required={true}

                  />
                </div>
           
              </div>
              {signInError && !hasStartedTyping ? <Alerts type="warning" message={`${signInError}`} /> : <></>}

           

              <div className="f-account-form-button">
                <a
                  onClick={handleSubmit}
                  className={`f-button-neutral w-button ${isLoading ? "button-loading" : ""}`}
                >
                  {isLoading ? <div className="spin"></div> : 'E'}
                </a>


              </div>

            </form>

          </div>

         

        </div>
      </div>
 
    </div>
  )
}
